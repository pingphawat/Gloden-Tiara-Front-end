<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold text-4xl text-gold text-center">
      ข้อมูลการเบิกเงิน
    </h5>

    <div class="mt-10 flex justify-center"><input
        list="status"
        placeholder="สถานะ"
        v-model="selectedStatus"
        class="block py-1.5 px-2 border-gold border-2 focus:ring-darkgold focus:border-darkgold rounded-lg mr-4"
      />

      <datalist id="status">
        <option value="rejected"></option>
        <option value="completed"></option>
        <option value="inprogress"></option>
       
      </datalist></div>
    

    <div class="mt-10 items-center justify-center md:flex md:flex-wrap">
      <div
        class="bg-white border border-gold justify-center rounded-lg shadow md:w-5/12 mt-6 mx-auto"
        v-for="transaction in paginatedFinacedata"
        :key="transaction.id"
      >
        <div v-if="transaction.status === 'inprogress'">
          <div class="p-4 ml-7 leading-normal">
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัสรายการ: {{ transaction.id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขบัตรประชาชนลูกค้า: {{ transaction.customer_id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัสพนักงานที่ทำรายการ: {{ transaction.created_by }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              จำนวนเงิน: 
              <span class="text-green-500">{{ transaction.amount }}</span> บาท
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              สถานะการเบิก:
              <span
                v-if="transaction.status === 'completed'"
                class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
              >
                {{ transaction.status }}
              </span>
              <span
                v-if="transaction.status === 'rejected'"
                class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
              >
                {{ transaction.status }}
              </span>
              <span
                v-if="transaction.status === 'inprogress'"
                class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
              >
                {{ transaction.status }}
              </span>
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขสัญญาการจำนำ: {{ transaction.pawn_id }}
            </p>
            <p class="mb-3 font-normal text-base">
              วันเวลาเบิก:
              <span class="text-purple-500"> {{
                new Date(transaction.transaction_dateTime).toLocaleDateString(
                  "th-TH",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )
              }}</span>
             
            </p>

            <div class="flex mb-4 mt-6">
              <button
                @click="confirmAction('completed', transaction)"
                class="px-10 py-2 bg-green-600 mr-2 border text-white rounded-lg"
              >
                ยืนยัน
              </button>
              <button
                @click="confirmAction('rejected', transaction)"
                class="px-2 py-2 bg-red-600 mr-2 border text-white rounded-lg"
              >
                ยกเลิกการเบิกเงิน
              </button>
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

        <div v-else>
          <div class="px-4 py-12 ml-7 leading-normal">
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัสรายการ: {{ transaction.id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขบัตรประชาชนลูกค้า: {{ transaction.customer_id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัสพนักงานที่เบิก: {{ transaction.created_by }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              จำนวนเงิน: 
              <span class="text-green-500">{{ transaction.amount }}</span> บาท
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              สถานะการเบิก:
              <span
                v-if="transaction.status === 'completed'"
                class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
              >
                {{ transaction.status }}
              </span>
              <span
                v-if="transaction.status === 'rejected'"
                class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
              >
                {{ transaction.status }}
              </span>
              <span
                v-if="transaction.status === 'inprogress'"
                class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
              >
                {{ transaction.status }}
              </span>
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขสัญญาการจำนำ: {{ transaction.pawn_id }}
            </p>
            <p class="mb-3 font-normal  text-base">
              วันเวลาเบิก:
              <span class="text-purple-500"> {{
                new Date(transaction.transaction_dateTime).toLocaleDateString(
                  "th-TH",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )
              }}</span>
            </p>

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
    <div class="flex items-center justify-center mb-14 mt-6">
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
          :disabled="page >= Math.ceil(transactions.length / perPage)"
          class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
          :class="{
          'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
            page >= Math.ceil(transactions.length / perPage),
        }"
      >
        หน้าถัดไป
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: ["authenticated"], //Auth checker
});

import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showConfirmationModal = ref(false);
const store = useAuthStore();
const page = ref(1); // Initialize page to 1
const perPage = ref(10);
const selectedStatus = ref("");

const { data: transactions } = await useMyFetch<any>("transaction", {});

let statusToUpdate = "";

let selectedTransaction = ref<any>(null);

const confirmAction = (status: string, transaction: any) => {
  statusToUpdate = status;
  selectedTransaction.value = transaction;
  showConfirmationModal.value = true;
};

const cancelAction = () => {
  showConfirmationModal.value = false;
};
const paginatedFinacedata = computed(() => {
  let filteredTransactions = transactions.value;

  if (selectedStatus.value) {
    filteredTransactions = filteredTransactions.filter(transaction => {
      return transaction.status === selectedStatus.value;
    });
  }

  return filteredTransactions.slice((page.value - 1) * perPage.value, page.value * perPage.value).sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
});

watch(selectedStatus, () => {
  page.value = 1; 
});


const updateStatus = async () => {
  if (selectedTransaction.value) {
    try {
      const transactionId = selectedTransaction.value.id;
      await useMyFetch<any>(`transaction/${transactionId}`, {
        method: "PUT",
        body: { status: statusToUpdate },
      });
      window.location.reload();

      const { data } = await useMyFetch<any>(
          `transaction/${transactionId}`,
          {}
      );
      selectedTransaction.value = data;
      showConfirmationModal.value = false;
    } catch (error) {
      console.error("Error updating status: ", error);
      window.alert("ไม่สามารถ update สถานะได้");
    }
  }
};


</script>
