<template>
  <div class="max-w-7xl mx-auto px-10">
    <div class="mb-4 border-b border-gray-200 mt-10">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
        data-tabs-toggle="#default-tab-content" role="tablist">
        <li id="profile-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation">
          <button class="inline-block p-4 text-gold border-b-2 border-gold hover:text-gold rounded-t-lg" id="profile-tab"
            data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
            @click="profileTabs">
            กรอกค่างวด
          </button>
        </li>
        <li id="dashboard-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation">
          <button class="inline-block p-4 rounded-t-lg hover:text-gold" id="dashboard-tab" data-tabs-target="#dashboard"
            type="button" role="tab" aria-controls="dashboard" aria-selected="false" @click="dashboardTabs">
            ข้อมูลการจ่ายค่างวด
          </button>
        </li>
        <li id="settings-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation">
          <button class="inline-block p-4 rounded-t-lg hover:text-gold" id="settings-tab" data-tabs-target="#settings"
            type="button" role="tab" aria-controls="settings" aria-selected="false" @click="settingsTabs">
            ประวัติการจ่ายค่างวด
          </button>
        </li>
      </ul>
    </div>

    <div id="default-tab-content">
      <div class="hidden p-4 rounded-lg bg-gray-50 h-[500px]" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="flex justify-center">
          <div id="pdf-content"
            class="bg-white flex border justify-center border-darkgold shadow md:flex-row md:w-[300px] md:h-[350px]">
            <div class="flex justify-between md:w-[400px]">
              <div class="flex flex-col justify-center p-4 leading-normal">
                <div class="mb-3">
                  <label for="installment"
                    class="block mb-2 text-[10px] font-medium text-gray-900">เลือกจำนวนงวดที่จะจ่าย:</label>
                  <select required id="installment" v-model="selectedInstallments"
                    class="bg-gray-50 border text-[8px] border-gray-300 text-gray-900 rounded-lg focus:ring-gold focus:border-gold block w-full">
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                    <option value=5>5</option>
                    <option value=6>6</option>
                  </select>
                </div>
                <div class="">
                  <p class="mb-3 font-bold text-gray-700 text-[8px]">
                    เลขบัตรประชาชนลูกค้า:
                    <span class="text-gold"> {{ national_id }}</span>
                  </p>

                  <p class="mb-3 font-bold text-gray-700 text-[8px]">
                    เลขสัญญาจำนำทอง: {{ pawnID }}
                  </p>

                  <p class="mb-3 font-normal text-gray-700 text-[8px]">
                    วันหมดอายุสัญญา:
                    {{
                      new Date(expiry_date).toLocaleDateString("th-TH", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                    }}
                  </p>

                  <p class="mb-3 font-bold text-gray-700 text-[8px]">
                    จำนวนเงินที่ต้องจ่าย: {{ money }} บาท
                  </p>

                  <p class="mb-3 font-normal text-gray-700 text-[8px]">
                    ราคาจำนำทอง:
                    <span class="text-green-500"> {{ loan_amount }} </span>
                    บาท
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-[8px]">
                    อัตราดอกเบี้ย: {{ interest_rate }}%
                  </p>

                  <p class="mb-3 font-normal text-gray-700 text-[8px]">
                    จำนวนงวด: {{ total_term }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-[8px]">
                    สถานะการจ่ายเงินให้ลูกค้า: {{ shop_payout_status }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <div>
            <button
              class="bg-darkblue text-white font-bold py-2 px-4 inline-flex items-center hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
              id="downloadButton" @click="downloadPDF">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download PDF</span>
            </button>

            <p id="download-pdf-error" class="text-red-500 hidden">
              กรุณาเลือกจำนวนงวด
            </p>
          </div>

          <div>
            <button @click="saveInstallment"
              class="bg-green-500 ml-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
              id="saveInstallmentButton">
              <span>บันทึกการจ่ายค่างวด</span>
            </button>
            <p id="installment-save-error" class="text-red-500 ml-6 hidden">
              กรุณาเลือกจำนวนงวดที่ถูกต้อง
            </p>
          </div>
        </div>

        <!-- End pawn data -->
      </div>
    </div>

    <!-- Pawn money -->
    <div class="hidden p-4 rounded-lg bg-gray-50 h-[500px] dark:bg-gray-800" id="dashboard" role="tabpanel"
      aria-labelledby="dashboard-tab">
      <div class="mt-10">
        <div class="p-5">
          <h5 class="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            ข้อมูลการจ่ายค่างวด
          </h5>
        </div>
        <div class="flex justify-center mt-10">
          <div
            class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-6/12 h-40">
            <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
              <p class="mb-3 font-normal text-gray-700">
                จำนวนเงินที่จ่ายแล้ว: {{ paid_amount }} บาท
              </p>
              <p class="mb-3 font-bold text-gray-700">
                จำนวนงวดที่จ่ายแล้ว: {{ paid_term }} บาท
              </p>
              <p class="mb-3 font-normal text-gray-700">
                วันจ่ายค่างวดครั้งถัดไป:
                {{
                  new Date(next_payment).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button @click="eventComplete"
          class="bg-darkblue text-white font-bold py-2 px-4 inline-flex items-center hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z" />
          </svg>
          ชำระค่างวด
        </button>
      </div>
      <p id="pay-error" class="text-red-500 ml-6 text-center mr-5 mt-1 hidden">
        กรุณางวดเลือกที่ต้องจ่ายให้ถูกต้อง
      </p>
    </div>

    <!-- End pawn money-->

    <div class="hidden p-4 rounded-lg bg-gray-50 h-[500px] dark:bg-gray-800" id="settings" role="tabpanel"
      aria-labelledby="settings-tab-slide">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ประวัติการจ่ายค่างวด
        </h5>
      </div>

      <table v-if="transactions2.length > 0"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center">
          <tr>
            <th scope="col" class="px-6 py-3">รหัสการชำระ</th>
            <th scope="col" class="px-6 py-3">ประเภทการจ่าย</th>
            <th scope="col" class="px-6 py-3">จำนวนงวด</th>
            <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
            <th scope="col" class="px-6 py-3">วันเวลาที่จ่าย</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions2" :key="index"
            class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-b border-gold">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
              {{ transaction.id }}
            </td>
            <td class="px-6 py-4 text-center">
              {{ transaction.type }}
            </td>
            <td class="px-6 py-4 text-center">
              <span class="text-purple-500"> {{ transaction.term }}</span>
            </td>
            <td class="px-6 py-4 text-center">
              <span class="text-green-500"> {{ transaction.amount }}</span>
            </td>
            <td class="px-6 py-4 text-center">
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
    </div>
    <CompleteEvent></CompleteEvent>
    <CompletePay></CompletePay>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "~/stores/useAuthStore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Reactive state declarations
const { data: pawns } = await useMyFetch<any>("pawn", {});
const pawnID = ref<string>("");
const national_id = ref<string>("");
const expiry_date = ref<string>("");
const loan_amount = ref<number>(0);
const interest_rate = ref<number>(0);
const total_term = ref<number>(0);
const shop_payout_status = ref<string>("");
const paid_amount = ref<number>(0);
const paid_term = ref<number>(0);
const next_payment = ref<string>("");
const selectedInstallments = ref<number>(0);



const transactions1 = ref([]);
const transactions2 = ref([]);

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const userID = ref("");
// Lifecycle hook
onMounted(async () => {
  // national_id.value = localStorage.getItem('national_id') || '';
  // if (national_id.value) {
  //   try {
  //     const { data: userTransactions } = await useMyFetch<any>(`transactions/${custumer_id.value}`);
  //     transactions1.value = userTransactions;
  //   } catch (error) {
  //     console.error('Error fetching transactions for the customer:', error);
  //     // จัดการกับข้อผิดพลาด, เช่น แสดงข้อความแจ้งเตือน
  //   }
  // }

  pawnID.value = localStorage.getItem("pawn_id");
  console.log(pawnID.value);
  if (pawnID.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  national_id.value = localStorage.getItem("national_id");
  console.log(national_id.value);
  if (national_id.value) {
    const { data: pawn } = await useMyFetch(`pawn/${national_id.value}`);
    console.log(pawn);
  }
  expiry_date.value = localStorage.getItem("pawn_expiry_date");
  console.log(expiry_date.value);
  if (expiry_date.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  loan_amount.value = localStorage.getItem("pawn_loan_amount");
  console.log(loan_amount.value);
  if (loan_amount.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  interest_rate.value = localStorage.getItem("pawn_interest_rate");
  console.log(expiry_date.value);
  if (interest_rate.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  total_term.value = localStorage.getItem("pawn_total_term");
  console.log(total_term.value);
  if (total_term.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  shop_payout_status.value = localStorage.getItem("pawn_shop_payout_status");
  console.log(shop_payout_status.value);
  if (shop_payout_status.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  paid_amount.value = localStorage.getItem("pawn_paid_amount");
  console.log(paid_amount.value);
  if (paid_amount.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  paid_term.value = localStorage.getItem("pawn_paid_term");
  console.log(paid_term.value);
  if (paid_term.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }
  next_payment.value = localStorage.getItem("pawn_next_payment");
  console.log(next_payment.value);
  if (next_payment.value) {
    const { data: pawn } = await useMyFetch(`pawn/${pawnID.value}`);
    console.log(pawn);
  }

  const pawn_id = pawnID.value;
  console.log("pawn_id", pawn_id);
  const { data: transactions } = await useMyFetch(
    `/transaction/check/${pawn_id}`,
    {}
  );
  transactions1.value = transactions;

  console.log("transaction");
  console.log(transactions1.value.value);

  transactions2.value = transactions1.value.value;
});

const eventComplete = function () {
  const loadingModal = document.getElementById("loading-modal") as HTMLElement;
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
  const modal = document.getElementById("loading-modal");
  if (modal) {
    modal.classList.add("hidden");
    window.location.reload();
  }
  window.location.reload();
};


// Computed property for money calculation
const money = computed(() => {
  if (
    selectedInstallments.value &&
    loan_amount.value &&
    total_term.value &&
    interest_rate.value
  ) {
    return (
      selectedInstallments.value *
      ((loan_amount.value / total_term.value) * (1 + (interest_rate.value / 100)))
    ).toFixed(2);
  }
  return "0.00";
});

const saveInstallment = async () => {
  const payError = document.getElementById("pay-error") as HTMLElement;
  const errorMessageElement = document.getElementById("error-message");
  const installmentError = document.getElementById("installment-save-error");
  const intInput = parseInt(selectedInstallments.value, 10);
  const intValue = parseInt(paid_term.value, 10);
  const intValue2 = parseInt(total_term.value, 10);


  console.log(intInput + intValue)


  if (
    selectedInstallments.value !== 0 &&
    ((intInput + intValue) <= intValue2)
  ) {
    payError.classList.add("hidden");
    installmentError?.classList.add("hidden");

    try {
      const updatedPaidAmount =
        parseFloat(paid_amount.value) + parseFloat(money.value);
      const updatedPaidTerm =
        parseInt(paid_term.value) + parseInt(selectedInstallments.value);

      let pawnStatus = "active";
      if (updatedPaidTerm === parseInt(total_term.value)) {
        pawnStatus = "finish";
      }

      console.log("pawnStatus: ", pawnStatus, " ", updatedPaidTerm, " ", total_term.value)

      const payload = {
        pawnID: pawnID.value,
        paidAmount: updatedPaidAmount,
        paidTerm: updatedPaidTerm,
        paidSelect: parseInt(selectedInstallments.value),
        pawnStatus: pawnStatus
      };
      const response = await useMyFetch(`pawn/${pawnID.value}`, {
        method: "PUT",
        body: payload,
      });

      const transactionData = {
        customer_id: national_id.value,
        amount: parseFloat(money.value),
        term: parseInt(selectedInstallments.value),
        pawn_id: pawnID.value
      }

      await useMyFetch("transaction", {
        method: "POST",
        body: transactionData,
      })

      const loadingPay = document.getElementById("loading-pay") as HTMLElement;
      const payComplete = document.getElementById(
        "pay-complete"
      ) as HTMLElement;

      if (loadingPay && payComplete) {
        loadingPay.classList.remove("hidden");

        setTimeout(() => {
          loadingPay.classList.add("hidden");
          payComplete.classList.remove("hidden");
        }, 3000);
      }

      console.log(payload);
      paid_amount.value = payload.paidAmount;
      console.log(paid_amount);
      paid_term.value = payload.paidTerm;
      next_payment.value = payload.nextPayment;

      console.log("Update successful:", response);
    } catch (error) {
      console.error("Error updating installment:", error);
      // Handle error, e.g., show an error message
    }}
    else {
    installmentError?.classList.remove("hidden");
    payError?.classList.remove("hidden");
  }
};

const downloadPDF = async () => {
  const pdfError = document.getElementById("download-pdf-error");
  if (selectedInstallments.value !== 0) {
    const content = document.getElementById("pdf-content");
    pdfError?.classList.add("hidden");

    const canvas = await html2canvas(content, {
      scale: 4,
      dpi: window.devicePixelRatio * 150,
    });

    const pdf = new jsPDF("p", "mm", "a4");

    const imgData = canvas.toDataURL("image/png", 1);

    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

    pdf.save(ใบจำนำ.pdf);
  } else {
    pdfError?.classList.remove("hidden");
  }
};

definePageMeta({
  middleware: "authenticated", // Auth checker
});

const profileTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profileTabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");

  const settingsTab = document.getElementById("settings-tab");
  const settingsTabSlide = document.getElementById("setting-tab-slide");



  dashboardTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  profileTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  settingsTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  settingsTab?.classList.remove("border-b-2", "border-gold");
  profileTab?.classList.add("text-gold", "border-b-2", "border-gold");
  dashboardTab?.classList.remove("border-b-2");

};

const dashboardTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profileTabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");

  const settingsTab = document.getElementById("settings-tab");
  const settingsTabSlide = document.getElementById("setting-tab-slide");

  profileTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  dashboardTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  settingsTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  dashboardTab?.classList.add("text-gold", "border-b-2", "border-gold");
  profileTab?.classList.remove("border-b-2");
  settingsTab?.classList.remove("border-b-2");
};

const settingsTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profiletabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");

  const settingsTab = document.getElementById("settings-tab");
  const settingsTabSlide = document.getElementById("setting-tab-slide");


  dashboardTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  profiletabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  settingsTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );


  profileTab?.classList.remove("border-b-2");
  dashboardTab?.classList.remove("border-b-2");
  settingsTab?.classList.add("text-gold", "border-b-2", "border-gold");


};
</script>
