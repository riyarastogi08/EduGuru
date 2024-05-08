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
        <SwiperSlide><img className='' src="https://media.istockphoto.com/id/849461730/photo/happy-child-girl-with-umbrella-and-paper-boat-in-puddle-in-autumn-on-nature.jpg?s=612x612&w=0&k=20&c=5xzi57HJvaIQTvhrFv-ZuSEAScdKLaNhdMpMXns5Zuc=" alt="" /></SwiperSlide>
<SwiperSlide><img src="https://media.istockphoto.com/id/1043178712/photo/children-walking-in-wellies-in-puddle-on-rainy-weather.jpg?s=612x612&w=0&k=20&c=UthFHvhq18Gb0P7kJV6R9tqXQz0N6oWsB_acP5S_IDY=" alt="" /></SwiperSlide>
      </Swiper>

    {/* Works */}
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
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
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="data:image/jpeg;base64,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"
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
      <div className="mb-6 sm:mb-10 max-w-2xl  text-center mx-auto">
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
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
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
            EduGuru offers a vast catalog of playway, schools and colleges covering a wide range of courses.
          </p>
          <footer className="mt-6 md:mt-10">
            <div className="border-neutral-700">
              <button
                type="button"
                className="group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                </span>
                Watch the Video
              </button>
            </div>
          </footer>
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
                    Hazratganj
                  </p>
                  <address className="mt-1 text-black not-italic dark:text-white">
                    300 Bath Street, Tay House
                    <br />
                    Glasgow G2 4JR
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
                      className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
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
                      className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
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
  {/* ========== FOOTER ========== */}
  <footer className="mt-auto border-t md:border-t-0 border-gray-200 dark:border-neutral-700">
    <div className="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div className="text-center md:text-start">
          {/* Logo */}
          <svg
            className="w-24 h-auto mx-auto md:mx-0"
            width={116}
            height={32}
            viewBox="0 0 116 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
              className="fill-black dark:fill-white"
              fill="currentColor"
            />
            <path
              d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
              className="stroke-black dark:stroke-white"
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
              className="stroke-black dark:stroke-white"
              stroke="currentColor"
              strokeWidth={2}
            />
            <circle
              cx={13}
              cy="16.5214"
              r={5}
              className="fill-black dark:fill-white"
              fill="currentColor"
            />
          </svg>
          {/* End Logo */}
        </div>
        {/* End Col */}
        
        {/* End Col */}
        {/* Social Brands */}
        <div className="text-center md:text-end space-x-2">
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </a>
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
            </svg>
          </a>
        </div>
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
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