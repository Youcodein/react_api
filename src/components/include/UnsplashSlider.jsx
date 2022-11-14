

// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow, Pagination } from "swiper";

// function UnsplashSlider({image}) {
//   return (
//     <li>
//       <a href={`https://unsplash.com/photos/${image.id}`}>
//         <img src={image.urls.regular} alt={image.urls.regular} />
//       </a>
//     </li>
//   );
// }

// const UnsplashSliderTop = ({ images }) => {
//   return (
//     <section className="cont__Unsplash">
//       <div className="container">
//         <div className="Unsplash__inner">
//           <ul>
//           <Swiper
//               effect={"coverflow"}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={"auto"}
//               coverflowEffect={{
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,


//                 slideShadows: true,
//               }}
//               pagination={true}
//               modules={[EffectCoverflow, Pagination]}
//               className="mySwiper"
//             >
//             {images.lists.map((image, index) =>
//               index < 10 ? (
//                 <SwiperSlide key={index}>
//                 <UnsplashSlider key={index} image={image} />
//                 </SwiperSlide>
//               ) : null
//             )}
//             </Swiper>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UnsplashSliderTop;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

function UnsplashRan({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.regular} alt={random.urls.alt_description} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <section className="cont__unsplash__slider">
      <div className="container">
        <div className="unsplash__inner__slider">
          <h2>Unsplash Random</h2>
          <ul>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;