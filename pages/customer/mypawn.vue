<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">ตารางจำนำ</h1>
        </div>

        <!-- Search Box -->
        <div class="flex mb-5">
          <!-- Search -->

          <div class="flex mt-20 mb-5">
            <!-- Citizen ID Input Box -->
            <input
              v-model="searchIdText"
              @input="applyFilter_id"
              type="number"
              id="examination-id-search"
              class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-40 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="เลขสัญญาจำนำทอง"
            />

            <!-- Customer ID Input -->
            <input
              v-model="searchIdText1"
              @input="applyFilter_customerid"
              type="number"
              id="customer-id-search"
              class="block py-2.5 ml-4 text-sm text-gray-900 border-2 border-gold rounded-lg w-40 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="เลขบัตรประชาชน"
            />

            <!-- Date sort -->
            <select
              v-model="searchIdText2"
              @change="applyFilter_status"
              type="string"
              id="status-id-search"
              class="ml-4 px-4 border-2 rounded-lg border-gold text-gray-500 w-50"
            >
              <option value="" disabled selected hidden>กรุณาเลือกสถานะ</option>
              <option value="active">active</option>
              <option value="finish">finish</option>
            </select>
            <div
              class="flex ml-4 px-4 py-2 bg-darkblue text-white hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
            >
              <button @click="sortpawnsByDate" class="flex items-center">
                <span id="date-sort">กดเพื่อเรียงวันที่</span>

                <span id="less-to-more" class="flex hidden px-1">
                  น้อยไปมาก
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="ml-1 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </span>

                <span id="more-to-less" class="flex hidden px-1">
                  มากไปน้อย
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-6 w-6"
                  >
                    <path
                      d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <!-- End date sort -->
          </div>
        </div>

        <!-- Table -->
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold mb-6"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
          >
            <tr>
              <th scope="col" class="px-6 py-4">รหัสรายการ</th>
              <th scope="col" class="px-6 py-4">เลขบัตรประชาชนของลูกค้า</th>
              <th scope="col" class="px-6 py-4">สถานะของรายการ</th>
              <th scope="col" class="px-6 py-4">วันทำสัญญา</th>
              <th scope="col" class="px-6 py-4">วันสิ้นสุดสัญญา</th>
              <th scope="col" class="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="bg-white border-b border-gold"
              v-for="pawn of paginatedPawns"
              :key="pawn.id"
              @click="sortTable(field.key)"
            >
              <td
                scope="row"
                class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                v-if="pawn.customer_id === user.national_id"
              >
                <nuxt-link :to="`/pawn/${pawn.id}`">
                  {{ pawn.id }}
                </nuxt-link>
              </td>

              <td
                class="py-4 text-center"
                v-if="pawn.customer_id === user.national_id"
              >
                <nuxt-link :to="`/pawn/${pawn.id}`">{{
                  pawn.customer_id
                }}</nuxt-link>
              </td>

              <td
                class="py-4 text-center"
                v-if="pawn.customer_id === user.national_id"
              >
                <nuxt-link :to="`/pawn/${pawn.id}`">
                  <span
                    v-if="pawn.status === 'active'"
                    class="px-[18px] py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                  >
                    {{ pawn.status }}
                  </span>
                  <span
                    v-else
                    class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                  >
                    {{ pawn.status }}
                  </span></nuxt-link
                >
              </td>
              <td
                class="py-4 text-center text-blue-500"
                v-if="pawn.customer_id === user.national_id"
              >
                <nuxt-link :to="`/pawn/${pawn.id}`"
                  >{{
                    new Date(pawn.contract_date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                  }}
                </nuxt-link>
              </td>
              <td
                class="py-4 text-center text-purple-500"
                v-if="pawn.customer_id === user.national_id"
              >
                <nuxt-link :to="`/pawn/${pawn.id}`">
                  {{
                    new Date(pawn.expiry_date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                  }}
                </nuxt-link>
              </td>
              <!-- popup modal -->
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-center mb-14">
          <button
            @click="page--"
            :disabled="page <= 1"
            class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
            :class="{
              'disabled:bg-gold disabled:text-white disabled:cursor-not-allowed':
                page <= 1,
            }"
          >
            หน้าก่อน
          </button>

          <button
            @click="page++"
            :disabled="page >= Math.ceil(pawns.length / perPage)"
            class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
            :class="{
              'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
                page >= Math.ceil(pawns.length / perPage),
            }"
          >
            หน้าถัดไป
          </button>
        </div>
      </div>
    </div>

    <div
      id="popup-modal-remove"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div
        v-if="showConfirmationModal"
        class="relative w-full max-w-md max-h-full"
      >
        <div class="relative bg-white rounded-lg shadow">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal-remove"
            @click="cancelAction"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useMyFetch from "~/composables/useMyFetch";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "~/stores/useAuthStore";

