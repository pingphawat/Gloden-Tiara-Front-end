<template>
  <!-- Not Logged In -->

  <nav
    v-if="!isLogin"
    class="bg-white w-full border-b border-b-gold sticky top-0 left-0 z-20"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <MenuLink to="/" class="flex items-center">
        <img
          src="../assets/images/logo.png"
          class="h-10 mr-3"
          alt="Golden Tiara"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          ><span class="text-gold">G</span>olden
          <span class="text-gold">T</span>iara</span
        >
      </MenuLink>
      <div class="md:order-2 md:pl-20">
        <MenuLink
          to="/auth/login"
          type="button"
          class="text-white font-light bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-sm px-4 py-2 text-center -mr-52 md:mr-10"
        >
          เข้าสู่ระบบ
        </MenuLink>
      </div>

      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-user"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:ml-5"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <MenuLink
              to="/services"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >เซอร์วิส
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ราคาทอง
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >สอบถาม
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ติดต่อเรา
            </MenuLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Logged In -->
  <nav v-else class="bg-white border-b border-gold sticky top-0 left-0 z-20">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <MenuLink to="/" class="flex items-center">
        <img
          src="../assets/images/logo.png"
          class="h-10 mr-3"
          alt="Golden Tiara"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          ><span class="text-gold">G</span>olden
          <span class="text-gold">T</span>iara</span
        >
      </MenuLink>

      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown-data"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            v-if="user.image_path"
            class="w-10 h-10 rounded-full"
            :src="`http://localhost/images/user/${user.image_path}`"
            alt="user photo"
          />
          <img
            v-else
            class="w-10 h-10 rounded-full"
            src="@/assets/images/avatar.svg"
          />
        </button>

        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="user-dropdown-data"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900"
              >ชื่อ:
              <span> {{ userName }}</span>
            </span>
            <span class="block text-sm text-gray-900"
              >ตำแหน่ง:
              <span>{{ user.role }}</span>
            </span>
          </div>

          <ul class="py-2" aria-labelledby="user-menu-button">
            <li v-if="role === 'seller'">
              <MenuLink
                to="/withdrawlist/financelistme"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >ประวัติการเบิกเงิน</MenuLink
              >
            </li>
            <li v-if="role === 'owner'">
              <MenuLink
                to="/examination"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >รายการตรวจสอบทอง</MenuLink
              >
            </li>
            <li v-if="role === 'owner'">
              <MenuLink
                to="/pawn"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >รายการจำนำทอง</MenuLink
              >
            </li>
            <li v-if="role === 'owner'">
              <MenuLink
                to="/withdrawlist/financelistseller"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >รายการเบิกเงิน</MenuLink
              >
            </li>
            <!-- <li v-if="role === 'owner' || role === 'seller'">
              <MenuLink
                to="/withdrawlist/transfermoney"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >โอนชำระเงินให้ลูกค้า</MenuLink
              >
            </li> -->
            
            <li v-if="role === 'owner' || role === 'seller'">
              <MenuLink
                to="/withdrawlist/financedata"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >ข้อมูลการเบิกเงิน</MenuLink
              >
            </li>
<!--            <li v-if="role === 'owner' || role === 'seller'">-->
<!--              <MenuLink-->
<!--                to="/withdrawlist/create"-->
<!--                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"-->
<!--                >เบิกเงินจากคลัง</MenuLink-->
<!--              >-->
<!--            </li>-->
            <li v-if="role === 'customer'">
              <MenuLink
                to="/customer/mygold"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >รายการทองของฉัน</MenuLink
              >
            </li>

            <li>
              <MenuLink
                @click="logout"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-red-500 cursor-pointer"
                >ออกจากระบบ</MenuLink
              >
            </li>
          </ul>
        </div>

        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <MenuLink
              to="/services"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >เซอร์วิส
            </MenuLink>
          </li>
          <li>
            <MenuLink
              onclick=""
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ราคาทอง
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >สอบถาม
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ติดต่อเรา
            </MenuLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

export default {
  setup() {
    const authStore = useAuthStore();

    const user = computed(() => authStore.user);
    console.log(user.value);

    const isLogin = computed(() => authStore.isLogin);
    const userName = computed(() => authStore.user.name);
    const role = computed(() => authStore.user.role);
    const imagePath = computed(() => authStore.user.image_path);

    function scrollToTop() {
      const element = document.getElementById("content");
      element.scrollIntoView();
    }

    function scrollToBottom() {
      element.scrollIntoView(false);
    }

    console.log(user.value);
    

    const logout = () => {
      authStore.clear();
      window.location.href="/";
     
    };

    return {
      user,
      role,
      isLogin,
      userName,
      logout,
    };
  },
};
</script>
