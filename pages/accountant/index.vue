<template>
<section class="max-w-7xl mx-auto p-0">
    <div class="relative">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">ตารางรายรับ-รายจ่าย</h1>
          <!-- Create new table -->
          
            
        </div>

        <!-- Search Box -->
        <div class="flex mt-20 mb-5">
          <!-- Date -->
          <div>
            <input
              class="border text-gray-500 border-gold rounded-md mr-5 px-5 py-2 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              type="date"
              name=""
              id=""
            />
          </div>
          <label for="table-search" class="sr-only">Search</label>
          <!-- Item Search -->
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <!-- Search -->
            <input
              type="text"
              id="table-search"
              class="block py-2.5 pl-10 text-sm text-gray-900 border border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="Search for items"
            />
          </div>
          <!-- Search Button -->
          <button
            class="px-4 text-base bg-darkblue hover:bg-blue-800 ml-5 rounded-lg text-white"
          >
            ค้นหา
          </button>
        </div>
      </div>
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
        >
          <tr>
            <th scope="col" class="px-6">รายการ</th>
            <th scope="col" class="px-6 py-6">รายรับ(บาท)</th>
            <th scope="col" class="px-6">รายจ่าย(บาท)</th>
            <th scope="col" class="px-6"></th>
            <th scope="col" class="px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-gold hover:bg-gray-50">
            <th
              scope="row"
              class="text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ลูกค้าจำนำ
            </th>
            <td class="text-center text-green-500">2000</td>
            <td class="text-center text-red-500">2000</td>

            <td class="text-center py-6 px-6">
            </td>
            <td class="px-6">
              <a href="#" class="font-medium text-red-600 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gold hover:bg-gray-50">
            <th
              scope="row"
              class="text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              โอนเงินให้ลูกค้า
            </th>
            <td class="text-center text-green-500">0000</td>
            <td class="text-center text-red-500">5555</td>

            <td class="px-6">
              <a href="#" class="font-medium text-red-600 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gold hover:bg-gray-50">
            <th
              scope="row"
              class="text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ลูกค้าเสียดอก
            </th>
            <td class="text-center text-green-500">200000</td>
            <td class="text-center text-red-500">5000</td>

            <td class="text-center py-6 px-6">
            </td>
            <td class="px-6">
              <a href="#" class="font-medium text-red-600 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
          <tr class="bg-gray-100 border-b border-gold ">
            <th
              scope="row"
              class="text-center font-medium text-gray-900 whitespace-nowrap dark:text-white py-6"
            >
              ทั้งหมด
            </th>
            <td class="text-center text-green-500">0000</td>
            <td class="text-center text-red-500">5555</td>
            <td class=""></td>
            <td class=""></td>

          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
