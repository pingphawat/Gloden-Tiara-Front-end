<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="p-5">
      <h5
        class="mb-2 text-4xl font-bold tracking-tight text-gold mt-20 dark:text-white"
      >
        ประวัติการเบิกเงิน
      </h5>
    </div>

    <div class="flex  mb-5">
      <input
        v-model="searchIdText"
        @input="applyFilter_id"
        type="number"
        id="examination-id-search"
        class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-40 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
        placeholder="เลขสัญญาการจำนำ"
      />

      <!-- Search -->
      <!-- Customer ID Input -->
      <select
        v-model="searchIdText1"
        @change="applyFilter_status"
        type="string"
        id="status-id-search"
        class="ml-4 px-4 border-2 rounded-lg border-gold text-gray-500"
      >
        <option value="" disabled selected hidden>กรุณาเลือกสถานะ</option>
        <option value="inprogress">inprogress</option>
        <option value="rejected">rejected</option>
        <option value="completed">completed</option>
      </select>
    </div>

    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold mb-6"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center"
      >
        <tr>
          <th scope="col" class="px-6 py-3">รหัส</th>
          <th scope="col" class="px-6 py-3">เลขสัญญาจำนำ</th>
          <th scope="col" class="px-6 py-3">รหัสพนักงาน</th>
          <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
          <th scope="col" class="px-6 py-3">สถานะ</th>
          <th scope="col" class="px-6 py-3">วันเวลาที่จ่าย</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in transactions"
          :key="transaction.id"
          class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-b border-gold"
        >
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            v-if="transaction.created_by === user.national_id"
          >
            {{ transaction.id }}
          </td>
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            v-if="transaction.created_by === user.national_id"
          >
            {{ transaction.pawn_id }}
          </td>
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            v-if="transaction.created_by === user.national_id"
          >
            {{ transaction.created_by }}
          </td>
          <td
            class="px-6 py-4 text-center text-green-500"
            v-if="transaction.created_by === user.national_id"
          >
            {{ transaction.amount }}
          </td>
          <td
            class="px-6 py-4 text-center"
            v-if="transaction.created_by === user.national_id"
          >
            <span
              v-if="transaction.status === 'inprogress'"
              class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
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
              v-if="transaction.status === 'completed'"
              class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
            >
              {{ transaction.status }}
            </span>
          </td>
          <td
            class="px-6 py-4 text-center text-purple-500"
            v-if="transaction.created_by === user.national_id"
          >
            {{
              new Date(transaction.transaction_dateTime).toLocaleDateString(
                "th-TH",
                {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }
              )
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <h1  class="text-6xl text-center text-red-500 mt-20 font-bold">
      ไม่พบข้อมูล
    </h1> -->

    <div
      class="flex items-center justify-center mb-14"
      v-if="transactions.length > 10"
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
  </section>
</template>

<script setup lang="ts">
import upSvg from "@/assets/images/icons/up.svg";
import downSvg from "@/assets/images/icons/down.svg";
import { useAuthStore } from "~/stores/useAuthStore";

const { data: transactions } = await useMyFetch<any>("transaction", {});
console.log(transactions);

console.log(transactions.value.length);

const searchIdText = ref("");
const searchIdText1 = ref("");
const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(10); // เพิ่ม ref สำหรับ perPage
const authStore = useAuthStore();
const user = computed(() => authStore.user);

definePageMeta({
  middleware: "authenticated", //Auth checker
});

const paginatedTranactions = computed(() => {
  if (Array.isArray(transactions.value)) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    const slicedTransactions = transactions.value.slice(start, end);
    console.log(slicedTransactions);
    return slicedTransactions;
  } else {
    return [];
  }
});

const applyFilter_id = () => {
  if (searchIdText.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
    return;
  }

  const filteredTransactions = transactions.value.filter((transaction) => {
    // Check if pawn ID from transactions matches the searchIdText value
    return transaction.pawn_id.toString().includes(searchIdText.value);
  });

  transactions.value = filteredTransactions;
};

const applyFilter_status = () => {
  if (searchIdText1.value === "") {
    // Reload the page if the select field is empty
    window.location.reload();
    return; // กลับออกจากฟังก์ชันเพื่อไม่ทำงานขั้นต่อไป
  }

  const filteredTransactions = transactions.value.filter((transactions) => {
    // Check if examination status matches the selected status in searchIdText2
    return transactions.status === searchIdText1.value;
  });

  transactions.value = filteredTransactions;
};
</script>
