import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductSlider = (img, alt) => {
    return (
        <div className="product-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} 
            >
                <SwiperSlide><img className='slide-img' src={img} alt={alt} /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={img} alt={alt} /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={img} alt={alt} /></SwiperSlide>
                <SwiperSlide><img className='slide-img' src={img} alt={alt} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductSlider;