<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">เพิ่มรายการตรวจสอบทอง</h1>
        </div>

        <!-- Step Bar -->
        <ol class="flex items-center w-full mt-14">
          <!-- Before ID -->
          <!-- <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12  shrink-0">

              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 ">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3 5C2.44772 5 2 5.44771 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5H3ZM0 6C0 4.34315 1.34314 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V6ZM6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12C6.67157 12 6 11.3284 6 10.5ZM10.1756 12.7565C10.69 12.1472 11 11.3598 11 10.5C11 8.567 9.433 7 7.5 7C5.567 7 4 8.567 4 10.5C4 11.3598 4.31002 12.1472 4.82438 12.7565C3.68235 13.4994 3 14.7069 3 16C3 16.5523 3.44772 17 4 17C4.55228 17 5 16.5523 5 16C5 15.1145 5.80048 14 7.5 14C9.19952 14 10 15.1145 10 16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16C12 14.7069 11.3177 13.4994 10.1756 12.7565ZM13 8C12.4477 8 12 8.44772 12 9C12 9.55228 12.4477 10 13 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H13ZM14 12C13.4477 12 13 12.4477 13 13C13 13.5523 13.4477 14 14 14H18C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12H14Z"
                    fill="#D2AC47"></path>
                </g>
              </svg>
            </span>
          </li> -->
          <li
            class="flex w-full items-center text-gold after:content-[''] after:w-full after:h-1 after:border-b after:border-gold after:border-4 after:inline-block"
          >
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 border border-gold rounded-full lg:h-12 lg:w-12 shrink-0"
            >
              <svg
                class="w-3.5 h-3.5 text-gold lg:w-4 lg:h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          </li>
          <!-- End Before ID -->

          <!-- After ID -->
          <li
            class="flex w-full items-center text-gold after:content-[''] after:w-full after:h-1 after:border-b after:border-gold after:border-4 after:inline-block"
          >
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 border border-gold rounded-full lg:h-12 lg:w-12 shrink-0"
            >
              <svg
                class="w-3.5 h-3.5 text-gold lg:w-4 lg:h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          </li>
          <!-- End After ID -->

          <!-- Before Form -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
          >
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5"
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
                    d="M3.58579 2.58579C3 3.17157 3 4.11438 3 6V16C3 18.8284 3 20.2426 3.87868 21.1213C4.51998 21.7626 5.44655 21.9359 7 21.9827V19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19L9 22H15V19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19L17 21.9827C18.5534 21.9359 19.48 21.7626 20.1213 21.1213C21 20.2426 21 18.8284 21 16V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H7C5.11438 2 4.17157 2 3.58579 2.58579ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H8ZM8 14L16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12L8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
                    fill="#D2AC47"
                  ></path>
                </g>
              </svg>
            </span>
          </li>
          <!-- End Before Form -->

          <!-- Before Approve -->
          <li class="flex items-center w-full">
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0"
            >
              <svg
                fill="#D2AC47"
                class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 226.834 226.834"
                xml:space="preserve"
                stroke="#D2AC47"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M80.197,44.939v-9.746c0-1.761,1.433-3.193,3.193-3.193h60.053c1.761,0,3.193,1.433,3.193,3.193v9.746 c0,1.761-1.433,3.193-3.193,3.193H83.391C81.63,48.133,80.197,46.7,80.197,44.939z M131.841,17c-0.768-9.5-8.729-17-18.424-17 S95.761,7.5,94.993,17H131.841z M192.309,55.334v151.333c0,11.12-9.047,20.167-20.167,20.167H54.692 c-11.12,0-20.167-9.047-20.167-20.167V55.334c0-11.12,9.047-20.167,20.167-20.167h10.506c0,0.009-0.001,0.018-0.001,0.026v9.746 c0,10.032,8.162,18.193,18.193,18.193h60.053c10.032,0,18.193-8.161,18.193-18.193v-9.746c0-0.009-0.001-0.018-0.001-0.026h10.506 C183.262,35.167,192.309,44.214,192.309,55.334z M88.183,143.449c-3.526-2.173-8.147-1.077-10.32,2.449l-7.092,11.504l-3.661-2.884 c-3.252-2.563-7.97-2.002-10.532,1.252c-2.563,3.255-2.002,7.97,1.252,10.533l10.271,8.089c1.332,1.049,2.969,1.607,4.64,1.607 c0.436,0,0.875-0.038,1.311-0.115c2.105-0.374,3.952-1.629,5.074-3.449l11.506-18.666C92.806,150.243,91.709,145.623,88.183,143.449 z M88.183,89.449c-3.526-2.174-8.147-1.076-10.32,2.449l-7.092,11.504l-3.661-2.884c-3.252-2.562-7.97-2.002-10.532,1.252 c-2.563,3.255-2.002,7.97,1.252,10.533l10.271,8.089c1.332,1.049,2.969,1.607,4.64,1.607c0.436,0,0.875-0.038,1.311-0.115 c2.105-0.374,3.952-1.629,5.074-3.449L90.632,99.77C92.806,96.243,91.709,91.623,88.183,89.449z M165.858,168.5 c0-4.143-3.357-7.5-7.5-7.5h-49c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h49C162.501,176,165.858,172.643,165.858,168.5z M165.858,114.5c0-4.143-3.357-7.5-7.5-7.5h-49c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h49 C162.501,122,165.858,118.643,165.858,114.5z"
                  ></path>
                </g>
              </svg>
            </span>
          </li>
          <!-- After Approve -->
        </ol>
        <!-- End Step Bar -->

        <div class="flex justify-between mt-20">
          <!-- Citizen ID Input Box -->
          <div class="flex">
            <!-- Citizen ID Input -->
            <div class="relative" v-if="!user">
              <input
                class="block py-2.5 px-2 text-sm text-gray-900 border-2 border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
                v-model="nationalId"
                placeholder="เลขบัตรประชาชน"
              />
            </div>

            <!-- Display nationalId as text if it's stored -->
            <p
              v-else
              class="flex items-center text-lg border border-gold px-2 rounded-lg"
            >
              เลขบัตรประชาชน: {{ user.national_id }}
            </p>

            <!-- Save Button -->
            <button
              v-if="!user"
              @click="
                saveNationalId();
                checkUserByNationalId();
              "
              class="block ml-5 px-6 text-white bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg poin"
              :disabled="!isNationalIdValid"
            >
              บันทึก
            </button>
          </div>

          <nuxt-link :to="`/gold/create`">
            <button
              type="button"
              class="text-white flex justify-between bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-sm px-7 py-3 mr-2 cursor-pointer"
              :disabled="!user"
            >
              <span class="mr-2">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="#ffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              เพิ่มรายการทอง
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="mt-1 text-sm">
        <span v-if="!isNationalIdValid && !user" class="text-red-500 ">
          โปรดกรอกเลขบัตรประชาชนให้ครบ 13 หลัก
        </span>
        <span v-if="isNationalIdValid && !user" class="text-blue-500">
          กดบันทึกเพื่อตรวจสอบบัญชีผู้ใช้งาน
        </span>
        <span
          v-if="userNotFoundError && !user && isNationalIdValid"
          class="text-red-500"
          >: ไม่พบบัญชีผู้ใช้งาน</span
        >
        <span v-if="!userNotFoundError && user" class="text-green-500"
          >: พบบัญชีผู้ใช้งาน</span
        >
      </div>

      <div
        v-if="!isSaveValid"
        class="flex items-center justify-center text-red-500 text-4xl mt-32"
      >
        <p>กรุณากรอกเลขบัตรประชาชนและเพิ่มรายการทองก่อนทำรายการ</p>
      </div>

      <!-- Table have data -->
      <table
        v-else
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
        >
          <tr>
            <th scope="col" class="px-6 py-4">ลำดับข้อมูล</th>
            <th scope="col" class="px-6 py-4">น้ำหนัก</th>
            <th scope="col" class="px-6 py-4">ความบริสุทธิ์</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="bg-white border-b border-gold"
            v-for="(gold, index) in goldItems"
          >
            <td
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </td>
            <td class="py-4 text-center">
              {{ gold.weight }}
            </td>
            <td class="py-4 text-center">
              {{ gold.purity }}
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <div>
        <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
      </div> -->

      <div v-if="isSaveValid" class="flex justify-center">
        <button
          @click="saveData"
          :disabled="!isSaveValid"
          class="px-6 py-3 mt-6 mb-6 text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
        >
          บันทึกรายการตรวจสอบทอง
        </button>
      </div>

      <div>
        <div
          ref="modal"
          id="popup-modal"
          tabindex="-1"
          class="hidden bg-gray-500 bg-opacity-60 flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
    </div>
  </section>
  <CompleteEvent></CompleteEvent>
