// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrucel=() =>{

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 
    
      <SwiperSlide> <img src=  'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/social/lina.jpg' clasname="h-40 w-40 object-cover"></img> </SwiperSlide>
      <SwiperSlide> <img src= "https://i.blogs.es/de368e/dota-2-wallpaper/1366_2000.jpg" clasname="h-40 w-40 object-cover"></img>  </SwiperSlide>
      <SwiperSlide> <img src= "https://yt3.googleusercontent.com/ytc/AIdro_lWrxG_fpbnTzQokp3OGudXc5dgZtHPFYm5LyC6kWRZT5g=s900-c-k-c0x00ffffff-no-rj" clasname="h-40 w-40 object-cover"></img> </SwiperSlide>
      <SwiperSlide> <img src= "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/social/lina.jpg" clasname="h-40 w-40 object-cover"></img>  </SwiperSlide>
    </Swiper>
  );
};

export default Carrucel;
