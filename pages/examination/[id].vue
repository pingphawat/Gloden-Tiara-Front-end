<template>
  <section class="max-w-7xl mx-auto p-0">
    <div ref="content">
      <div class="border border-darkgold w-3/6 mx-auto my-6" id="pdf-content">
        <div class="flex justify-center mt-4">
          <div class="flex items-center">
            <img
              id="golden-tiara-icons"
              src="@/assets/images/logo.png"
              class="h-6 mr-3"
              alt="Golden Tiara"
            />
            <span class="text-2xl font-semibold whitespace-nowrap"
              ><span class="text-gold">G</span>olden
              <span class="text-gold">T</span>iara</span
            >
          </div>
        </div>
        <!-- Info -->
        <div class="flex justify-evenly mt-4">
          <div>
            <div class="flex text-xs">
              <p class="">เลขสัญญาตรวจสอบทอง:</p>
              <p class="ml-3">{{ examination.id }}</p>
            </div>
            <div class="flex mt-2 text-xs">
              <p class="">วันที่เซ็นสัญญา:</p>
              <p class="ml-3 text-purple-500">
                {{
                  new Date(examination.contract_date).toLocaleDateString(
                    "th-TH",
                    {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }
                  )
                }}
              </p>
            </div>
          </div>

          <div>
            <div class="flex text-xs">
              <p class="text">เลขบัตรประชาชนลูกค้า:</p>
              <p class="ml-3">{{ examination.customer_id }}</p>
            </div>
            <div class="flex mt-2 text-xs">
              <p class="">สถานะการตรวจสอบ:</p>
              <p class="ml-3" >
                <span
                  v-if="examination.status === 'inprogress'"
                  id="examination-status"
                  class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                >
                  {{ examination.status }}
                </span>
                <span
                  v-else
                  id="examination-status"
                  class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                >
                  {{ examination.status }}
                </span>
              </p>
            </div>
          </div>
        </div>

        <table
          class="w-4/6 mx-auto mt-6 text-xs text-left text-gray-500 border border-gold mb-6"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold text-center"
          >
            <tr>
              <th scope="col" class="px-6 py-4">รหัส</th>
              <th scope="col" class="px-6 py-4">น้ำหนัก</th>
              <th scope="col" class="px-6 py-4">ความบริสุทธิ์</th>
              <th scope="col" class="px-6 py-4">สถานะ</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="bg-white hover:bg-gray-50 border-b border-gold w-full"
              v-for="gold of examination.golds"
              :key="gold.id"
            >
              <td
                scope="row"
                class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <nuxt-link :to="`/gold/${gold.id}`">
                  {{ gold.id }}
                </nuxt-link>
              </td>

              <td class="py-4 text-center">
                <nuxt-link :to="`/gold/${gold.id}`">
                  {{ gold.weight }}
                </nuxt-link>
              </td>

              <td class="py-4 text-center">
                <nuxt-link :to="`/gold/${gold.id}`">
                  {{ gold.purity }}
                </nuxt-link>
              </td>
              <td class="py-4 text-center">
                <nuxt-link :to="`/gold/${gold.id}`">
                  <span
                    v-if="gold.status === 'examining'"
                    class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                  >
                    {{ gold.status }}
                  </span>
                  <span
                    v-if="gold.status === 'verified'"
                    class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                  >
                    {{ gold.status }} </span
                  ><span
                    v-if="gold.status === 'unverified'"
                    class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
                  >
                    {{ gold.status }}
                  </span>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex justify-center mb-20">
      <button
        @click="downloadPDF"
        class="px-6 py-2 bg-darkblue text-gray-100 rounded-lg text-xl mx-auto hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none "
      >
        ดาวโหลดPDF
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"; 

const route = useRoute();
const { data: examination } = await useMyFetch<any>(
  `examination/${route.params.id}`,
  {}
);

definePageMeta({
  middleware: "authenticated",
});

const downloadPDF = async () => {
  const content = document.getElementById("pdf-content");
  const goldenTiara = document.getElementById("golden-tiara-icons");


  goldenTiara?.classList.add("mt-6");

  const canvas = await html2canvas(content, {
    scale: 4, // Adjust scale as needed, e.g., 2 for higher resolution
    dpi: window.devicePixelRatio * 300, // Adjust DPI for higher quality
  });

  const pdf = new jsPDF("p", "mm", "a4"); // Create a new PDF document

  const imgData = canvas.toDataURL("image/png", 1); // Use quality parameter to prevent compression

  pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // Add the canvas as an image
  const examinationId = examination.value.id; // Get the pawn id

  pdf.save(`เลขสัญญาตรวจสอบทอง_${examinationId}.pdf`);
  goldenTiara?.classList.remove("mt-6");

};
</script>
