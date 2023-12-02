<template>
  <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden h-[460px]"
      style="max-width: 1000px">
      <div class="md:flex w-full">
        <div class="hidden md:block w-1/2 bg-indigo-500 px-10">
          <div class="container max-h-80 mx-auto items-center py-32">
            <section v-if="previewUrl" class="mx-auto bg-white rounded-lg shadow-md items-center -mt-20">
              <!-- Display the selected image -->
              <div class="px-4 py-8">
                <div
                  class="max-w-sm mb-3 py-2 bg-gray-100 border-dashed border-2 border-gold rounded-lg items-center mx-auto text-center cursor-pointer">
                  <div v-if="previewUrl" class="flex items-center justify-center">
                    <img :src="previewUrl" class="max-h-60 px-auto w-60 object-cover" />
                  </div>
                </div>

                <div class="flex items-center justify-center">
                  <div class="w-full flex items-center">
                    <label class="cursor-pointer">
                      <span class="bg-gold hover:bg-blue-700 text-white py-2 px-6 rounded-full">เลือกรูป</span>
                      <input type="file" class="hidden" accept="image/*" @change="previewImage" />
                    </label>
                    <div v-if="selectedFile" class="ml-3 text-sm text-gray-700">
                      {{ selectedFile.name }}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section v-else class="mx-auto bg-white rounded-lg shadow-md items-center -mt-20">
              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-96 border-2 border-gold border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800 hover:bg-gray-100"
                  @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="dropImage" ref="dropzone">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-12 h-12 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500">JPEG, PNG, JPG or GIF</p>
                  </div>
                  <label class="mb-4 cursor-pointer">
                    <span class="bg-gold hover:bg-blue-700 text-white py-2 px-6 rounded-full">เลือกรูป</span>
                    <input type="file" id="dropzone-file" class="hidden" accept="image/*" @change="previewImage" />
                  </label>
                </label>
              </div>
            </section>
          </div>
        </div>

        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">เพิ่มรายการทอง</h1>
          </div>

          <form @submit.prevent="onSubmit()">
            <div class="mb-5">
              <div class="flex -mx-3">
                <div class="w-full px-3">
                  <label for="weight" class="text-xs font-semibold px-1">น้ำหนัก(บาท)</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input v-model="formData.weight" type="number" id="weight" @input="updateWeight"
                      class="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="" />
                  </div>
                </div>
              </div>
              <p v-if="errorMessage.weight" class="text-red-500">
                {{ errorMessage.weight }}
              </p>
            </div>
            <div class="mb-20">
              <div class="flex -mx-3">
                <div class="w-full px-3">
                  <label for="purity" class="text-xs font-semibold px-1">ความบริสุทธิ์</label>

                  <select id="purity" v-model="formData.purity" @input="updatePurity"
                    class="px-3 py-2 bg-white rounded-lg border-2 border-gray-200 block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option disabled value="">ความบริสุทธิ์</option>
                    <option value="99.99">99.99%</option>
                    <option value="96.5">96.5%</option>
                    <option value="90">90%</option>
                    <option value="80">80%</option>
                    <option value="50">50%</option>
                    <option value="40">40%</option>
                  </select>
                </div>
              </div>
              <p v-if="errorMessage.purity" class="text-red-500">
                {{ errorMessage.purity }}
              </p>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button type="submit"
                  class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  บันทึกรายการ
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- popup modal -->
  <!-- เช็คถ้า weightและ purityไม่เป็นช่องว่าง -->
  <div>
    <div ref="modal" id="popup-modal" tabindex="-1"
      class="hidden bg-gray-500 bg-opacity-60 flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal" @click="closeModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span @click="closeModal" class="sr-only">Close modal</span>
          </button>

          <div class="p-6 text-center">
            <svg class="mx-auto mb-4" width="50px" height="50px" viewBox="0 0 117 117" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title />

              <desc />

              <defs />

              <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <g fill-rule="nonzero" id="correct">
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13" id="Shape" />

                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A" id="Shape" />
                </g>
              </g>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              บันทึกรายการสำเร็จ
            </h3>
            <button type="button" @click="closeModal"
              class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End popup modal -->
