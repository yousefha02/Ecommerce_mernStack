import { Container, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Product from './Product';

export default function NewArrival() {
    const products = ["one","two","Girl","Boy","Old","Baby","Brands","Towel","Baby Ivory Teddy Fleece Bear Snowsuit (Newborn-18mths)","two","Girl","Boy","Old"]
    return (
        <Container sx={{marginTop:"60px",marginBottom:"60px"}}>
            <Typography sx={{fontSize:{sm:"30px",xs:"26px"},fontWeight:"600",textAlign:"center",marginBottom:"20px"}}>New Arrival</Typography>
            <Swiper pagination={{clickable:true}} modules={[Pagination]} 
            className="arrivalSwiper"
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    },
                    768: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    },
                    1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                    },
                }}>
                {
                    products.map((item,index)=>
                    {
                        return(
                            <SwiperSlide key={index+'a2'}>
                                <Product item={item}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Container>
    )
}
