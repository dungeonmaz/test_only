import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type InfoSliderProps = {
  data: Array<DataObject>
}

type DataObject = {
  year: number,
  desc: string
}

const InfoSlider = ({data} : InfoSliderProps) => {
  return (
    <div className='swip-container'>
      <Swiper
      className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        navigation
        pagination={{ clickable: true }}
        freeMode={{enabled:true, sticky:false}}
        style={{height:'100%'}}
        breakpoints = {{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          993: {
            slidesPerView: 3,
            spaceBetween: 80,
          }
        }}
      >
        {data.map((el) => (
          <SwiperSlide key={el.year}>
            <div className='swip'>
              <div className='swip-year'>{el.year}</div>
              <div className='swip-description'>{el.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default InfoSlider