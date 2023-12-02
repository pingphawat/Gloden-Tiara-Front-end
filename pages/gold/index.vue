<template>
  <div class="max-w-7xl mx-auto px-10">
    <form class="mt-10 flex items-center justify-center">
      <input
        list="status"
        placeholder="สถานะ"
        v-model="selectedStatus"
        class="block py-1.5 px-2 border-gold border-2 focus:ring-darkgold focus:border-darkgold rounded-lg mr-4"
      />

      <datalist id="status">
        <option value="verified"></option>
        <option value="redeemed"></option>
        <option value="examining"></option>
        <option value="pawned"></option>
        <option value="unverified"></option>
        <option value="unredeemed"></option>
      </datalist>

      

    </form>

    <!-- Card -->
    <div
      class="flex justify-center mt-10"
      v-for="gold of paginatedGolds"
      :key="gold.id"
    >
      <nuxt-link
        :to="`/gold/${gold.id}`"
        href="#"
        class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-8/12 hover:bg-gray-100"
      >
        <img
          v-if="gold.image_path"
          class="object-cover w-auto pl-2 rounded h-60 md:h-auto md:w-[220px] md:rounded-none md:rounded-l-lg"
          :src="`http://localhost/images/gold/${gold.image_path}`"
          alt=""
        />
        <img
          v-else
          class="object-cover w-auto rounded h-60 md:h-auto md:w-[220px] md:rounded-none md:rounded-l-lg"
          src="@/assets/images/gold-default.png"
          alt=""
        />

        <div class="flex flex-col justify-between p-4 ml-5 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            รหัสทอง: {{ gold.id }}
          </h5>
          <p class="mb-3 font-normal text-sm text-gray-700 mr-5">
            น้ำหนักทอง: {{ gold.weight }} บาท
          </p>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            ความบริสุทธ์: {{ gold.purity }}%
          </p>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            สถานะ:
            <span
              v-if="gold.status === 'examining'"
              class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
            >
              {{ gold.status }}
            </span>
            <span
              v-if="gold.status === 'redeemed'"
              class="p-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded"
            >
              {{ gold.status }}
            </span>
            <span
              v-if="gold.status === 'verified'"
              class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
            >
              {{ gold.status }}
            </span>
            <span
              v-if="gold.status === 'pawned'"
              class="p-1 font-semibold leading-tight text-darkgold bg-gold rounded"
            >
              {{ gold.status }}
            </span>
            <span
              v-if="gold.status === 'unredeemed'"
              class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
            >
              {{ gold.status }}
            </span>
            <span
              v-if="gold.status === 'unverified'"
              class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
            >
              {{ gold.status }}
            </span>
          </p>
          <nuxt-link :to="`/gold/${gold.id}`">
            <button
              class="flex items-center justify-center mt-2 rounded-lg bg-darkblue text-sm text-white w-36 py-1 hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
            >
              รายละเอียด
              <span>
                <svg
                  class="w-3 h-3 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </button>
          </nuxt-link>
        </div>
      </nuxt-link>
    </div>
    <!-- End card -->
    <div class=" mt-6 flex items-center justify-center mb-14">
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
        :disabled="page >= Math.ceil(golds.length / perPage)"
        class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
        :class="{
          'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
            page >= Math.ceil(golds.length / perPage),
        }"
      >
        หน้าถัดไป
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import useMyFetch from "~/composables/useMyFetch";
import { ref, computed } from "vue"; // นำเข้า ref และ computed

const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(5); // เพิ่ม ref สำหรับ perPage
const selectedStatus = ref("");

definePageMeta({
  middleware: "authenticated", //Auth checker
});

const { data: golds, pending } = await useMyFetch<any>("gold", {});

const pageCount = computed(() => Math.ceil(golds.value.length / perPage.value));

const paginatedGolds = computed(() => {
  const start = (page.value - 1) * perPage.value;
  const end = start + perPage.value;
  return golds.value.slice(start, end);
});


const updateGolds = () => {
  pending.value = true;

  const filteredGolds = golds.value.filter((gold: any) => {
    if (!selectedStatus.value) {
      return true;
    }
    return gold.status === selectedStatus.value;
  });
   
    if (selectedStatus.value === ''){
      window.location.reload();
    }
   

  golds.value = filteredGolds.sort((a, b) => {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  });

  pending.value = false;
};

watch(selectedStatus, () => {
  updateGolds();
});
</script>
