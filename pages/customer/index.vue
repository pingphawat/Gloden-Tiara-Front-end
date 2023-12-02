<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>

<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">ข้อมูลลูกค้า</h1>
        </div>

        <!--user ID Input Box -->
        <!--user ID Input Box -->
        <div class="flex mt-20 mb-5">
          <!-- Search -->
          <!-- Search -->
          <!-- Customer ID Input -->
          <input
              v-model="searchIdText1"
              @input="applyFilter_customerid"
              type="number"
              id="customer-id-search"
              class="block py-2.5 ml-4 text-sm text-gray-900 border-2 border-gold rounded-lg w-60 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="เลขบัตรประชาชน"
          />

          <div
              class="flex ml-4 px-4 py-2 bg-darkblue text-white hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
          >
            <button @click="sortuserByDate" class="flex items-center">
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
        </div>
      </div>

      <!-- Add Button -->
      <!-- popup modal -->
      <div
          id="popup-modal"
          tabindex="-1"
          class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
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
            <div class="p-6 text-center">
              <svg
                  class="mx-auto mb-4"
                  width="50px"
                  height="50px"
                  viewBox="0 0 117 117"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title />

                <desc />

                <defs />

                <g
                    fill="none"
                    fill-rule="evenodd"
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                >
                  <g fill-rule="nonzero" id="correct">
                    <path
                        d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                        fill="#17AB13"
                        id="Shape"
                    />

                    <path
                        d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                        fill="#4A4A4A"
                        id="Shape"
                    />
                  </g>
                </g>
              </svg>
              <h3
                  class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
              >
                ยืนยันการบันทึกรายการหรือไม่?
              </h3>
              <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                บันทึกรายการ
              </button>
              <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                ยกเลิกรายการ
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End popup modal -->
    </div>

    <!-- Table -->
    <table
        v-if = "users && users.length > 0"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold mb-10"
    >
      <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
      >
      <tr>
        <th scope="col" class="px-2 py-4">เลขบัตรประชาชน</th>
        <th scope="col" class="px-2 py-4">ชื่อ</th>
        <th scope="col" class="px-2 py-4">นามสกุล</th>
        <th scope="col" class="px-2 py-4">หมายเลขโทรศัพท์</th>
        <th scope="col" class="px-2 py-4">ตำแหน่ง</th>
        <th scope="col" class="px-2 py-4">วันที่สร้างบัญชี</th>
        <th scope="col" class="px-2 py-4"></th>
      </tr>
      </thead>

      <tbody>
      <tr
          class="bg-white border-b border-gold"
          v-for="user of paginatedUsersByRole"
          :key="user.national_id"
      >
        <td
            scope="row"
            class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <nuxt-link :to="`/customer/${user.national_id}`">{{
              user.national_id
            }}</nuxt-link>
        </td>
        <td class="py-4  text-center">
          <nuxt-link :to="`/customer/${user.national_id}`">{{ user.name }}</nuxt-link>
        </td>
        <td class="py-4 text-center ">
          <nuxt-link :to="`/customer/${user.national_id}`">{{ user.surname }} </nuxt-link>
        </td>
        <td class="py-4  text-center">
          <nuxt-link :to="`/customer/${user.national_id}`">
            {{ user.phone_number }}
          </nuxt-link>
        </td>
        <td class="py-4  text-center">
          <nuxt-link :to="`/customer/${user.national_id}`">
            {{ user.role }}
          </nuxt-link>
        </td>
        <td class="py-4 px-4  text-center text-purple-500">
          <nuxt-link :to="`/customer/${user.national_id}`">
            {{
              new Date(user.created_at).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            }}
          </nuxt-link>
        </td>
        <td class=" py-4 px-4">
          <a
              data-modal-target="popup-modal-remove"
              data-modal-toggle="popup-modal-remove"
              href="#"
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              @click="confirmAction(user.id)"
          >Remove</a
          >
        </td>
        <!-- popup modal -->

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
              <div class="p-6 text-center">
                <svg
                    class="mx-auto mb-4"
                    width="50px"
                    height="50px"
                    viewBox="0 0 117 117"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <desc></desc>
                    <defs></defs>
                    <g
                        fill="none"
                        fill-rule="evenodd"
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                    >
                      <g fill-rule="nonzero" id="cancel">
                        <path
                            d="M58.5,116.6 C90.5,116.6 116.6,90.6 116.6,58.5 C116.6,26.4 90.5,0.4 58.5,0.4 C26.5,0.4 0.4,26.5 0.4,58.5 C0.4,90.5 26.5,116.6 58.5,116.6 Z M58.5,8.6 C86,8.6 108.4,31 108.4,58.5 C108.4,86 86,108.4 58.5,108.4 C31,108.4 8.6,86 8.6,58.5 C8.6,31 31,8.6 58.5,8.6 Z"
                            fill="#4A4A4A"
                            id="Shape"
                        ></path>
                        <path
                            d="M36.7,79.7 C37.5,80.5 38.5,80.9 39.6,80.9 C40.7,80.9 41.7,80.5 42.5,79.7 L58.5,63.7 L74.5,79.7 C75.3,80.5 76.3,80.9 77.4,80.9 C78.5,80.9 79.5,80.5 80.3,79.7 C81.9,78.1 81.9,75.5 80.3,73.9 L64.3,57.9 L80.3,41.9 C81.9,40.3 81.9,37.7 80.3,36.1 C78.7,34.5 76.1,34.5 74.5,36.1 L58.5,52.1 L42.5,36.1 C40.9,34.5 38.3,34.5 36.7,36.1 C35.1,37.7 35.1,40.3 36.7,41.9 L52.7,57.9 L36.7,73.9 C35.1,75.5 35.1,78.1 36.7,79.7 Z"
                            fill="#ff0000"
                            id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <h3
                    class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                >
                  ยืนยันการลบรายการชิ้นนี้หรือไม่?
                </h3>
                <button
                    data-modal-hide="popup-modal-remove"
                    type="button"
                    @click="deleteConfirmed"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-6 py-2.5 text-center mr-2"
                >
                  ยืนยัน
                </button>
                <button
                    @click="cancelAction"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </tr>
      </tbody>
    </table>
    <h1 v-else class="text-6xl text-center text-red-500 mt-20 font-bold">
      ไม่พบข้อมูล
    </h1>
  </section>
  <div
      v-if="filteredUsersByRole.length >= 10"
      class="flex items-center justify-center mb-14 mt-10"
  >
    <button
        @click="page--"
        :disabled="page <= 1"
        class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
        :class="{
        'disabled:bg-gold disabled:text-white disabled:cursor-not-allowed':
          page <= 1,
      }"
    >
      ก่อนหน้า
    </button>
    <button
        @click="page++"
        :disabled="page >= Math.ceil(filteredUsersByRole.length / perPage)"
        class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
        :class="{
        'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
          page >= Math.ceil(filteredUsersByRole.length / perPage),
      }"
    >
      หน้าถัดไป
    </button>
  </div>