</template>

<script>
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: "authenticated", //Auth checker
});

export default {
  data() {
    return {
      nationalId: "", // Initialize nationalId as an empty string
      user: null, // Initialize the user property to null
      userNotFoundError: false, // Initialize the user not found error state
      goldItems: null,
    };
  },
  computed: {
    isNationalIdValid() {
      // Check if the nationalId is a 13-digit number
      const validNationalId = /^\d{13}$/.test(this.nationalId);
      return validNationalId;
    },
    isSaveValid() {
      return (
        !!localStorage.getItem("user") &&
        !!localStorage.getItem("goldItems") &&
        JSON.parse(localStorage.getItem("goldItems")).length > 0
      );
    },
  },
  methods: {
    closeModal() {
      const modal = document.getElementById("popup-modal");
      if (modal) {
        modal.classList.add("hidden");
      }
      // window.location.reload();
    },
    async saveNationalId() {
      if (this.isNationalIdValid) {
        // Use await to make sure checkUserByNationalId is called after storing the ID
        await this.checkUserByNationalId();
      } else {
        console.log("Invalid National ID");
      }
    },
    async checkUserByNationalId() {
      try {
        const { data: user } = await useMyFetch(
          `user/check/${this.nationalId}`,
          {}
        );

        if (user.value.national_id != null) {
          this.user = user;
          this.userNotFoundError = false;

          localStorage.setItem("user", JSON.stringify(this.user));
          this.nationalId = "";

          console.log("User found:", this.user);
        } else {
          this.user = null;
          this.userNotFoundError = true;
          // No user found
          console.log("No user found");
        }
      } catch (error) {
        // Handle the error, e.g., show an error message
        console.error("Error:", error);
      }
    },

    async saveData() {
      const modal = document.getElementById("popup-modal");

      const customer_id = this.user.national_id;

      const loadingModal = document.getElementById("loading-modal");
      const paymentCompleteModal = document.getElementById(
        "payment-complete-modal"
      );

      if (loadingModal && paymentCompleteModal) {
        loadingModal.classList.remove("hidden");

        setTimeout(() => {
          loadingModal.classList.add("hidden");
          paymentCompleteModal.classList.remove("hidden");
        }, 3000);
      }

      const { data: response } = await useMyFetch("examination", {
        method: "POST",
        body: { customer_id },
      });

      const examination_id = response.value.id;

      for (const goldItem of this.goldItems) {
        const weight = goldItem.weight;
        const purity = goldItem.purity;
        let image = goldItem.image; // URL or file data

        // Check if the image is a URL
        if (typeof image === "string") {
          // Download the image from the URL
          const response = await fetch(image);
          if (response.ok) {
            const blob = await response.blob();
            image = new File([blob], "image.jpg"); // Create a File from the Blob
          } else {
            console.error(`Failed to download image from URL: ${image}`);
            continue; // Skip this gold item if image download fails
          }
        }

        const formData = new FormData();
        formData.append("weight", weight);
        formData.append("purity", purity);
        formData.append("image", image);
        formData.append("examination_id", examination_id);

        await useMyFetch("gold", {
          method: "POST",
          body: formData,
        });
      }

      modal.classList.remove("hidden");

      this.nationalId = "";
      this.user = null;
      this.userNotFoundError = false;
      this.goldItems = null;
      localStorage.removeItem("user");
      localStorage.removeItem("goldItems");
    },
  },

  beforeRouteEnter(to, from, next) {
    // This is a navigation guard that triggers before entering the route
    // You can check if 'user' is present in localStorage and set it in the component's state
    const user = JSON.parse(localStorage.getItem("user"));
    const goldItems = JSON.parse(localStorage.getItem("goldItems"));

    next((vm) => {
      // Set user in the component based on localStorage
      vm.user = user || "";
      vm.goldItems = goldItems || "";
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== "/gold/create") {
      // Clear the user from localStorage only if not navigating to 'gold/create'
      localStorage.removeItem("user");
      localStorage.removeItem("goldItems");
    }
    next();
  },

  // paginate
};
</script>