// definePageMeta({
//   middleware: "authenticated", //Auth checker
// });

const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(10); // เพิ่ม ref สำหรับ perPage
const sortOrder = ref("less");
const searchIdDate = ref("");
const searchIdText = ref("");
const searchIdText1 = ref("");
const searchIdText2 = ref("");
const showConfirmationModal = ref(false);
const route = useRoute();
const authStore = useAuthStore();
const user = computed(() => authStore.user);
const { data: pawns, pending } = await useMyFetch<any>("pawn", {});

definePageMeta({
  middleware: "authenticated", //Auth checker
});
const paginatedPawns = computed(() => {
  if (Array.isArray(pawns.value)) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return pawns.value.slice(start, end);
  } else {
    return [];
  }
});

// End delete data
const applyFilter_id = () => {
  const filteredpawns = pawns.value.filter((examination) => {
    // Check if examination ID contains the searchIdText value
    return examination.id.toString().includes(searchIdText.value);
  });
  pawns.value = filteredpawns;
  if (searchIdText.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
  }
  // Set the filtered pawns back to the original pawns
  pawns.value = filteredpawns;
};

const applyFilter_customerid = () => {
  const filteredpawns = pawns.value.filter((examination) => {
    // Check if examination ID contains the searchIdText value
    return examination.customer_id.toString().includes(searchIdText1.value);
  });

  pawns.value = filteredpawns;
  if (searchIdText1.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
  }
  // Set the filtered pawns back to the original pawns
  pawns.value = filteredpawns;
};

const applyFilter_status = () => {
  if (searchIdText2.value === "") {
    // Reload the page if the select field is empty
    window.location.reload();
    return; // กลับออกจากฟังก์ชันเพื่อไม่ทำงานขั้นต่อไป
  }
  const filteredpawns = pawns.value.filter((examination) => {
    // Check if examination status matches the selected status in searchIdText2
    return examination.status === searchIdText2.value;
  });
  pawns.value = filteredpawns;
};

const sortpawnsByDate = () => {
  const moreToLess = document.getElementById("more-to-less") as HTMLElement;
  const LessToMore = document.getElementById("less-to-more") as HTMLElement;
  const dateSort = document.getElementById("date-sort") as HTMLElement;
  if (pawns.value) {
    if (sortOrder.value === "less") {
      // Sort in ascending order น้อยไปมาก
      pawns.value.sort(
        (a, b) => new Date(a.contract_date) - new Date(b.contract_date),
        moreToLess.classList.add("hidden"),
        dateSort.classList.add("hidden"),
        LessToMore.classList.remove("hidden")
      );
      sortOrder.value = "more"; // Set sorting order to descending มากไปน้อย
    } else {
      LessToMore.classList.add("hidden"), moreToLess.classList.remove("hidden");
      // Sort in descending order มากไปน้อย
      pawns.value.sort(
        (a, b) => new Date(b.contract_date) - new Date(a.contract_date)
      );
      sortOrder.value = "less"; // Set sorting order to ascending น้อยไปมาก
    }
  }
};
</script>
