import React from 'react'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';

const Home = () => {
  return (
    <>
<Navbar />
 
  {/* ========== MAIN CONTENT ========== */}
  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/play_therapy_GettyImages512117412_Header-1024x575.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="https://media.istockphoto.com/id/1043178712/photo/children-walking-in-wellies-in-puddle-on-rainy-weather.jpg?s=612x612&w=0&k=20&c=UthFHvhq18Gb0P7kJV6R9tqXQz0N6oWsB_acP5S_IDY=" alt="" /></SwiperSlide>
      </Swiper>

    {/* Works */}
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-blue-900 text-center mx-auto">
        <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
          Playways
        </h1>
      </div>
      {/* Card Grid */}
      <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12  h-full overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 h-4/5 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://5.imimg.com/data5/WV/BK/JH/ANDROID-7759758/product-jpeg.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-blue-900 before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-blue-700 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              TOP Playways
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              It is an educational approach that emphasizes learning through play, exploration and hand on experiences. 
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Guidelines
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Yoga
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105  transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://www.playwaysmartschool.in/wp-content/uploads/2023/03/52.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Nike React
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Rewriting sport's playbook for billions of athletes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        
      </div>
      <div className="mb-6 sm:mb-10 max-w-2xl mb-24 text-center mx-auto">
        <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
         Schools
        </h1>
      </div>
      {/* Card Grid */}
      <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12  h-13/4 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              eYoga
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              A revamped and dynamic approach to yoga analytics
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Guidelines
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Yoga
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105  transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://www.ecolemondiale.org/public/img/banner1.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Nike React
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Rewriting sport's playbook for billions of athletes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        
      </div>
      <div className="mb-24 sm:mb-10 max-w-2xl text-center mx-auto">
        <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
          Colleges
        </h1>
      </div>
      {/* Card Grid */}
      <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12  h-13/4 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 h-3/4 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              eYoga
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              A revamped and dynamic approach to yoga analytics
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Discovery
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Guidelines
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Yoga
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105  transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://images.shiksha.com/mediadata/images/articles/1693247327php9Ixvyk.jpeg"
              alt="Image Description"
            />
          </div>
          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
              Nike React
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Rewriting sport's playbook for billions of athletes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Brand Strategy
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Visual Identity
              </span>
            </div>
          </div>
        </a>
        {/* End Card */}
        
      </div>
 
    </div>
    {/* End Works */}
    {/* Testimonials */}
    <div className="bg-black">
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <blockquote className="max-w-4xl mx-auto">
          <p className="mb-6 md:text-lg">
            <span className="font-semibold text-lime-400">About</span>{" "}
            <span className="text-neutral-500">Top-5-EduGuru</span>
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal text-white">
            EduGuru is a popular listing website in Lucknow that provides information about playways, schools and colleges. It offers detailed profiles of institutes, along with review, ratings and insights to help students make informed decisions about their Education.
          </p>
    
        </blockquote>
      </div>
    </div>
    {/* End Testimonials */}
    {/* Contact */}
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
          Contacts
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image Description"
          />
        </div>
        {/* End Col */}
        <div className="space-y-8 lg:space-y-16">
          <div>
            <h3 className="mb-5 font-semibold text-black dark:text-white">
              Our address
            </h3>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Hazratganj, Lucknow.
                  </p>
                  <address className="mt-1 text-black not-italic dark:text-white">
                    Lower Ground Floor, Raja Ram Kumar Plaza, opp. Tez Kumar Plaza 
                    
                  </address>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
          <div>
            <h3 className="mb-5 font-semibold text-black dark:text-white">
              Our contacts
            </h3>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Email us
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1  hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                      href="mailto:example@site.so"
                    >
                      topeduguru@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Call us
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1  hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                      href="mailto:example@site.so"
                    >
                      +91 8957236247
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
    {/* End Contact */}

  {/* ========== END MAIN CONTENT ========== */}
  
  <div className="fixed bottom-2 sm:bottom-4 end-2 sm:end-4 ms-2 z-[70] bg-neutral-900 border border-neutral-800 rounded-lg dark:bg-neutral-800">
    {/* Button Group */}
    <div className="flex items-center gap-px">
      <p className="inline-flex gap-x-2 text-xs text-white py-1 px-2 relative before:absolute before:top-1/2 before:-start-0.5 before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        This is the Preline UI template preview mode.
      </p>
      {/* Templates Dropdown */}
      <div className="hs-dropdown relative inline-flex [--strategy:absolute] [--placement:bottom-right] before:absolute before:top-1/2 before:-start-px before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
        <button
          type="button"
          className="hs-dropdown-toggle py-2.5 sm:py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-xs rounded-e-lg border border-transparent bg-neutral-900 text-white hover:bg-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          Templates
          <svg
            className="hs-dropdown-open:rotate-180 flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        {/* Dropdown */}
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 border border-neutral-800 bg-neutral-900 rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
          <div className="p-1 space-y-0.5">
            <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 dark:text-neutral-400">
              Main Pages
            </span>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../index.html"
            >
              Preline UI
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../docs/index.html"
            >
              Components (570+)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../examples.html"
            >
              Examples (185+)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../templates.html"
            >
              Templates (2)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../plugins.html"
            >
              Plugins (19)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../figma.html"
            >
              Figma
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
              href="../../pro/index.html"
            >
              Preline Pro
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <div className="border-b border-gray-800 dark:border-neutral-700 pt-1" />
            <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 dark:text-neutral-400">
              Template Previews
            </span>
            <div className="space-y-0.5 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../templates/agency/index.html"
              >
                Agency
                <svg
                  className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active-link bg-neutral-800 dark:bg-neutral-700"
                href="../../templates/creative-agency/index.html"
              >
                Creative Agency
                <svg
                  className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* End Dropdown */}
      </div>
      {/* End Templates Dropdown */}
    </div>
    {/* End Button Group */}
  </div>
  {/* JS Implementing Plugins */}
  {/* JS PLUGINS */}
  {/* Required plugins */}
  {/* JS THIRD PARTY PLUGINS */}
  {/* Google Analytics. Global site tag (gtag.js) */}

  <Footer /> 
</>

  )
}

export default Home