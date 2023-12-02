<template>
  <div>
    <h2>Profile</h2>
    <div>
      <strong>ชื่อ:</strong>
      <span>{{ user.name }}</span>
    </div>
    <div>
      <strong>นามสกุล:</strong>
      <span>{{ user.surname }}</span>
    </div>
    <div>
      <strong>เบอร์โทรศัพท์:</strong>
      <span>{{ user.phone_number }}</span>
    </div>
    <div>
      <strong>บัตรประชาชน</strong>
      <span>{{ user.national_id}}</span>
    </div>
    <div>
      <strong>imagepath</strong>
      <span>{{ user.image_path}}</span>
    </div>
    <!-- ส่วนข้อมูลอื่นๆ ถ้ามี -->
  </div>
</template>

<script>
import { computed } from 'vue';
import { useAuthStore } from '~/stores/useAuthStore';
definePageMeta({
  middleware: 'authenticated' //Auth checker
})

export default {
  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);
    console.log(user.value)

    return { user };
  },


};
</script>
