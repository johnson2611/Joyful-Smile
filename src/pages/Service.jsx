import React from "react";
import service from "../assets/service.jpeg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.png";

function Service() {
  return (
    <div>
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[90vh] bg-cover bg-center">
        <img
          src={service}
          alt="service"
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
      {/* first service */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-2 md:mt-2 mb-2 pt-2 md:pt-20 pb-8">
        <div className="mt-4 md:mt-0 text-start justify-start text-sm md:text-start px-9 md:px-12 order-1 lg:order-1">
          <h2 className="font-semibold text-black text-xl md:text-2xl lg:text-3xl">
            Preventive & Educative services
          </h2>
          <p className="mt-4 text-sm text-black md:text-base font-semibold mb-4">
            Protect and empower your smile with our preventive and educative
            services:
          </p>
          <div className="py-2 text-black">
            <ul className="mt-2">
              <li className="flex items-center  space-x-2 mb-3">
                (1)
                Tooth examination and cleanings: Identify potential oral health
                issues before they become major problems, ensuring a healthier
                smile through routine check-ups.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
               (2)
                Oral cancer screenings: Early detection is crucial; our
                screenings help identify abnormal cell growth for timely
                intervention.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (3)
                Gum disease screenings: Catch gum disease early to prevent
                complications, ensuring healthy gums and teeth.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
               (4)
                Fluoride treatments and sealants: Strengthen teeth, prevent
                decay, and safeguard your smile.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (5)
                Personalized oral hygiene advice: Receive tailored guidance on
                maintaining optimal oral health.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (6)
                Dental Hygiene Education: Master proper brushing, flossing, and
                care techniques.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 order-0 lg:order-2">
          <img
            src={img1}
            className="w-full p-4 "
            alt="Doctors"
            style={{ borderRadius: "2rem" }}
          />
        </div>
      </div>

      {/* second service */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-2 md:mt-2 mb-8 pt-2 md:pt-2 pb-8">
        <div className="w-full px-4">
          <img
            src={img2}
            className="w-full p-4 "
            alt="Doctors"
            style={{ borderRadius: "2rem" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-start justify-start text-sm md:text-start px-9 md:px-12">
          <h2 className="font-semibold text-black text-xl md:text-2xl lg:text-3xl">
            Basic Treatments
          </h2>
          <p className="mt-4 text-sm text-black md:text-base font-semibold mb-4">
            Restore your smile with our basic treatments:
          </p>
          <div className="py-2 text-black">
            <ul className="mt-2">
              <li className="flex items-center  space-x-2 mb-3">
               (1)
                Fillings (tooth-colored): Repair cavities, restore tooth
                function, and maintain natural appearance.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
               (2)
                Extractions (gentle removal of damaged/infected teeth): Relieve
                pain, prevent infection, and protect surrounding teeth.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (3)
                Restorative Care (crowns, bridges, dentures): Replace missing
                teeth, restore smiles, and regain confidence.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (4)
                Root Canals (treatment to save infected teeth): Preserve natural
                teeth, alleviate pain, and prevent further complications.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (5)
                Gum Disease Treatment (deep cleanings and medication): Manage
                gum disease, promote healing, and maintain oral health.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* third service */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-2 md:mt-2 mb-2 pt-2 md:pt-2 pb-12">
        <div className="mt-4 md:mt-0 text-start justify-start text-sm md:text-start px-9 md:px-12 order-1 lg:order-1">
          <h2 className="font-semibold text-black text-xl md:text-2xl lg:text-3xl">
            Advanced Cosmetic Dentistry
          </h2>
          <p className="mt-4 text-sm text-black md:text-base font-semibold mb-4">
            Transform your smile with our advanced cosmetic services:
          </p>
          <div className="py-2 text-black">
            <ul className="mt-2">
              <li className="flex items-center  space-x-2 mb-3">
                (1) Teeth Whitening (professional whitening treatments): Achieve
                a brighter, more radiant smile, boosting confidence.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (2) Teeth Gems (durable, sparkly decorations): Add a touch of
                glamour to your smile with our tooth gems, available in various
                designs and colors.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (3) Safe and non-invasive application
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (4) Customizable to fit your personal style
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (5) Long-lasting results with proper care
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (6) Veneers (custom layers for enhanced tooth shape/color):
                Transform your smile, enhancing appearance and self-esteem.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (7) Crowns and Bridges (porcelain restorations): Enjoy
                natural-looking tooth replacements, restoring function and
                aesthetics.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (8) Dental Implants (permanent tooth replacement): Experience
                secure, long-lasting tooth restoration.
              </li>
              <li className="flex items-center  space-x-2 mb-3">
                (9) Smile Makeovers (personalized treatment plans): Customize
                your smile transformation
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 order-0 lg:order-2">
          <img
            src={img3}
            className="w-full p-4 "
            alt="Doctors"
            style={{ borderRadius: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
