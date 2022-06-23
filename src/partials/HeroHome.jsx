import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/HeroImage.svg';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute inset-y-10 right-0 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="287.269" height="303.467" viewBox="0 0 587.269 553.467">
  <g id="Group_1" data-name="Group 1" transform="translate(-0.333 -0.2)">
    <path id="Path_1" data-name="Path 1" d="M261.673,146.091,118.332,64.922l-.665,74.377,143.341,81.169Z" fill="#fff" opacity="0.2"/>
    <path id="Path_2" data-name="Path 2" d="M154.849,103.609l43.1,24.437-.067,8.922-43.1-24.437Z" fill="#fff" opacity="0.15"/>
    <path id="Path_3" data-name="Path 3" d="M154.716,121.52l91.792,52-.067,9.056-91.792-52Z" fill="#fff" opacity="0.15"/>
    <path id="Path_4" data-name="Path 4" d="M147.2,106.339c-.067,6.126-3.725,9.055-8.248,6.459-4.523-2.531-8.115-9.589-8.049-15.715s3.725-9.056,8.248-6.459C143.674,93.155,147.266,100.213,147.2,106.339Z" fill="#1ba8c7"/>
    <path id="Path_5" data-name="Path 5" d="M587.6,479.29,444.326,398.121l-.665,74.377L587,553.667Z" fill="#fff" opacity="0.2"/>
    <path id="Path_6" data-name="Path 6" d="M480.843,436.808l43.1,24.437-.066,8.922-43.1-24.437Z" fill="#fff" opacity="0.15"/>
    <path id="Path_7" data-name="Path 7" d="M480.71,454.719,572.5,506.724l-.067,9.055-91.791-52Z" fill="#fff" opacity="0.15"/>
    <path id="Path_8" data-name="Path 8" d="M473.194,439.538c-.067,6.126-3.725,9.056-8.248,6.459-4.523-2.531-8.115-9.589-8.049-15.715s3.725-9.056,8.248-6.459C469.668,426.354,473.26,433.412,473.194,439.538Z" fill="#1ba8c7"/>
    <path id="Path_9" data-name="Path 9" d="M420.447,3.13C393.441,8.39,332.712,15.182,306.239.2c.2,106.005,26.141,256.424,110.948,380.475,86.138-27.234,114.408-146.89,116.4-251.63C507.117,114,447.12,38.82,420.447,3.13Z" fill="#fff" opacity="0.1"/>
    <path id="Path_10" data-name="Path 10" d="M387.455,25.1c-27.006,5.26-87.735,12.052-114.208-2.93.2,106.006,26.141,256.425,110.948,380.476C470.333,375.415,498.6,255.692,500.6,151.018,474.125,135.97,414.128,60.793,387.455,25.1Z" fill="#fff" opacity="0.3"/>
    <path id="Path_11" data-name="Path 11" d="M500.665,150.952C474.125,135.9,414.194,60.793,387.521,25.1l-3.259,377.479C470.333,375.415,498.6,255.692,500.665,150.952Z" fill="#fff" opacity="0.4"/>
    <path id="Path_12" data-name="Path 12" d="M243.448,225.4l133.5,73.579.067,245.5-133.5-73.511Z" fill="#fff" opacity="0.1"/>
    <path id="Path_13" data-name="Path 13" d="M260.742,368.889l100.639,55.467.266,88.027L261.008,456.917Z" fill="#fff" opacity="0.2"/>
    <path id="Path_14" data-name="Path 14" d="M262.538,310.293,309.1,335.929v9.056l-46.561-25.636Z" fill="#fff" opacity="0.15"/>
    <path id="Path_15" data-name="Path 15" d="M262.738,328.272,309.3,353.907v9.056l-46.561-25.636Z" fill="#fff" opacity="0.15"/>
    <path id="Path_16" data-name="Path 16" d="M262.671,345.584,351,394.259v9.056L262.671,354.64Z" fill="#fff" opacity="0.15"/>
    <path id="Path_17" data-name="Path 17" d="M243.448,225.4l133.5,73.579.133,42.415L243.515,267.878Z" fill="#fff" opacity="0.2"/>
    <path id="Path_18" data-name="Path 18" d="M276.839,265.281c0,6.392-3.791,9.522-8.448,6.925s-8.514-9.855-8.514-16.314c0-6.392,3.792-9.522,8.448-6.925C273.048,251.564,276.839,258.888,276.839,265.281Z" fill="#fff" opacity="0.2"/>
    <path id="Path_19" data-name="Path 19" d="M322.735,368.09,322.6,331.6l90.528,49.873.133,36.49Z" fill="#1ba8c7"/>
    <path id="Path_20" data-name="Path 20" d="M219.369,214.009,21.418,99.68l.066,103.276L201.942,307.23l17.494,25.9Z" fill="#fff" opacity="0.3"/>
    <path id="Path_21" data-name="Path 21" d="M.333,139.9V111.865l74.7,43.148v28.033Z" fill="#1aa8f8"/>
    <path id="Path_22" data-name="Path 22" d="M168.485,209.748l-43.369-25.037v9.056L168.485,218.8Z" fill="#fff" opacity="0.15"/>
    <path id="Path_23" data-name="Path 23" d="M168.485,227.926,84.874,179.651v9.055l83.611,48.276Z" fill="#fff" opacity="0.15"/>
    <path id="Path_24" data-name="Path 24" d="M168.485,246.037l-101.3-58.529v9.055l101.3,58.53Z" fill="#fff" opacity="0.15"/>
    <path id="Path_25" data-name="Path 25" d="M179.127,225.4c0,8.523,5.055,18.312,11.241,21.907s11.242-.4,11.242-8.922-5.056-18.312-11.242-21.907S179.127,216.872,179.127,225.4Z" fill="#1aa8f8"/>
    <path id="Path_26" data-name="Path 26" d="M155.647,320.414c3.991,2.264,7.184,7.858,7.184,12.452v20.309l13.436,7.724c3.991,2.264,7.184,7.857,7.184,12.452s-3.193,6.459-7.184,4.195l-13.436-7.724v20.309c0,4.594-3.193,6.458-7.184,4.195s-7.184-7.858-7.184-12.452V361.565l-13.436-7.791c-3.991-2.264-7.183-7.857-7.183-12.451s3.192-6.459,7.183-4.2l13.436,7.724V324.543C148.463,320.015,151.656,318.151,155.647,320.414Z" fill="#fff" opacity="0.2"/>
  </g>
</svg>

        {/* <img src={HeroImage} auto alt="name" width={300} height={300} right={50} /> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
          <h1 className="text-5xl md:text-6xl text-center font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500">LayrLabs</span></h1>

            <h1 className="text-lg md:text-lg leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-white">Leveraging trust.</span></h1>
            <h1 className="text-lg md:text-lg leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-white font-extrabold">Enabling open innovation.</span></h1>
            {/* <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Removing the capital ineffiencies of by leveraging trust. Enabling the era of open innovation on blockchains.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div> */}
          </div>


        </div>

      </div>
    </section>
  );
}

export default HeroHome;
