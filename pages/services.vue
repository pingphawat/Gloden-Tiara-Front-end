<template>
  <div class="max-w-7xl mx-auto px-10">
    <div class="md:flex justify-evenly front-mono my-auto">
      <div
          v-if="user.role === 'seller'"
          class="flex flex-col w-80 max-w-sm bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10 hover:z-50"
      >
        <MenuLink to="/examination">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/services/pawn.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink href="#">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            รายการตรวจสอบทอง
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          ตารางการตรวจสอบทองทั้งหมด
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/examination"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <div
          v-if="user.role === 'seller' || user.role === 'owner'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10 hover:z-50"
      >
        <MenuLink to="/gold">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/services/pay.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/gold">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            รายการทอง
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          ตารางรายการทองทั้งหมด
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/gold"
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <div
          v-if="user.role === 'seller'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10 hover:z-50"
      >
        <MenuLink to="/pawn">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/services/accounting.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/pawn">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            รายการจำนำทอง
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          รายละเอียดการจำนำของลูกค้า
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/pawn"
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <!-- Owner -->

      <div
          v-if="user.role === 'owner'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10 hover:z-50"
      >
        <MenuLink to="/customer">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/illustrations/people.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/customer">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            ข้อมูลลูกค้า
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          ข้อมูลบัญชีลูกค้าทั้งหมด
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/customer"
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <!-- Seller -->

      <div
          v-if="user.role === 'seller'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10"
      >
        <MenuLink to="withdrawlist/selleroffline">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2 pt-2"
              src="@/assets/images/illustrations/offline.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="withdrawlist/selleroffline">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            กรอกข้อมูลการจ่ายงวด
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          ข้อมูลการจ่ายงวด (Offline)
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="withdrawlist/selleroffline"
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <!-- Customer -->

      <div
          v-if="user.role === 'customer'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10"
      >
        <MenuLink to="/customer/myexamination">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/illustrations/check.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/customer/myexamination">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            ตรวจสอบทอง
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          เช็คสถานะทองปัจจุบัน
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/customer/myexamination"
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <div
          v-if="user.role === 'customer'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10"
      >
        <MenuLink to="/customer/mypawn ">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/illustrations/note_list.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/customer/mypawn ">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            รายการจำนำทอง
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          รายการจำนำทองของตัวเอง
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/customer/mypawn "
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>

      <div
          v-if="user.role === 'customer'"
          class="flex flex-col max-w-sm w-80 bg-white border-2 border-gold rounded-lg shadow px-4 transition duration-500 transform hover:opacity-90 hover:scale-110 md:mt-20 mt-10"
      >
        <MenuLink to="/customer/pawnamount  ">
          <img
              class="rounded-t-md w-80 h-80 pb-4 pt-2"
              src="@/assets/images/illustrations/credit_card.svg"
              alt=""
          />
        </MenuLink>
        <MenuLink to="/customer/pawnamount  ">
          <h5
              class="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            จ่ายค่างวดายค่างวด
          </h5>
        </MenuLink>
        <p class="font-light text-gray-700 dark:text-gray-800 text-center">
          ประวัติจ่ายค่างวด
        </p>
        <div class="flex justify-center mb-4">
          <MenuLink
              to="/customer/pawnamount  "
              href="#"
              class="mt-4 flex items-center justify-center py-3 w-60 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
          >
            click here
            <svg
                class="w-3.5 h-3.5 ml-2"
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
          </MenuLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

export default {
  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);
    console.log(user.value);

    return { user };
  },
};
</script>