</template>

<script setup lang="ts">
import useMyFetch from "~/composables/useMyFetch";
import { ref } from "vue";
import { useRoute } from "vue-router";

const searchIdDate = ref("");
const searchIdText = ref("");
const searchIdText1 = ref("");
const searchIdText2 = ref("");
const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(10); // เพิ่ม ref สำหรับ perPage
const sortOrder = ref("less");
const showConfirmationModal = ref(false);
const route = useRoute();

definePageMeta({
  middleware: "authenticated", //Auth checker
});

const { data: users, pending } = await useMyFetch<any>("user", {});

const userToDelete = ref<number | null>(null);

const filteredUsersByRole = computed(() => {
  // Check if the data is available and not null
  if (users.value && Array.isArray(users.value)) {
    return users.value.filter((user) => user.role === "customer");
  } else {
    return [];
  }
});


const confirmAction = (userID: number) => {
  userToDelete.value = userID;
  showConfirmationModal.value = true;
};

const paginatedUsersByRole = computed(() => {
  if (Array.isArray(filteredUsersByRole.value)) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return filteredUsersByRole.value.slice(start, end);
  } else {
    return [];
  }
});

const deleteConfirmed = async () => {
  try {
    const userID = userToDelete.value;
    const response = await useMyFetch<any>(`user/${userID}`, {
      method: "DELETE",
    });
    window.location.reload();
    if (response.status === 200) {
      const updatedusers = users.value.filter(
          (user: any) => user.id !== userID
      );
      users.value = updatedusers;
      // Close the modal after successful deletion
      showConfirmationModal.value = false;
    }
  } catch (error) {
    alert("An error occurred while deleting the pawn.");
  }
};

const cancelAction = () => {
  showConfirmationModal.value = false;
  window.location.reload();
};

const applyFilter_customerid = () => {
  const filteredusers = users.value.filter((user) => {
    // Check if user ID contains the searchIdText value
    return user.national_id.toString().includes(searchIdText1.value);
  });

  users.value = filteredusers;

  if (searchIdText1.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
  }
  // Set the filtered users back to the original users
  users.value = filteredusers;
};

const sortuserByDate = () => {
  const moreToLess = document.getElementById("more-to-less") as HTMLElement;
  const LessToMore = document.getElementById("less-to-more") as HTMLElement;
  const dateSort = document.getElementById("date-sort") as HTMLElement;

  if (users.value) {
    if (sortOrder.value === "less") {
      // Sort in ascending order น้อยไปมาก
      users.value.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at),
          moreToLess.classList.add("hidden"),
          dateSort.classList.add("hidden"),
          LessToMore.classList.remove("hidden")
      );
      sortOrder.value = "more"; // Set sorting order to descending มากไปน้อย
    } else {
      LessToMore.classList.add("hidden"), moreToLess.classList.remove("hidden");
      // Sort in descending order มากไปน้อย
      users.value.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      sortOrder.value = "less"; // Set sorting order to ascending น้อยไปมาก
    }
  }
};
</script>
