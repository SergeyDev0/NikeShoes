import React from 'react';
import { CartContext } from "../../App"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const ProductSlider = (img, alt) => {
    const { productItem } = React.useContext(CartContext);
    return (
        <div>
            {[productItem].map((item) => {
                return (
                <div className="product-profile product__wrapper-slider">
                    <Swiper className='product-slider'
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    >
                        <SwiperSlide><img className='slide-img' src={item.img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={item.img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={item.img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={item.img} alt={alt} /></SwiperSlide>
                    </Swiper>
                </div>
                )
            })}
        </div>
    )
}

export default ProductSlider;