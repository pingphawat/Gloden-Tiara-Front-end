<template>
  <header class="bg-background pt-8 -pb-20">
    <div class="max-w-7xl mx-auto px-10">
      <div class="flex justify-between">
        <div class="items-center front-mono my-auto">
          <h3 class="text-lg font-light">ยินดีต้อนรับสู่ร้านจำนำ</h3>
          <h1 class="text-3xl md:text-7xl font-semibold">
            <span class="text-gold">G</span>olden
          </h1>
          <h1 class="text-3xl md:text-7xl font-semibold">
            <span class="text-gold">T</span>iara
          </h1>

          <h3 class="md:mt-4 md:text-lg text-sm font-ligh md:mb-6">
            ที่จะมอบประสบการณ์สุดพิเศษให้แก่ลูกค้าทุกท่าน
          </h3>
          <MenuLink
            to="/auth/login"
            class="font-light md:py-2 md:px-4 md:text-lg text-sm px-2 py-1 text-white border rounded-lg mt-1 md:mt-2 bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold"
          >
            เริ่มต้นการใช้งาน
          </MenuLink>
        </div>
        <img class="w-7/12" src="@/assets/images/pawnshop.png" alt="" />
      </div>
    </div>
  </header>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#FDF6EC"
      fill-opacity="1"
      d="M0,256L30,224C60,192,120,128,180,106.7C240,85,300,107,360,144C420,181,480,235,540,229.3C600,224,660,160,720,149.3C780,139,840,181,900,181.3C960,181,1020,139,1080,144C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
    ></path>
  </svg>

  <!-- Golden Tiara Promotion -->
  <!--      Certification-->
  <div class="mt-20">
    <!--    Container-->
    <div
      class="flex justify-around rounded-lg"
      v-motion-pop-visible-once
      :delay="300"
    >
      <!--image-->
      <div>
        <img
          class="w-40 h-40 md:w-80 md:h-80"
          src="@/assets/images/promotion/certification.svg"
        />
      </div>
      <!--content-->
      <div class="flex items-center">
        <h1 class="text-2xl md:text-6xl text-darkgold font-semibold">
          เชื่อถือได้
        </h1>
      </div>
    </div>
  </div>

  <div class="bg-gray-50 py-14 mt-20">
    <!--      Easy Ask-->
    <!--  Container-->
    <div
      class="flex justify-around rounded-lg"
      v-motion-pop-visible-once
      :delay="500"
    >
      <!--content-->
      <div class="flex items-center">
        <h1 class="text-2xl md:text-6xl text-darkgold font-bold">
          สอบถามสะดวก
        </h1>
      </div>
      <!--image-->
      <div>
        <img
          class="w-40 h-40 md:w-80 md:h-80"
          src="@/assets/images/promotion/ask.svg"
        />
      </div>
    </div>
  </div>

  <!--Fast Deal-->
  <!--Container-->
  <div class="mt-20">
    <div
      class="flex justify-around rounded-lg"
      v-motion-pop-visible-once
      :delay="700"
    >
      <!--image-->
      <div>
        <img
          class="w-40 h-40 md:w-80 md:h-80"
          src="@/assets/images/promotion/deal.svg"
        />
      </div>
      <!--content-->
      <div class="flex items-center">
        <h1 class="text-2xl md:text-6xl text-darkgold font-bold">
          ดีลง่าย จ่ายไว
        </h1>
      </div>
    </div>
  </div>

  <!--QR PAY-->
  <!--Container-->
  <div class="bg-gray-50 py-14 mt-20">
    <div
      class="flex justify-around rounded-lg"
      v-motion-pop-visible-once
      :delay="3000"
    >
      <!--content-->
      <div class="flex items-center">
        <h1 class="text-2xl md:text-6xl text-darkgold font-bold">
          ชำระผ่าน QR
        </h1>
      </div>
      <!--image-->
      <div>
        <img
          class="w-40 h-40 md:w-80 md:h-80"
          src="@/assets/images/promotion/onlinePay.svg"
        />
      </div>
    </div>
  </div>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#FDF6EC"
      fill-opacity="1"
      d="M0,256L30,224C60,192,120,128,180,106.7C240,85,300,107,360,144C420,181,480,235,540,229.3C600,224,660,160,720,149.3C780,139,840,181,900,181.3C960,181,1020,139,1080,144C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
    ></path>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#FDF6EC"
      fill-opacity="1"
      d="M0,160L30,165.3C60,171,120,181,180,165.3C240,149,300,107,360,112C420,117,480,171,540,170.7C600,171,660,117,720,122.7C780,128,840,192,900,218.7C960,245,1020,235,1080,224C1140,213,1200,203,1260,186.7C1320,171,1380,149,1410,138.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
    ></path>
  </svg> -->

  <!-- QnA Board -->
  <h1 class="text-center text-4xl mt-10 font-semibold text-darkgold">สอบถาม</h1>
  <div class="max-w-7xl mx-auto px-10" id="q&a">
    <div class="w-full bg-white rounded-lg border border-gold mx-auto mt-10">
      <div class="flex flex-col gap-5 m-3">
        <!-- Comment Container -->
        <div>
          <div class="flex w-full justify-between border rounded-md">
            <div class="p-3">
              <div class="flex gap-3 items-center">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="12"
                    cy="6"
                    r="4"
                    stroke="#122345"
                    stroke-width="1.5"
                  />
                </svg>
                <h3 class="font-semibold">ชื่อ</h3>
              </div>
              <p class="text-gray-700 mt-2">this is sample commnent</p>
              <p class="text-gray-400 text-sm mt-1">21/09/2566</p>
              <!-- Reply And Like Button -->
              <div class="flex">
                <button class="flex text-blue-500 mt-3">
                  <svg
                    class="w-[20px] h-[20px] mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9.5 17L4.5 12L9.5 7"
                        stroke="#122345"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.5"
                        d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7"
                        stroke="#122345"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                  <p class="ml-1">ตอบกลับ</p>
                </button>

                <!-- Likes -->
                <button class="flex ml-4 mt-3 text-pink-500 text-sm">
                  <div class="flex mt-0.5">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                          stroke="#ec4899"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <p class="ml-1">17 ถูกใจ</p>
                  </div>
                </button>
              </div>
              <!-- End Reply And Like Button -->
            </div>
          </div>
          <!-- End Comment  -->

          <!-- Reply Container  -->
          <div class="text-gold font-bold pl-14">|</div>
          <div class="flex justify-between border ml-5 rounded-md">
            <div class="p-3">
              <div class="flex gap-3 items-center">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-0.5 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.72266 5.47968C6.81011 4.6032 7.11663 3.7628 7.61402 3.03585C8.11141 2.30889 8.78368 1.71874 9.56895 1.31971C10.3542 0.920684 11.2272 0.725607 12.1077 0.752437C12.9881 0.779267 13.8476 1.02714 14.6071 1.47324C15.3666 1.91935 16.0017 2.54934 16.4539 3.30524C16.9061 4.06113 17.1609 4.91863 17.1948 5.79881C17.2287 6.67899 17.0407 7.55355 16.648 8.342C16.2627 9.11563 15.6925 9.78195 14.9883 10.2821"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.43945 3.35268C8.25207 4.19161 9.22512 4.85854 10.3007 5.31379C11.3763 5.76904 12.5325 6.00332 13.7005 6.00268C14.8492 6.00382 15.9865 5.77762 17.0469 5.33742"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8232 9.75268C10.5266 9.75268 10.2366 9.84065 9.98989 10.0055C9.74321 10.1703 9.55096 10.4046 9.43742 10.6787C9.32389 10.9527 9.29419 11.2543 9.35206 11.5453C9.40994 11.8363 9.5528 12.1036 9.76258 12.3133C9.97236 12.5231 10.2396 12.666 10.5306 12.7239C10.8216 12.7817 11.1232 12.752 11.3973 12.6385C11.6714 12.525 11.9056 12.3327 12.0704 12.086C12.2353 11.8394 12.3232 11.5493 12.3232 11.2527C12.3232 10.8549 12.1652 10.4733 11.8839 10.192C11.6026 9.91071 11.2211 9.75268 10.8232 9.75268Z"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.82324 7.17467V8.25268C4.82324 9.04832 5.13931 9.81139 5.70192 10.374C6.26453 10.9366 7.02759 11.2527 7.82324 11.2527H9.24649"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.7005 23.2527C21.7006 21.4693 21.211 19.7202 20.2852 18.196C19.3632 16.6779 18.0438 15.4409 16.4697 14.6187"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.2002 23.2527C2.2 21.4695 2.68926 19.7206 3.61465 18.1963C4.53542 16.6797 5.85284 15.4435 7.42453 14.621"
                    stroke="#122345"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 class="font-semibold">
                  เจ้าหน้าที่
                  <br />
                </h3>
              </div>
              <p class="text-gray-700 mt-2">this is sample commnent</p>
              <p class="text-gray-400 text-sm mt-1">21/09/2566</p>
              <!-- Reply And Like Button -->
              <div class="flex">
                <button class="flex text-blue-500 mt-3">
                  <svg
                    class="w-[20px] h-[20px] mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9.5 17L4.5 12L9.5 7"
                        stroke="#122345"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.5"
                        d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7"
                        stroke="#122345"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                  <p class="ml-1">ตอบกลับ</p>
                </button>

                <!-- Likes -->
                <button class="flex ml-4 mt-3 text-pink-500 text-sm">
                  <div class="flex mt-0.5">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                          stroke="#ec4899"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <p class="ml-1">17 ถูกใจ</p>
                  </div>
                </button>
              </div>
              <!-- End Reply And Like Button -->
            </div>
          </div>
          <!-- END Reply Container  -->
        </div>
        <!-- END Comment Container  -->

        <!-- Second Reply Container -->
        <div class="flex w-full justify-between border rounded-md">
          <div class="p-3">
            <div class="flex gap-3 items-center">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17"
                  stroke="#122345"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle
                  cx="12"
                  cy="6"
                  r="4"
                  stroke="#122345"
                  stroke-width="1.5"
                />
              </svg>
              <h3 class="font-semibold">ชื่อx</h3>
            </div>
            <p class="text-gray-700 mt-2">this is sample commnent</p>
            <p class="text-gray-400 text-sm mt-1">21/09/2566</p>
            <!-- Reply And Like Button -->
            <div class="flex">
              <button class="flex text-blue-500 mt-3">
                <svg
                  class="w-[20px] h-[20px] mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M9.5 17L4.5 12L9.5 7"
                      stroke="#122345"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.5"
                      d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7"
                      stroke="#122345"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
                <p class="ml-1">ตอบกลับ</p>
              </button>

              <!-- Likes -->
              <button class="flex ml-4 mt-3 text-pink-500 text-sm">
                <div class="flex mt-0.5">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#ec4899"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <p class="ml-1">17 ถูกใจ</p>
                </div>
              </button>
            </div>
            <!-- End Reply And Like Button -->
          </div>
        </div>
        <!-- End Second Reply Cotainer -->
      </div>

      <!-- Enter Reply -->
      <form>
        <div class="flex items-center mx-3 py-2 rounded-lg bg-gray-50">
          <label class="cursor-pointer">
            <input type="file" name="myImage" style="display: none" />
            <img
              class="ml-2 w-6 h-6"
              src="@/assets/images/q&a/image.svg"
              alt=""
            />
          </label>

          <textarea
            id="chat"
            rows=""
            class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            class="mr-2 inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
          >
            <svg
              class="w-5 h-5 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"
              />
            </svg>
            <span class="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#FDF6EC"
      fill-opacity="1"
      d="M0,256L30,224C60,192,120,128,180,106.7C240,85,300,107,360,144C420,181,480,235,540,229.3C600,224,660,160,720,149.3C780,139,840,181,900,181.3C960,181,1020,139,1080,144C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
    ></path>
  </svg>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#FDF6EC"
      fill-opacity="1"
      d="M0,160L30,165.3C60,171,120,181,180,165.3C240,149,300,107,360,112C420,117,480,171,540,170.7C600,171,660,117,720,122.7C780,128,840,192,900,218.7C960,245,1020,235,1080,224C1140,213,1200,203,1260,186.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
    ></path>
  </svg> -->

  <!-- Contact Us -->
  <div class="bg-background pt-16 pb-16" id="cotactUs">
    <div class="max-w-7xl mx-auto px-10">
      <!-- Container for demo purpose -->
      <div
        class="container mx-auto md:px-6 pb-6"
        v-motion-slide-visible-top
        :delay="300"
      >
        <!-- Section: Design Block -->
        <h1 class="text-3xl font-light text-darkgold text-center mb-10">
          ติดต่อเรา
        </h1>
        <section class="mb-10">
          <div class="block rounded-lg bg-white">
            <div class="flex flex-wrap items-center">
              <div
                class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12"
              >
                <div class="h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3957.015153857729!2d100.12014707500062!3d7.352193992656651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjEnMDcuOSJOIDEwMMKwMDcnMjEuOCJF!5e0!3m2!1sth!2sth!4v1695377487779!5m2!1sth!2sth"
                    class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div
                class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12"
              >
                <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"
                  >
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div
                          class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                        >
                          <svg
                            version="1.0"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="40px"
                            height="40px"
                            viewBox="0 0 64 64"
                            enable-background="new 0 0 64 64"
                            xml:space="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  fill="#394240"
                                  d="M59,29H47c-1.657,0-3,1.344-3,3s1.343,3,3,3h12c1.657,0,3-1.344,3-3S60.657,29,59,29z M59,33H47
			c-0.553,0-1-0.447-1-1s0.447-1,1-1h12c0.553,0,1,0.447,1,1S59.553,33,59,33z"
                                />
                                <path
                                  fill="#394240"
                                  d="M57.312,44.57l-11.275-4.104c-1.559-0.566-3.279,0.236-3.846,1.793c-0.566,1.556,0.235,3.277,1.793,3.845
			l11.276,4.105c1.558,0.565,3.278-0.238,3.845-1.793C59.672,46.858,58.87,45.137,57.312,44.57z M57.227,47.731
			c-0.189,0.521-0.763,0.786-1.281,0.598l-11.277-4.104c-0.52-0.189-0.786-0.762-0.598-1.281c0.189-0.52,0.763-0.788,1.282-0.599
			l11.276,4.104C57.148,46.638,57.416,47.212,57.227,47.731z"
                                />
                                <path
                                  fill="#394240"
                                  d="M46.036,23.53l11.276-4.104c1.557-0.566,2.359-2.289,1.793-3.843c-0.566-1.558-2.288-2.362-3.846-1.796
			l-11.275,4.105c-1.559,0.566-2.36,2.289-1.794,3.846C42.757,23.294,44.479,24.098,46.036,23.53z M44.668,19.772l11.276-4.104
			c0.519-0.188,1.093,0.079,1.281,0.599c0.189,0.52-0.078,1.092-0.597,1.281l-11.277,4.104c-0.52,0.189-1.093-0.078-1.281-0.598
			C43.881,20.534,44.148,19.962,44.668,19.772z"
                                />
                                <path
                                  fill="#394240"
                                  d="M30,0H14c-0.52,0-1.039,0.105-1.527,0.309c-0.492,0.203-0.938,0.496-1.309,0.871C10.766,1.578,2,12,2,32
			s8.316,29.688,8.672,30.219c0.113,0.172,0.262,0.309,0.395,0.457c0.062,0.066,0.109,0.137,0.176,0.199
			c0.328,0.316,0.699,0.562,1.102,0.742c0.086,0.043,0.176,0.07,0.266,0.102C13.055,63.883,13.52,64,13.992,64
			C13.996,64,14,64,14,64h12h4c2.211,0,4-1.789,4-4V46c0-2.211-1.789-4-4-4h-9c-0.553,0-1-0.447-1-1V23c0-0.553,0.447-1,1-1h9
			c2.211,0,4-1.789,4-4V4C34,1.789,32.211,0,30,0z M26,44h4c1.103,0,2,0.897,2,2v14c0,1.103-0.897,2-2,2h-4V44z M22,44h2v18h-2V44z
			 M20,20c-1.104,0-2,0.896-2,2v20c0,1.104,0.896,2,2,2v18h-6.008c-0.175,0-0.407-0.053-0.726-0.17l-0.09-0.031
			c-0.006-0.002-0.012-0.005-0.018-0.008c-0.18-0.08-0.338-0.183-0.493-0.323c-0.04-0.047-0.08-0.095-0.123-0.141
			c-0.045-0.05-0.091-0.1-0.138-0.148c-0.03-0.032-0.062-0.063-0.071-0.072c-0.031-0.047-0.099-0.14-0.203-0.274
			C9.687,57.643,4,48.447,4,32c0-19.467,8.524-29.346,8.586-29.414c0.179-0.18,0.397-0.324,0.655-0.431C13.488,2.053,13.744,2,14,2
			h6V20z M24,20h-2V2h2V20z M32,18c0,1.103-0.897,2-2,2h-4V2h4c1.103,0,2,0.897,2,2V18z"
                                />
                              </g>
                              <g>
                                <path
                                  fill="#F76D57"
                                  d="M30,2h-4v18h4c1.103,0,2-0.897,2-2V4C32,2.897,31.103,2,30,2z"
                                />
                                <rect
                                  x="22"
                                  y="2"
                                  fill="#F76D57"
                                  width="2"
                                  height="18"
                                />
                                <path
                                  fill="#F76D57"
                                  d="M30,44h-4v18h4c1.103,0,2-0.897,2-2V46C32,44.897,31.103,44,30,44z"
                                />
                                <rect
                                  x="22"
                                  y="44"
                                  fill="#F76D57"
                                  width="2"
                                  height="18"
                                />
                                <path
                                  fill="#F76D57"
                                  d="M13.241,2.155c-0.258,0.106-0.477,0.251-0.655,0.431C12.524,2.654,4,12.533,4,32
			c0,16.447,5.687,25.643,8.131,28.832c0.104,0.135,0.172,0.228,0.203,0.274c0.01,0.009,0.041,0.04,0.071,0.072
			c0.047,0.049,0.093,0.099,0.138,0.148c0.043,0.046,0.083,0.094,0.123,0.141c0.155,0.141,0.313,0.243,0.493,0.323
			c0.006,0.003,0.012,0.006,0.018,0.008l0.09,0.031c0.318,0.117,0.551,0.17,0.726,0.17H20V44c-1.104,0-2-0.896-2-2V22
			c0-1.104,0.896-2,2-2V2h-6C13.744,2,13.488,2.053,13.241,2.155z"
                                />
                              </g>
                              <g>
                                <rect
                                  x="22"
                                  y="2"
                                  fill="#F9EBB2"
                                  width="2"
                                  height="18"
                                />
                                <rect
                                  x="22"
                                  y="44"
                                  fill="#F9EBB2"
                                  width="2"
                                  height="18"
                                />
                              </g>
                              <g opacity="0.2">
                                <path
                                  d="M30,2h-4v18h4c1.103,0,2-0.897,2-2V4C32,2.897,31.103,2,30,2z"
                                />
                                <path
                                  d="M30,44h-4v18h4c1.103,0,2-0.897,2-2V46C32,44.897,31.103,44,30,44z"
                                />
                              </g>
                              <g>
                                <path
                                  fill="#B4CCB9"
                                  d="M45.352,21.651l11.277-4.104c0.519-0.189,0.786-0.762,0.597-1.281c-0.188-0.52-0.763-0.787-1.281-0.599
			l-11.276,4.104c-0.52,0.189-0.787,0.762-0.598,1.281C44.259,21.573,44.832,21.841,45.352,21.651z"
                                />
                                <path
                                  fill="#B4CCB9"
                                  d="M59,31H47c-0.553,0-1,0.447-1,1s0.447,1,1,1h12c0.553,0,1-0.447,1-1S59.553,31,59,31z"
                                />
                                <path
                                  fill="#B4CCB9"
                                  d="M56.629,46.449l-11.276-4.104c-0.52-0.189-1.093,0.079-1.282,0.599c-0.188,0.52,0.078,1.092,0.598,1.281
			l11.277,4.104c0.519,0.188,1.092-0.077,1.281-0.598C57.416,47.212,57.148,46.638,56.629,46.449z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold">เบอร์โทรศัพท์</p>
                        <a href="tel:098-081-5219" class="text-blue-500"
                          >098-081-5219</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"
                  >
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div
                          class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                        >
                          <svg
                            width="40px"
                            height="40px"
                            viewBox="7.086 -169.483 1277.149 1277.149"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              d="M1138.734 931.095h.283M1139.017 931.095h-.283"
                            />
                            <path
                              d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z"
                              fill="#e75a4d"
                            />
                            <linearGradient
                              id="a"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#a)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <path
                              fill="#e7e4d7"
                              d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
                            />
                            <path
                              fill="#b8b7ae"
                              d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
                            />
                            <path
                              fill="#b7b6ad"
                              d="M1138.734 245.877l.283 685.218-495.184-344.324z"
                            />
                            <path
                              d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z"
                              fill="#b2392f"
                            />
                            <linearGradient
                              id="b"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#b)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="c"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#c)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="d"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#d)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="e"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#e)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="f"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#f)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="g"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#g)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <linearGradient
                              id="h"
                              gradientUnits="userSpaceOnUse"
                              x1="1959.712"
                              y1="737.107"
                              x2="26066.213"
                              y2="737.107"
                              gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                            >
                              <stop offset="0" stop-color="#f8f6ef" />
                              <stop offset="1" stop-color="#e7e4d6" />
                            </linearGradient>
                            <path
                              fill="url(#h)"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                            <path
                              fill="#f7f5ed"
                              d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold">Gmail</p>
                        <a
                          href="mailto:GoldenTiara@example.com?subject = Feedback&body = Message"
                          class="text-blue-500"
                          >GoldenTiara@example.com</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12"
                  >
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div
                          class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                        >
                          <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 48 48"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>Facebook-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Icons"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                id="Color-"
                                transform="translate(-200.000000, -160.000000)"
                                fill="#4460A0"
                              >
                                <path
                                  d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                                  id="Facebook"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold">Facebook</p>
                        <p class="text-neutral-500">ห้างทองเยวราช ปากพะยูน</p>
                        <a
                          href="https://www.facebook.com/profile.php?id=100054444581955&mibextid=ZbWKwL"
                          class="text-blue-500"
                          target="”_blank"
                        >
                          ติดต่อเรา
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"
                  >
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div
                          class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                        >
                          <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 14.4979C30 8.15792 23.7199 3 15.9999 3C8.28094 3 2 8.15792 2 14.4979C2 20.1817 6.98063 24.9417 13.7084 25.8418C14.1644 25.9412 14.7849 26.146 14.9419 26.5404C15.0831 26.8986 15.0342 27.4598 14.987 27.8216C14.987 27.8216 14.8227 28.8214 14.7873 29.0343C14.7264 29.3926 14.5061 30.4353 15.9999 29.7981C17.4942 29.1609 24.0626 24.9935 26.9998 21.572C29.0287 19.3204 30 17.0353 30 14.4979Z"
                              fill="#2CCF54"
                            />
                            <path
                              d="M13.1553 11.4244H12.1733C12.0228 11.4244 11.9004 11.5478 11.9004 11.6995V17.866C11.9004 18.0179 12.0228 18.1411 12.1733 18.1411H13.1553C13.3059 18.1411 13.428 18.0179 13.428 17.866V11.6995C13.428 11.5478 13.3059 11.4244 13.1553 11.4244Z"
                              fill="white"
                            />
                            <path
                              d="M19.9147 11.4244H18.9327C18.7821 11.4244 18.66 11.5478 18.66 11.6995V15.3631L15.8645 11.5467C15.8128 11.4683 15.729 11.4295 15.6375 11.4244H14.6558C14.5052 11.4244 14.3828 11.5478 14.3828 11.6995V17.866C14.3828 18.0179 14.5052 18.1411 14.6558 18.1411H15.6375C15.7883 18.1411 15.9104 18.0179 15.9104 17.866V14.2035L18.7094 18.0247C18.7597 18.0967 18.845 18.1411 18.9327 18.1411H19.9147C20.0655 18.1411 20.1874 18.0179 20.1874 17.866V11.6995C20.1874 11.5478 20.0655 11.4244 19.9147 11.4244Z"
                              fill="white"
                            />
                            <path
                              d="M10.7884 16.5969H8.12013V11.6998C8.12013 11.5476 7.99802 11.4241 7.84773 11.4241H6.86545C6.71489 11.4241 6.59277 11.5476 6.59277 11.6998V17.8652C6.59277 18.0149 6.71435 18.1411 6.86518 18.1411H10.7884C10.9389 18.1411 11.0605 18.0174 11.0605 17.8652V16.8725C11.0605 16.7203 10.9389 16.5969 10.7884 16.5969Z"
                              fill="white"
                            />
                            <path
                              d="M25.3372 12.9683C25.4878 12.9683 25.6094 12.8452 25.6094 12.6927V11.7C25.6094 11.5478 25.4878 11.4241 25.3372 11.4241H21.4143C21.2636 11.4241 21.1416 11.5501 21.1416 11.6998V17.8655C21.1416 18.0147 21.2633 18.1411 21.4137 18.1411H25.3372C25.4878 18.1411 25.6094 18.0174 25.6094 17.8655V16.8725C25.6094 16.7206 25.4878 16.5969 25.3372 16.5969H22.6692V15.5546H25.3372C25.4878 15.5546 25.6094 15.4311 25.6094 15.2789V14.2863C25.6094 14.1341 25.4878 14.0104 25.3372 14.0104H22.6692V12.9683H25.3372Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold -mt-1">Line</p>
                        <p class="text-neutral-500">ห้างทองเยวราช ปากพะยูน</p>
                        <a
                          href="https:// "
                          class="text-blue-500"
                          target="_blank"
                        >
                          ติดต่อเรา
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section: Design Block -->
      </div>
      <!-- Container for demo purpose -->
    </div>
  </div>
</template>

<script>
export default {
  compunted: {
    reload () {
      window.location.reload()
    }
   
  },
  methods: {
    handleClick() {
      this.$refs.targetRef.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
