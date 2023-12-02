<template>
    <div class="max-w-7xl mx-auto px-10">
      <div class="flex justify-center mt-10">
        <div
        v-if="user"
          class="flex flex-col items-center justify-evenly bg-white border py-4 border-darkgold rounded-lg shadow md:flex-row md:w-10/12 md:h-[500px]"
        >
           <img
            v-if="user.image_path"
            class="object-cover w-auto pl-2 rounded md:w-[500px] md:rounded-none md:rounded-l-lg"
            :src="`http://localhost/images/user/${user.image_path}`"
            alt=""
          />
          <img
            v-else
            class="object-cover w-auto pl-2 rounded md:w-[400px] md:rounded-none md:rounded-l-lg"
            src="@/assets/images/avatar.svg"
            alt=""
          /> 
  
          <div class="flex flex-col justify-between space-y-3 ml-7 leading-normal">
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-gold">
              {{ user.national_id }}
            </h5>
            <p class="mb-3 font-bold text-gray-700 text-base">
              ชื่อ: {{ user.name }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              นามสกุล: {{ user.surname }}
            </p>
            <p class="mb-3 font-normal text-base text-gray-700 mr-5">
              หมายเลขโทรศัพท์: {{ user.phone_number }}
            </p>
            <p class="mb-3 font-normal text-base text-gray-700 mr-5">
              ตำแหน่ง: {{ user.role }}
            </p><p class="mb-3 font-normal text-base text-gray-700 mr-5 ">
                วันที่สร้างบัญชี:  <span class="text-purple-500">{{
                new Date(user.created_at).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              }}
              </span>
            </p>
  
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
  const { data: user } = await useMyFetch<any>(`user/check/${route.params.id}`, {});

  console.log("user")
console.log(user)
  
  
//   definePageMeta({
//     middleware: "authenticated", //Auth checker
//   });
  
  
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
  const role = computed(() => authStore.user.surname);

  </script>
  