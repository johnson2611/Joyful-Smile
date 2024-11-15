/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/banner.jpeg";
import welcome from "../assets/welcome.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.png";
import volunteer from "../assets/volunteer.jpg";

function Home() {
  return (
    <div>
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[90vh] bg-cover bg-center">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full md:h-max lg:h-[90vh] object-cover bg-opacity-100 brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24 text-left">
          <span className="text-[#005963] text-xl font-extrabold font-serif md:text-4xl lg:text-5xl mt-4">
            Bringing Joy, One Sm¡le at a time.
          </span>
          <span className="text-white md:w-2/4 w-full px-2 md:px-2 text-justify text-sm font-medium font-serif md:text-lg lg:text-xl mt-6">
            At Joyful Sm¡les Dental Outreaches, We believe everyone deserves
            healthy, happy Sm¡le. Our mission is to provide access to quality
            dental care for those in need, making a meaningful difference in our
            communities, one Sm¡le at a time.
          </span>
        </div>
      </div>
      <div className="bg-[#005963] grid gap-6 grid-cols-1 md:grid-cols-2 mt-10 md:mt-28 mb-8 pt-20 pb-20">
        <div className="w-full px-4">
          <img
            src={welcome}
            className="w-full p-10"
            alt="Doctors"
            style={{ borderRadius: "8rem" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-justify text-sm md:text-start  px-3 md:px-0">
          <h2 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl">
            Welcome to Joyful Sm¡le Dental Outreach!
          </h2>
          <p className="mt-4 text-sm text-white md:text-base font-medium mb-4">
            We are thrilled to introduce our inaugural outreach program, marking
            a significant milestone in our commitment to providing accessible,
            quality dental care to our communities. At Joyful Sm¡les Dental, we
            firmly believe that every individual deserves a healthy, joyful
            Sm¡le, regardless of their background or socioeconomic status.
          </p>
          <span className="mt-4 px-0 md:px-0 text-sm text-white md:text-base font-medium">
            Our mission is deep rooted in the conviction that good oral health
            is essential to overall well-being. Unfortunately, many individuals
            in our communities face barriers to receiving quality dental care,
            leading to untreated oral health issues and compromised
            self-confidence.
          </span>
          <div className="py-4 text-white">
            <h2 className="text-2xl my-2 font-bold font-serif">Our Purpose:</h2>
            <span>
              Joyful Sm¡les Dental Outreach is dedicated to bridging this gap by
              offering comprehensive dental services, education, and awareness
              to our communities. Our team of experienced experts and volunteers
              are passionate about delivering:
            </span>
            <ul className="mt-8">
              <li className="flex items-center  space-x-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clip-rule="evenodd"
                  />
                </svg>
                Preventive check-ups
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clip-rule="evenodd"
                  />
                </svg>
                Basic treatments
              </li>

              <li className="flex items-center  space-x-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clip-rule="evenodd"
                  />
                </svg>
                Advanced cosmetic dentistry
              </li>
            </ul>

            {/* through this outreach */}
            <div>
              <h2 className="text-2xl mt-6 font-bold font-serif">
                Through this outreach, we aim to:
              </h2>
              <ul className="mt-2">
                <li className="flex items-center  space-x-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Provide accessible, affordable dental care to underserved
                  populations
                </li>
                <li className="flex items-center  space-x-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Foster dental awareness and promote good oral hygiene
                  practices
                </li>

                <li className="flex items-center  space-x-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Empower individuals to prioritize their oral health
                </li>
                <li className="flex items-center  space-x-2 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Build stronger, healthier communities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* join us */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <p className="flex justify-center text-black font-bold font-serif text-3xl mb-2">
          Join Us
        </p>
        <p class="text-center mx-auto text-black font-serif text-lg mt-4 px-5 lg:px-64">
          We invite you to be part of this transformative journey. Whether
          you're seeking dental care, wanting to volunteer, wanting to sponsor
          or simply eager to learn more, we welcome you to our Joyful Sm¡les
          Dental family..
        </p>
        <h2 className="flex justify-center text-black text-xs md:text-lg font-normal font-serif pt-4 break-words text-center">
          Together, let's bring joy, one Sm¡le at a time!
        </h2>
      </div>
      {/* services */}
      <div className="bg-[#D9D9D9] mb-12 px-4 sm:px-6 lg:px-8">
        <p className="flex justify-center text-black font-bold font-serif text-3xl pt-8 mb-2">
          Our Services
        </p>
        <h2 className="flex justify-center text-[#005963] text-xs md:text-lg font-bold font-serif pb-6 break-words text-center">
          At Joyful Sm¡les Dental Outreaches, we're dedicated to providing
          comprehensive dental care for optimal oral health and radiant Sm¡les.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 pb-8">
          {/* First Card */}
          <div className="max-w-sm bg-[#005963] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/3 lg:w-1/4">
            <img
              className="rounded-t-lg h-52 w-full object-cover"
              src={img1}
              alt=""
            />
            <div className="p-5 flex flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Preventive & Educative Services
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Protect and empower your Sm¡le with our preventive and educative
                services:
              </p>
              <ul className="text-white">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Tooth examination and cleanings
                </li>
                <li className="flex items-center space-x-2 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Oral cancer screenings
                </li>
                <li className="flex items-center space-x-2 pt-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Gum disease screenings
                </li>
              </ul>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-start px-3 py-2 text-sm font-medium text-center border-2 text-white bg-[#005963] rounded-lg"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="max-w-sm bg-[#005963] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/3 lg:w-1/4">
            <img
              className="rounded-t-lg h-52 w-full object-cover"
              src={img2}
              alt=""
            />
            <div className="p-5 flex flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Basic Treatments
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Restore your Sm¡le with our basic treatments:
              </p>
              <ul className="text-white">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fillings (tooth-colored)
                </li>
                <li className="flex items-center space-x-2 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Extractions (gentle removal of damaged/infected teeth)
                </li>
                <li className="flex items-center space-x-2 pt-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Restorative Care (crowns, bridges, dentures)
                </li>
              </ul>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-start px-3 py-2 text-sm font-medium text-center border-2 text-white bg-[#005963] rounded-lg"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                </a>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="max-w-sm bg-[#005963] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/3 lg:w-1/4">
            <img
              className="rounded-t-lg h-52 w-full object-cover"
              src={img3}
              alt=""
            />
            <div className="p-5 flex flex-col">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Advanced Cosmetic Dentistry
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Transform your Sm¡le with our advanced cosmetic services:
              </p>
              <ul className="text-white">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Teeth Whitening (professional whitening treatments)
                </li>
                <li className="flex items-center space-x-2 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Veneers (custom layers for enhanced tooth shape/ color)
                </li>
                <li className="flex items-center space-x-2 pt-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Crowns and Bridges (porcelain restorations)
                </li>
              </ul>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-start px-3 py-2 text-sm font-medium text-center border-2 text-white bg-[#005963] rounded-lg"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* volunteer */}
      <section className="mt-8 mb-16">
        <p className="flex justify-center text-black font-bold font-serif text-3xl">
          Why Volunteer with Us?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-8 lg:px-20 xl:px-28 py-8">
          <div className="order-1 lg:order-1">
            <p className="text-lg font-medium justify-center text-justify">
              Joyful Sm¡les Dental Outreaches is seeking passionate and
              experienced volunteers to join our upcoming dental outreach
              program in Aboru, Iyana-Ipaja. As a seasoned dental health
              professional, we invite you to share your expertise and time to
              provide vital dental care services to those in need.
            </p>
            <a href="" className="flex justify-center p-7">
              <button className="bg-[#005963] text-white hover:bg-black rounded-xl py-3 px-8 font-bold">
                Join Us
              </button>
            </a>
          </div>
          <div className="order-0 lg:order-2">
            <img
              src={volunteer}
              className="sm:h-3/4 md:h-3/4 lg:h-full px-8 max-w-full"
              alt="volunteer"
            />
          </div>
        </div>
      </section>
      {/* book appointment */}
      <div className="bg-[#005963] py-16 px-4 sm:px-6 lg:px-8 mb-20">
        <p className="flex justify-center text-center text-white font-bold font-serif text-2xl mt-8">
          Make your dream Sm¡le a reality!
        </p>
        <h2 className="flex justify-center text-white text-xs md:text-lg font-normal italic font-serif pt-4 break-words text-center">
          Call us or book your appointment today
        </h2>
        <a href="" className="flex justify-center p-7">
          <button className="bg-[#005963] text-white border-white border shadow-xl hover:bg-black rounded-xl py-3 px-8 font-bold">
            Register
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
