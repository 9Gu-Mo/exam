<template>
    <div class="view">
        <div class="top">
            <div class="top_left">
                <div class="banner">
                    <swiper
                        :slides-per-view="1"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide><p>Banner 1</p></swiper-slide>
                        <swiper-slide><p>Banner 2</p></swiper-slide>
                        <swiper-slide><p>Banner 3</p></swiper-slide>
                    </swiper>
                </div>
                <div class="notice">
                    <ul>
                        <li @click="popOpen = true"><a href="#">공지사항1</a></li>
                        <li><a href="#">공지사항2</a></li>
                        <li><a href="#">공지사항3</a></li>
                        <li><a href="#">공지사항4</a></li>
                    </ul>
                </div>
            </div>
            <div class="top_right">
                <div class="calendar">
                    <!-- 컴포넌트 -->
                    <Calendar title-position="left" ref="calendar" :min-date="new Date()" />

                    <!-- v-slot을 사용한 컴포넌트 -->
                    <!-- <Calendar title-position="left" ref="calendar" :min-date="new Date()">
                        <template #footer>
                            <div class="w-full px-4 pb-3">
                                <button class="text-white font-bold px-3 py-1 rounded-md btn-today" @click="moveToday">Today</button> 
                            </div>
                            <div class="bot-section">
                                <p>해당 날짜 교육 및 컨설팅 신청</p>
                            </div>
                        </template>
                    </Calendar> -->
                </div>
            </div>
        </div>
        <div class="bot">
            <!-- <ul>
                <li>컨설팅1</li>
                <li>컨설팅2</li>
                <li>컨설팅3</li>
            </ul> -->

            <!-- v-for로 이미지 출력 시 -->
            <ul>
                <li v-for="(el, index) in products" :key="index">
                    <img :src="el.img" alt="img1">
                </li>
            </ul>
        </div>
    </div>
    <ModalPop @modalClose="popOpen=false" v-if="popOpen" />
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css'
import { ref } from 'vue';
import ModalPop from "@/components/ModalPop.vue";

const calendar = ref(null);
function moveToday() {
    calendar.value.move(new Date());
}

export default {
    components: {
        Swiper,
        SwiperSlide,
        Calendar,
        DatePicker,
        ModalPop
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        }
    },
    data() {
        return {
            popOpen : false,
            date: new Date(),
            products: [
                {
                    // img: ("@/assets/images/img1.png")
                    img: require("@/assets/images/img1.png")
                },
                {
                    // img: ("@/assets/images/img2.png")
                    img: require("@/assets/images/img2.png")
                },
                {
                    // img: ("@/assets/images/img3.png")
                    img: require("@/assets/images/img3.png")
                },
            ]
        }
    }
}
</script>

<style>

</style>