</template>

<script>
import { ref } from "vue";

const image_path = ref(null);
const previewUrl = ref(null);
const selectedFile = ref(null);
const dropzone = ref(null);

const closeModal = () => {
  const modal = document.getElementById("popup-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
  // window.location.reload();
};

const previewImage = (event) => {
  const file = event.target.files ? event.target.files[0] : null; // ตรวจสอบว่ามี files หรือไม่
  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      previewUrl.value = reader.result;
      selectedFile.value = file; // Store the selected file
    };

    reader.readAsDataURL(file);
  }
};

const dragOver = (event) => {
  event.preventDefault();
  dropzone.value.classList.add("border-blue-500");
};

const dragLeave = () => {
  dropzone.value.classList.remove("border-blue-500");
};

const dropImage = (event) => {
  event.preventDefault();
  dropzone.value.classList.remove("border-blue-500");

  const file = event.dataTransfer.files[0];
  previewUrl.value = null; // Clear the old image
  selectedFile.value = null; // Clear the selected file
  if (file) {
    previewFile(file);
  }
};

const previewFile = (file) => {
  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      previewUrl.value = reader.result;
      selectedFile.value = file; // Store the selected file
    };

    reader.readAsDataURL(file);
  }
};

const formData = reactive({
  weight: "",
  purity: "",
});

const errorMessage = reactive({
  weight: "",
  purity: "",
});

const updateWeight = (event) => {
  formData.weight = parseFloat(event.target.value);
};

const updatePurity = (event) => {
  formData.purity = parseFloat(event.target.value);
};

const onSubmit = async () => {
  const { weight, purity } = formData;
  const modal = document.getElementById("popup-modal");

  Object.keys(errorMessage).forEach((key) => {
    errorMessage[key] = "";
  });

  let isFormValid = true;

  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errorMessage[key] = `${key} is required.`;
      isFormValid = false;
      console.log(errorMessage[key]);

    }
  });
  console.log(errorMessage);

  if (isFormValid) {
    const goldItem = {
      weight: weight,
      purity: purity,
      image: previewUrl.value, // Store the image URL or the file itself
    };

    // Retrieve existing gold items from localStorage (if any)
    let existingGoldItems = JSON.parse(localStorage.getItem('goldItems')) || [];

    // Add the new gold item to the existing items
    existingGoldItems.push(goldItem);

    // Save the updated list back to localStorage
    localStorage.setItem('goldItems', JSON.stringify(existingGoldItems));

    modal.classList.remove("hidden");

    // Clear the form fields
    formData.weight = '';
    formData.purity = '';
    selectedFile.value = null;
    previewUrl.value = null;

  }
};

export default {
  data() {
    return {
      image_path,
      previewUrl,
      selectedFile,
      dropzone,
      formData,
      errorMessage,
    };
  },
  computed: {
    // Your computed properties here
  },
  methods: {
    previewImage,
    dragOver,
    dragLeave,
    dropImage,
    updateWeight,
    updatePurity,
    onSubmit,
    closeModal
  },

  beforeRouteEnter(to, from, next) {
    // This is a navigation guard that triggers before entering the route
    // You can check if 'goldItems' is present in localStorage and set it in the component's state
    const goldItems = JSON.parse(localStorage.getItem('goldItems'));
    

    next((vm) => {
      // Set goldItems in the component based on localStorage
      vm.goldItems = goldItems || '';
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== '/examination/create') {
      // Clear the goldItems from localStorage only if not navigating to 'examination/create'
      localStorage.removeItem('goldItems');
      localStorage.removeItem('user');
    }

    // Clear the form fields and error messages
    this.formData.weight = '';
    this.formData.purity = '';
    this.selectedFile = null;
    this.previewUrl = null;
    this.errorMessage.weight = '';
    this.errorMessage.purity = '';

    next();
  },
};

</script>