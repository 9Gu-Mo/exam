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
                <div class="notice"></div>
            </div>
            <div class="top_right">
                <div class="calendar">
                    <Calendar title-position="left" ref="calendar">
                        <template #footer>
                            <div class="w-full px-4 pb-3">
                                <button class="text-white font-bold px-3 py-1 rounded-md btn-today" @click="moveToday">Today</button>
                            </div>
                        </template>
                    </Calendar>
                </div>
            </div>
        </div>
        <div class="bot">
            
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css'
import { ref } from 'vue';

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
            date: new Date(),
        }
    }
}
</script>

<style>

</style>