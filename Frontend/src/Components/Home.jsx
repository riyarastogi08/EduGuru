import React from 'react'

const Home = () => {
  return (
    <>
  {/* Required Meta Tags Always Come First */}
  <meta charSet="utf-8" />
  <meta
    name="robots"
    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <link rel="canonical" href="https://preline.co/" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta
    name="description"
    content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
  />
  <meta name="twitter:site" content="@preline" />
  <meta name="twitter:creator" content="@preline" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS"
  />
  <meta
    name="twitter:description"
    content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
  />
  <meta
    name="twitter:image"
    content="https://preline.co/assets/img/og-image.png"
  />
  <meta property="og:url" content="https://preline.co/" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Preline" />
  <meta
    property="og:title"
    content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS"
  />
  <meta
    property="og:description"
    content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences."
  />
  <meta
    property="og:image"
    content="https://preline.co/assets/img/og-image.png"
  />
  {/* Title */}
  <title>
    Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with
    Tailwind CSS
  </title>
  {/* Favicon */}
  <link rel="shortcut icon" href="https://preline.co/favicon.ico" />
  {/* Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Theme Check and Update */}
  {/* CSS HS */}
  <link rel="stylesheet" href="https://preline.co/assets/css/main.min.css" />
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
    
  </header>
  {/* ========== END HEADER ========== */}
  {/* ========== MAIN CONTENT ========== */}
  <main id="content">
    {/* Slider */}
    <div className="px-4 lg:px-6 lg:px-8 ">
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* Item */}
            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D')]">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Nike React</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Rewriting sport's playbook for billions of athletes
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('data:image/jpeg;base64,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')]">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">CoolApps</span>
                  <span className="block text-white text-xl md:text-3xl">
                    From mobile apps to gaming consoles
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Grumpy</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Bringing Art to everything
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Read Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Item */}
          </div>
        </div>
        {/* Arrows */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        {/* End Arrows */}
      </div>
    </div>
    {/* End Slider */}
    {/* Clients */}
    <div className="px-4 lg:px-6 lg:px-8">
      <div className="relative py-6 md:py-10 overflow-hidden border-b border-gray-200 dark:border-neutral-700 before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:top-0 after:end-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-neutral-900 dark:after:from-neutral-900">
        <div className="flex justify-between items-center gap-x-4">
          <svg
            className="w-14 md:w-20 h-auto text-black mx-auto dark:text-white"
            enableBackground="new 0 0 2499 614"
            viewBox="0 0 2499 614"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="w-14 md:w-20 h-auto text-black mx-auto dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
            width={2500}
            height={607}
          >
            <path
              d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="w-14 md:w-20 h-auto text-black mx-auto dark:text-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2428 1002"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
              fill="currentColor"
            />
          </svg>
         
         
        </div>
      </div>
    </div>
    {/* End Clients */}
    {/* Works */}
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
          Schools
        </h1>
      </div>
      {/* Card Grid */}
      <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Card */}
        <a className="group block" href="#">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      {/* End Card Grid */}
      <div className="mt-10 lg:mt-20 text-center">
        <a
          className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
          href="#"
        >
          View all Work
        </a>
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
  </main>
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
</>

  )
}

export default Home