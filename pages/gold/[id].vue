<template>
  <div class="max-w-7xl mx-auto px-10">
    <div class="flex justify-center mt-10">
      <div
        class="flex flex-col items-center bg-white border py-4 border-darkgold rounded-lg shadow md:flex-row md:w-10/12 md:h-[500px]"
      >
        <img
          v-if="gold.image_path"
          class="object-cover w-auto pl-2 rounded md:w-[500px] md:rounded-none md:rounded-l-lg"
          :src="`http://localhost/images/gold/${gold.image_path}`"
          alt=""
        />
        <img
          v-else
          class="object-cover w-auto pl-2 rounded md:w-[500px] md:rounded-none md:rounded-l-lg"
          src="@/assets/images/gold-default.png"
          alt=""
        />

        <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
          <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900">
            รหัสทอง: {{ gold.id }}
          </h5>
          <p class="mb-3 font-bold text-gray-700 text-base">
            เลขสัญญาตรวจสอบทอง: {{ gold.examination_id }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขสัญญาจำนำทอง: {{ gold.pawn_id }}
          </p>
          <p class="mb-3 font-normal text-base text-gray-700 mr-5">
            น้ำหนักทอง: {{ gold.weight }} บาท
          </p>

          <p class="mb-3 font-normal text-gray-700 text-base">
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

          


          <div v-if="gold.status === 'examining' && (role === 'owner' || role === 'seller')">
            <div class="flex mt-8">
              <button
                type="button"
                class="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-5"
                @click="confirmAction('verified')"
              >
                ตรวจสอบผ่าน
              </button>
              <button
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center"
                @click="confirmAction('unverified')"
              >
                ตรวจสอบไม่ผ่าน
              </button>
            </div>
          </div>

          

          <div
            v-if="showConfirmationModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white p-8 rounded-lg">
              <h2 class="text-xl font-bold mb-4">ยืนยันการดำเนินการ</h2>
              <p>คุณแน่ใจที่ต้องการดำเนินการนี้หรือไม่?</p>
              <div class="mt-4 flex justify-end">
                <button
                  @click="updateStatus"
                  class="px-4 py-2 bg-green-600 mr-2 border text-white rounded-lg"
                >
                  ยืนยัน
                </button>
                <button
                  @click="cancelAction"
                  class="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "~/stores/useAuthStore";

const route = useRoute();
const showConfirmationModal = ref(false);
const { data: gold } = await useMyFetch<any>(`gold/${route.params.id}`, {});

let statusToUpdate = ""; // สถานะที่ต้องการอัปเดต


definePageMeta({
  middleware: "authenticated", //Auth checker
});


interface AuthStore {
  isLogin: boolean;
  user: {
    name: string;
    surname: string;
  };
  clear: () => void;
}

const authStore: AuthStore = useAuthStore();

const isLogin = computed(() => authStore.isLogin);
const userName = computed(() => authStore.user.name);
const role = computed(() => authStore.user.role);

const confirmAction = (status: string) => {
  statusToUpdate = status;
  showConfirmationModal.value = true;
};

const cancelAction = () => {
  showConfirmationModal.value = false;
};

const updateStatus = async () => {
  try {
    const goldId = gold.value.id;
    await useMyFetch<any>(`gold/${goldId}`, {
      method: "PUT",
      body: { status: statusToUpdate },
    });
    window.location.reload();

    const { data } = await useMyFetch<any>(`gold/${goldId}`, {});
    gold.value = data;
    showConfirmationModal.value = false; // ซ่อน modal เมื่อการอัปเดตสถานะเสร็จสมบูรณ์
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอัปเดตสถานะ: ", error);
  }
};
</script>
