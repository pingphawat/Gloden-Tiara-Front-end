<template>
  <div
    id="qr-payment-modal"
    tabindex="-1"
    class="fixed flex items-center justify-center bg-gray-500 bg-opacity-60 top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
          @click="closeModalNoReload"
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
        <div class="py-2">
          <div class="w-1/2 mx-auto">
            <img
              class="rounded-t-md w-60 h-auto pb-4"
              src="@/assets/images/payment/qrcode.png"
              alt="PromptPay QR Code"
            />
          </div>
          <div class="w-72 mx-auto text-center" v-for="pawn of pawns"
        :key="pawn.id" v-if="user && user.national_id">
            <h2 class="text-xl font-semibold mb-2">ข้อมูลชำระเงิน</h2>
            <p class="mb-2" v-if="pawn.customer_id === user.national_id">Recipient Name: {{ pawn.id }}</p>
            <p class="mb-2" v-if="pawn.customer_id === user.national_id">Mobile Number: {{ pawn.id }}</p>
            <p class="mb-2" v-if="pawn.customer_id === user.national_id">
              Amount: <span class="text-green-500">{{ pawn.loan_amount - pawn.paid_amount}}</span>
            </p>
            <button
              class="bg-darkblue hover:bg-gradient-to-b mb-4 from-gold to-darkgold text-white font-bold py-2 px-4 rounded-full mt-4 focus:ring-2 focus:ring-darkgold"
              @click="confirmPayment"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading popup -->
  <div
    id="loading-modal"
    tabindex="-1"
    class="fixed flex items-center justify-center bg-gray-500 bg-opacity-60 top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow py-20">
        <div
          aria-label="Loading..."
          role="status"
          class="flex items-center justify-center space-x-2"
        >
          
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-10 h-10 mr-2 text-gray-200 animate-spin  fill-gold"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <p class="text-xl ml-2 font-medium text-gray-500 text-center">
            กรุณารอการชำระเงินเสร็จสิ้น<br />
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End loading popup -->

  <!-- Payment compltele popup -->
  <div>
    <div
      ref="modal"
      id="payment-complete-modal"
      tabindex="-1"
      class="hidden bg-gray-500 bg-opacity-60 flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            @click="closeModal"
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
            <span @click="closeModal" class="sr-only">Close modal</span>
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
              ทำรายการชำระเงินเสร็จสิ้น
            </h3>
            <button
              type="button"
              @click="closeModal"
              class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End payment compltele popup -->
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: "authenticated", //Auth checker
});

const { data: pawns } = await useMyFetch<any>("pawn", {});

const confirmPayment = function () {
  const loadingModal = document.getElementById("loading-modal") as HTMLElement;
  const authStore = useAuthStore();
  const user = computed(() => authStore.user);
  const paymentCompleteModal = document.getElementById(
    "payment-complete-modal"
  ) as HTMLElement;

  if (loadingModal && paymentCompleteModal) {
    loadingModal.classList.remove("hidden");

    setTimeout(() => {
      loadingModal.classList.add("hidden");
      paymentCompleteModal.classList.remove("hidden");
    }, 3000);
  }
};

const closeModal = () => {
  const modal = document.getElementById("payment-complete-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
  window.location.reload();
};

const closeModalNoReload = () => {
  const modal = document.getElementById("qr-payment-modal");
  modal.classList.add("hidden");
};
</script>
