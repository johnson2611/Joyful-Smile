import React from "react";
import volunteer from "../assets/volunteer.jpg";

function Donation() {
  return (
    <section>
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[90vh] bg-cover bg-center">
        <img
          src={volunteer}
          alt="volunteer"
          className="w-full h-full md:h-max lg:h-[90vh] object-cover bg-opacity-100 brightness-90"
        />
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24 text-left">
          <span className="text-[#005963] text-xl font-extrabold font-serif md:text-4xl lg:text-5xl mt-4">
            Bringing Joy, One Smile at a time.
          </span>
          <span className="text-white md:w-2/4 w-full text-justify px-2 md:px-2 text-sm font-medium font-serif md:text-lg lg:text-xl mt-6">
            Joyful Smiles Dental Outreach is a compassionate initiative
            dedicated to transforming lives through accessible, high quality
            dental care. Our mission is to empower underserved communities by
            providing essential dental services and promoting oral health
            education
          </span>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <p className="flex justify-center text-center text-black font-semibold font-serif text-2xl mb-2">
          Join the Joyful Smiles Dental Outreach in Aboru, Iyana-Ipaja!
        </p>
        <p class="text-center mx-auto text-black font-serif text-lg mt-4 px-5 lg:px-64">
          Joyful Smiles Dental Outreaches is seeking passionate and experienced
          volunteers to join our upcoming dental outreach program in Aboru,
          Iyana-Ipaja. As a seasoned dental health professional, we invite you
          to share your expertise and time to provide vital dental care services
          to those in need.
        </p>
      </div>
      <section className="px-8 lg:px-16 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center font-medium">
          <div className="bg-[#D9D9D9] py-4 px-6">
            <h2 className="text-center text-2xl my-2 font-bold font-serif">
              Our Impact
            </h2>
            <span className="text-center text-base my-2 font-normal font-serif">
              We aim to make a significant difference by:
            </span>
            <ul className="mt-8 text-base">
              <li className="flex items-center space-x-2 mb-3">
                (1) Serving 1,000 individuals annually: Delivering comprehensive
                dental care to those in need.
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (2) Empowering communities: Educating individuals about oral
                health and hygiene.
              </li>

              <li className="flex items-center space-x-2 mb-3">
                (3) Building a healthier future: Fostering a community where
                everyone has access to quality dental care.
              </li>
            </ul>
          </div>
          <div className="bg-[#D9D9D9] py-4 px-6">
            <h2 className="text-center text-2xl my-2 font-bold font-serif">
              Your Partnership, Our Power
            </h2>
            <span className="text-center text-base my-2 font-normal font-serif">
              To realize our vision, we need your support. Your generous
              contribution will directly impact our ability to
            </span>
            <ul className="mt-4 text-base">
              <li className="flex items-center space-x-2 mb-3">
                (1) Equip our team: Provide state-of-the-art dental equipment.
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (2) Mobilize our volunteers: Empower dedicated individuals to
                serve our community
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (3) Deliver comprehensive care: Fund essential dental services,
                including check-ups, cleanings, fillings, and extractions.
              </li>
            </ul>
          </div>
          <div className="bg-[#D9D9D9] py-4 px-6">
            <h2 className="text-center text-2xl my-2 font-bold font-serif">
              Budget Breakdown
            </h2>
            <span className="text-center text-base my-2 font-normal font-serif">
              To achieve our goals, we require a total budget of #1,200,000
              annually. This funding will be allocated as follows:
            </span>
            <ul className="mt-4 text-base">
              <li className="flex items-center space-x-2 mb-3">
                (1) Personnel and Logistics (15%): ₦180,000
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (2) Dental Equipment and Supplies (25%): ₦300,000
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (3) Clinical Services (55%): ₦660,000
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (4) Miscellaneous (5%): ₦60,000
              </li>
            </ul>
          </div>
          <div className="bg-[#D9D9D9] py-4 px-6">
            <h2 className="text-center text-2xl my-2 font-bold font-serif">
              How Your Support Makes a Difference
            </h2>
            <span className="text-center text-base my-2 font-normal font-serif">
              Your generous contribution will directly impact our ability to:
            </span>
            <ul className="mt-4 text-base">
              <li className="flex items-center space-x-2 mb-3">
                (1) Equip our team
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (2) Mobilize our volunteers
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (3) Deliver comprehensive dental care (checks and treatments)
              </li>
              <li className="flex items-center space-x-2 mb-3">
                (4) Empower our community
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bg-[#F0F0F0] px-10 lg:px-28 py-6">
        <h2 className="flex justify-center font-semibold text-base md:text-2xl">
          Sponsorship Opportunities
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
          <div class="bg-[#ffffff] shadow-lg border-[#005963] border-2 lex flex-col justify-center items-center p-4 px-2 rounded-2xl">
            <h2 class="text-lg my-4 text-center font-semibold">
              Gold Sponsor (₦500,000)
            </h2>
            <div>
              <p>
                Prime branding, event recognition, exclusive social media
                promotion
              </p>
            </div>
          </div>
          <div class="bg-[#ffffff] shadow-lg border-[#005963] border-2 lex flex-col justify-center items-center p-4 px-2 rounded-2xl">
            <h2 class="text-lg my-4 text-center font-semibold">
              Silver Sponsor (₦250,000)
            </h2>
            <div>
              <p>Prominent branding, featured social media recognition</p>
            </div>
          </div>
          <div class="bg-[#ffffff] shadow-lg border-[#005963] border-2 flex flex-col justify-center items-center p-4 px-2 rounded-2xl">
            <h2 class="text-lg font-semibold text-center my-4">
              Bronze Sponsor (₦100,000):
            </h2>
            <div>
              <p>Brand visibility on outreach materials</p>
            </div>
          </div>
        </div>
        {/* other options */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <p className="flex justify-center text-black font-bold font-serif text-3xl mb-2">
            Other Ways to Contribute
          </p>
          <p class="text-center mx-auto text-black font-serif text-lg mt-4 px-5 lg:px-64">
            Make a difference, one smile at a time. Bring joyful smiles and hope
            to our society!
          </p>
          <h2 className="flex justify-center text-black text-xs md:text-lg font-medium font-serif pt-4 break-words text-center">
            (1) Miscellaneous (5%): ₦60,000.
          </h2>
          <h2 className="flex justify-center text-black text-xs md:text-lg font-medium font-serif pt-4 break-words text-center">
            (2) In-Kind Donations: Provide dental supplies, equipment, or
            volunteer services
          </h2>
        </div>
        {/* form field */}
        <div>
          <p className="flex justify-center text-black font-bold font-serif text-3xl mb-2 mt-12">
            How to Apply
          </p>
          <p class="text-center mx-auto text-black font-serif text-lg mt-2 px-5 lg:px-64">
            Register by filling the following details here and submit
          </p>
          <form action="" method="" class="max-w-xl mx-auto mt-8">
            <fieldset>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    for="surname"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        width="25"
                        height="28"
                        viewBox="0 0 41 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.3945 18C24.8128 18 28.3945 14.4183 28.3945 10C28.3945 5.58172 24.8128 2 20.3945 2C15.9763 2 12.3945 5.58172 12.3945 10C12.3945 14.4183 15.9763 18 20.3945 18Z"
                          stroke="black"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M38.3945 42C38.3945 32.059 30.3355 24 20.3945 24C10.4535 24 2.39453 32.059 2.39453 42"
                          stroke="black"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15ZM50 15L30 27.475L10 15H50ZM50 45H10V20L30 32.5L50 20V45Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    for="phone number"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9269 19.7175C13.2107 15 16.5369 10.7625 21.6182 9.21003C22.5199 8.9362 23.492 9.01554 24.3374 9.43197C25.1828 9.8484 25.8382 10.5707 26.1707 11.4525L27.8019 15.8025C28.0645 16.5023 28.112 17.2646 27.9383 17.9916C27.7646 18.7186 27.3776 19.3771 26.8269 19.8825L21.9744 24.3263C21.735 24.5456 21.5565 24.8233 21.4566 25.1322C21.3567 25.4412 21.3387 25.7708 21.4044 26.0888L21.4494 26.2838L21.5657 26.7713C22.1707 29.1395 23.0901 31.4159 24.2994 33.54C25.6199 35.7953 27.2565 37.8499 29.1594 39.6413L29.3094 39.7763C29.5517 39.9913 29.8455 40.1399 30.1623 40.2076C30.4791 40.2753 30.808 40.2598 31.1169 40.1625L37.3907 38.1863C38.1037 37.9624 38.8673 37.9567 39.5836 38.1698C40.2998 38.383 40.9361 38.8053 41.4107 39.3825L44.3807 42.9863C45.6182 44.4863 45.4682 46.6913 44.047 48.015C40.1582 51.6413 34.8107 52.3838 31.0907 49.395C26.5289 45.7188 22.6845 41.2325 19.7507 36.1613C16.7882 31.0968 14.8146 25.5173 13.9269 19.7175ZM25.3344 26.3363L29.3544 22.6463C30.4563 21.6358 31.2311 20.319 31.5792 18.8651C31.9273 17.4111 31.8329 15.8862 31.3082 14.4863L29.6807 10.1363C29.013 8.36167 27.6949 6.90776 25.994 6.06986C24.2931 5.23196 22.3371 5.07292 20.5232 5.62503C14.2119 7.55628 9.1457 13.215 10.2182 20.2838C10.9682 25.2188 12.6969 31.4963 16.5107 38.0513C19.6761 43.5192 23.823 48.3564 28.7432 52.32C34.3232 56.8013 41.7707 55.2713 46.6082 50.7638C47.9924 49.475 48.8326 47.7065 48.9573 45.8194C49.082 43.9322 48.4819 42.0686 47.2794 40.6088L44.3094 37.0013C43.3593 35.8481 42.0864 35.005 40.6539 34.58C39.2215 34.1551 37.6947 34.1677 36.2694 34.6163L31.0607 36.255C29.7157 34.8685 28.5377 33.3293 27.5507 31.6688C26.5982 29.9896 25.8552 28.2 25.3382 26.34"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="available"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Availability
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.25 18.125C25.9185 18.125 25.6005 18.2567 25.3661 18.4911C25.1317 18.7255 25 19.0435 25 19.375C25 19.7065 25.1317 20.0245 25.3661 20.2589C25.6005 20.4933 25.9185 20.625 26.25 20.625H33.75C34.0815 20.625 34.3995 20.4933 34.6339 20.2589C34.8683 20.0245 35 19.7065 35 19.375C35 19.0435 34.8683 18.7255 34.6339 18.4911C34.3995 18.2567 34.0815 18.125 33.75 18.125H26.25ZM23.75 31.875C23.75 32.538 23.4866 33.1739 23.0178 33.6428C22.5489 34.1116 21.913 34.375 21.25 34.375C20.587 34.375 19.9511 34.1116 19.4822 33.6428C19.0134 33.1739 18.75 32.538 18.75 31.875C18.75 31.212 19.0134 30.5761 19.4822 30.1072C19.9511 29.6384 20.587 29.375 21.25 29.375C21.913 29.375 22.5489 29.6384 23.0178 30.1072C23.4866 30.5761 23.75 31.212 23.75 31.875ZM23.75 40.625C23.75 41.288 23.4866 41.9239 23.0178 42.3928C22.5489 42.8616 21.913 43.125 21.25 43.125C20.587 43.125 19.9511 42.8616 19.4822 42.3928C19.0134 41.9239 18.75 41.288 18.75 40.625C18.75 39.962 19.0134 39.3261 19.4822 38.8572C19.9511 38.3884 20.587 38.125 21.25 38.125C21.913 38.125 22.5489 38.3884 23.0178 38.8572C23.4866 39.3261 23.75 39.962 23.75 40.625ZM30 34.375C30.663 34.375 31.2989 34.1116 31.7678 33.6428C32.2366 33.1739 32.5 32.538 32.5 31.875C32.5 31.212 32.2366 30.5761 31.7678 30.1072C31.2989 29.6384 30.663 29.375 30 29.375C29.337 29.375 28.7011 29.6384 28.2322 30.1072C27.7634 30.5761 27.5 31.212 27.5 31.875C27.5 32.538 27.7634 33.1739 28.2322 33.6428C28.7011 34.1116 29.337 34.375 30 34.375ZM32.5 40.625C32.5 41.288 32.2366 41.9239 31.7678 42.3928C31.2989 42.8616 30.663 43.125 30 43.125C29.337 43.125 28.7011 42.8616 28.2322 42.3928C27.7634 41.9239 27.5 41.288 27.5 40.625C27.5 39.962 27.7634 39.3261 28.2322 38.8572C28.7011 38.3884 29.337 38.125 30 38.125C30.663 38.125 31.2989 38.3884 31.7678 38.8572C32.2366 39.3261 32.5 39.962 32.5 40.625ZM38.75 34.375C39.413 34.375 40.0489 34.1116 40.5178 33.6428C40.9866 33.1739 41.25 32.538 41.25 31.875C41.25 31.212 40.9866 30.5761 40.5178 30.1072C40.0489 29.6384 39.413 29.375 38.75 29.375C38.087 29.375 37.4511 29.6384 36.9822 30.1072C36.5134 30.5761 36.25 31.212 36.25 31.875C36.25 32.538 36.5134 33.1739 36.9822 33.6428C37.4511 34.1116 38.087 34.375 38.75 34.375Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20 8.75C20.3315 8.75 20.6495 8.8817 20.8839 9.11612C21.1183 9.35054 21.25 9.66848 21.25 10V12.5H38.75V10C38.75 9.66848 38.8817 9.35054 39.1161 9.11612C39.3505 8.8817 39.6685 8.75 40 8.75C40.3315 8.75 40.6495 8.8817 40.8839 9.11612C41.1183 9.35054 41.25 9.66848 41.25 10V12.5075C41.8617 12.5125 42.4067 12.5342 42.885 12.5725C43.7975 12.6475 44.5975 12.805 45.3375 13.18C46.5132 13.7797 47.4688 14.7363 48.0675 15.9125C48.445 16.6525 48.6025 17.4525 48.6775 18.3625C48.75 19.25 48.75 20.3425 48.75 21.6975V40.8025C48.75 42.1575 48.75 43.2525 48.6775 44.135C48.6025 45.0475 48.445 45.8475 48.0675 46.5875C47.4684 47.7628 46.5128 48.7184 45.3375 49.3175C44.5975 49.695 43.7975 49.8525 42.8875 49.9275C42 50 40.9075 50 39.555 50H20.4475C19.0925 50 17.9975 50 17.115 49.9275C16.2025 49.8525 15.4025 49.695 14.6625 49.3175C13.4863 48.7188 12.5297 47.7632 11.93 46.5875C11.555 45.8475 11.3975 45.0475 11.3225 44.1375C11.25 43.25 11.25 42.155 11.25 40.8V21.7C11.25 20.5125 11.25 19.53 11.3 18.7075L11.3225 18.3675C11.3975 17.455 11.555 16.655 11.93 15.915C12.5293 14.7384 13.4859 13.7818 14.6625 13.1825C15.4025 12.8075 16.2025 12.65 17.1125 12.575C17.5942 12.5367 18.14 12.515 18.75 12.51V10C18.75 9.66848 18.8817 9.35054 19.1161 9.11612C19.3505 8.8817 19.6685 8.75 20 8.75ZM18.75 16.25V15.0075C18.272 15.0114 17.7943 15.0306 17.3175 15.065C16.5625 15.125 16.1275 15.24 15.7975 15.4075C15.0913 15.7671 14.5171 16.3413 14.1575 17.0475C13.99 17.3775 13.875 17.8125 13.815 18.5675C13.75 19.34 13.75 20.33 13.75 21.75V23.125H46.25V21.75C46.25 20.33 46.25 19.34 46.185 18.5675C46.125 17.8125 46.01 17.3775 45.8425 17.0475C45.4829 16.3413 44.9087 15.7671 44.2025 15.4075C43.8725 15.24 43.4375 15.125 42.6825 15.065C42.2057 15.0306 41.728 15.0114 41.25 15.0075V16.25C41.25 16.5815 41.1183 16.8995 40.8839 17.1339C40.6495 17.3683 40.3315 17.5 40 17.5C39.6685 17.5 39.3505 17.3683 39.1161 17.1339C38.8817 16.8995 38.75 16.5815 38.75 16.25V15H21.25V16.25C21.25 16.5815 21.1183 16.8995 20.8839 17.1339C20.6495 17.3683 20.3315 17.5 20 17.5C19.6685 17.5 19.3505 17.3683 19.1161 17.1339C18.8817 16.8995 18.75 16.5815 18.75 16.25ZM46.25 25.625H13.75V40.75C13.75 42.17 13.75 43.1625 13.815 43.9325C13.875 44.6875 13.99 45.1225 14.1575 45.4525C14.5171 46.1587 15.0913 46.7329 15.7975 47.0925C16.1275 47.26 16.5625 47.375 17.3175 47.435C18.09 47.5 19.08 47.5 20.5 47.5H39.5C40.92 47.5 41.9125 47.5 42.6825 47.435C43.4375 47.375 43.8725 47.26 44.2025 47.0925C44.9087 46.7329 45.4829 46.1587 45.8425 45.4525C46.01 45.1225 46.125 44.6875 46.185 43.9325C46.25 43.1625 46.25 42.17 46.25 40.75V25.625Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="credential"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Credential
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M16 22a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2M14 6h4v2h-4z"
                        />
                        <path
                          fill="currentColor"
                          d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 26h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm2 0v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H8V4h16v24Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="credential"
                      name="credential"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="address"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 16.25C31.6576 16.25 33.2473 16.9085 34.4194 18.0806C35.5915 19.2527 36.25 20.8424 36.25 22.5C36.25 23.3208 36.0883 24.1335 35.7742 24.8918C35.4602 25.6501 34.9998 26.3391 34.4194 26.9194C33.8391 27.4998 33.1501 27.9602 32.3918 28.2742C31.6335 28.5883 30.8208 28.75 30 28.75C28.3424 28.75 26.7527 28.0915 25.5806 26.9194C24.4085 25.7473 23.75 24.1576 23.75 22.5C23.75 20.8424 24.4085 19.2527 25.5806 18.0806C26.7527 16.9085 28.3424 16.25 30 16.25ZM30 5C34.6413 5 39.0925 6.84374 42.3744 10.1256C45.6563 13.4075 47.5 17.8587 47.5 22.5C47.5 35.625 30 55 30 55C30 55 12.5 35.625 12.5 22.5C12.5 17.8587 14.3437 13.4075 17.6256 10.1256C20.9075 6.84374 25.3587 5 30 5ZM30 10C26.6848 10 23.5054 11.317 21.1612 13.6612C18.817 16.0054 17.5 19.1848 17.5 22.5C17.5 25 17.5 30 30 46.775C42.5 30 42.5 25 42.5 22.5C42.5 19.1848 41.183 16.0054 38.8388 13.6612C36.4946 11.317 33.3152 10 30 10Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="bg-gray-50 border-2 border-[#000] text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full ps-10 p-2.5 "
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="flex justify-center mt-4">
              <button className="bg-[#005963] text-white hover:bg-black rounded-xl py-3 px-8 font-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* join us */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <p className="flex justify-center text-black font-bold font-serif text-3xl mb-2">
          Join Us
        </p>
        <p class="text-center mx-auto text-black font-serif text-lg mt-4 px-5 lg:px-64">
          By partnering with us, you're investing in a healthier, happier
          community. Your support will leave a lasting impact on the lives of
          1,000 individuals annually.Let's work together to create a brighter
          future, one smile at a time.
        </p>
      </div>
    </section>
  );
}

export default Donation;
