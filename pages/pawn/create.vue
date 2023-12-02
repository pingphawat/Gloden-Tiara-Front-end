<template>
  <div class="max-w-7xl mx-auto px-10">
    <div class="mb-4 border-b border-gray-200 mt-10">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li
          id="profile-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation"
        >
          <button
            class="inline-block p-4 text-gold border-b-2 border-gold hover:text-gold rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            @click="profileTabs"
          >
            ข้อมูลทอง
          </button>
        </li>
        <li
          id="dashboard-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation"
        >
          <button
            class="inline-block p-4 rounded-t-lg hover:text-gold"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
            @click="dashboardTabs"
          >
            คำนวณงวด
          </button>
        </li>
      </ul>
    </div>

    <div v-if="examination" id="default-tab-content">
      <div
        class="hidden p-4 rounded-lg bg-gray-50 h-[500px]"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="flex justify-center mt-6">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center"
            >
              <tr>
                <th scope="col" class="px-6 py-3">รหัสทอง</th>
                <th scope="col" class="px-6 py-3">น้ำหนัก</th>
                <th scope="col" class="px-6 py-3">ความบริสุทธ์</th>
                <th scope="col" class="px-6 py-3">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="gold of examination.golds"
                :key="gold.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gold"
              >
                <td
                  scope="row"
                  class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {{ gold.id }}
                </td>
                <td class="px-6 py-3 text-center">
                  {{ gold.weight }}
                </td>
                <td class="px-6 py-3 text-center">
                  {{ gold.purity }}
                </td>
                <td class="px-6 py-3 text-center">
                  <span
                    v-if="gold.status === 'verified'"
                    class="text-green-500"
                  >
                    {{ gold.status }}
                  </span>
                  <span class="text-red-500" v-if="gold.status === 'rejected'">
                    {{ gold.status }}
                  </span>
                  <span class="text-blue-500" v-if="gold.status === 'pawned'">
                    {{ gold.status }}
                  </span>
                  {{ gold.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="hidden p-4 rounded-lg bg-gray-50 h-[525px] dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div class="">
          <form class="border border-gold rounded px-6 py-5">
            <div class="relative w-full mb-6 group">
              ราคาทองที่คำนวณได้ {{ loanCalculate }}
            </div>
            <div class="relative z-0 w-full mb-6 group">
              อัตราดอกเบี้ย {{ interest }}
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="loanAmount"
                id="loanAmount"
                v-model="loanAmount"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="loanAmount"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ราคาจำนำทอง
              </label>
              <div class="text-red-500 text-sm">
                {{ errorMessage.loanAmount }}
              </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <label for="term" class="text-sm"> เลือกจำนวนงวด </label>
              <select
                id="term"
                v-model="term"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option disabled value="">จำนวนงวด</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="3">5</option>
                <option value="4">6</option>
              </select>
              <div class="text-red-500 text-sm">{{ errorMessage.term }}</div>
              <div class="text-red-500 text-sm">{{ errorMessage.loanCalculate}}</div>
            </div>

            <button
              type="submit"
              @click="saveData"
              class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-4 focus:outline-none"
            >
              บันทึก
            </button>
          </form>
        </div>
      </div>
    </div>

    <div
      ref="modal"
      id="popup-modal-complete"
      tabindex="-1"
      class="hidden bg-gray-500 bg-opacity-60 flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
           
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
              บันทึกรายการสำเร็จ
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
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    const examinationId = ref(""); // Define examinationId as a ref
    const nationalId = ref("");
    const examination = ref(null); // Define examination as a ref
    const loanCalculate = ref(null);
    const interest = ref(null);

    const loanAmount = ref("");
    const term = ref("");

    const errorMessage = ref({
      loanAmount: "",
      term: "",
    });

    onBeforeMount(() => {
      nationalId.value = localStorage.getItem("nationalId") || "";
      examinationId.value = localStorage.getItem("examinationId") || "";
      examination.value = JSON.parse(localStorage.getItem("examination")) || "";
      loanCalculate.value = localStorage.getItem("loanCalculate") || "";
      interest.value = localStorage.getItem("interest") || "";
    });

    if (process.client) {
      window.addEventListener("beforeunload", () => {
        // Remove items from localStorage
        localStorage.removeItem("nationalId");
        localStorage.removeItem("examinationId");
        localStorage.removeItem("examination");
        localStorage.removeItem("loanCalculate");
        localStorage.removeItem("interest");
      });
    }

    onBeforeRouteLeave((to, from, next) => {
      window.removeEventListener("beforeunload", () => {});

      // Continue navigating to the next route
      next();
    });

    return {
      examinationId,
      nationalId,
      examination,
      loanCalculate,
      interest,
      loanAmount,
      term,
      errorMessage,
    };
  },
  methods: {
    // closeModal() {
    //  const modal = document.getElementById('popyp-modal-complete')
    //   if (modal) {
    //     modal.classList.add('hidden')
    //   }

    //   setTimeout(() => {
    //     window.location.href = "/pawn/add";
    //   }, 10000);
    // },
    isSaveValid() {
      let valid = true;

      if (!this.loanAmount) {
        this.errorMessage.loanAmount = "กรุณาใส่ราคาจำนำทอง";
        valid = false;
      } else {
        this.errorMessage.loanAmount = "";
      }

      if (!this.term) {
        this.errorMessage.term = "กรุณาเลือกจำนวนงวด";
        valid = false;
      } else {
        this.errorMessage.term = "";
      }

      if (this.loanCalculate === 0 || (this.loanAmount >(this.loanCalculate * 1.1))) {

        this.errorMessage.loanCalculate = "ราคาทองไม่ถูกต้อง";
        valid = false;
      } else {
        this.errorMessage.loanCalculate = "";
      }

      return valid;
    },

    async saveData() {
      const modal = document.getElementById("popup-modal-complete");

      console.log('test')

      if (this.isSaveValid()) {
        const formData = new FormData();
        formData.append("loan_amount", this.loanAmount);
        formData.append("total_term", this.term);

        formData.append("customer_id", this.nationalId);
        formData.append("examination_id", this.examinationId);
        formData.append("interest_rate", this.interest);
        await useMyFetch("pawn", {
          method: "POST",
          body: formData,
        });

        // modal.classList.remove('hidden')

        localStorage.removeItem("nationalId");
        localStorage.removeItem("examinationId");
        localStorage.removeItem("examination");
        localStorage.removeItem("loanCalculate");
        localStorage.removeItem("interest");

        setTimeout(() => {
        window.location.href = "/";
      }, 10000);

       

        // Reset the form after submission
        this.loanAmount = "";
        this.term = "";
        this.errorMessage = {
          loanAmount: "",
          term: "",
        };

        // window.location.href("/pawn/");
      }
    },
  },
};
</script>
