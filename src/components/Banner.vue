<template>
  <div style="overflow: hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      v-bind:navigation="navigation"
      :space-between="50"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><div class="swiper-item">slide 1</div></swiper-slide>
      <swiper-slide><div class="swiper-item">slide 1</div></swiper-slide>
      <swiper-slide><div class="swiper-item">slide 1</div></swiper-slide>

      <div>
        <button class="my-next swiper-right">next</button>
        <button class="my-prev swiper-left">prev</button>
      </div>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const navigation = {
      nextEl: ".my-next",
      prevEl: ".my-prev",
    };
    return {
      onSwiper,
      onSlideChange,
      navigation,
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.swiper-right {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
}

.swiper-left {
  right: 0;
  top: 0;
  position: absolute;
  z-index: 10;
}
</style>
