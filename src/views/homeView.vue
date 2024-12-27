<template>
  <!-- 輪播圖 -->
  <div class="carousel">
    <div class="carousel-container" :style="{ transform: `translateX(-${carouselIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </div>
    </div>
    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === carouselIndex }"
        @click="goToCarouselSlide (index)"
      >
      </span>
    </div>
  </div>

  <!-- 最新消息 -->
  <div class="news">
    <div class="newsLeft">
      <div class="newsCarousel">
        <div class="newsCarousel-container" :style="{ transform: `translateX(-${newsCarouselIndex * 100}%)` }">
          <div class="newsCarousel-item" v-for="(image, index) in newsImages" :key="index">
            <img :src="image" />
          </div>
        </div>
      </div>
      <div class="newsCarousel-controls">
        <button @click="prevNewsImage" class="material-icons">
          <span style="left: 0.3rem; position: relative;">arrow_back_ios</span>
        </button>
        <button @click="nextNewsImage" class="material-icons">
          <span style="left: 0.1rem; position: relative;">arrow_forward_ios</span>
        </button>
      </div>
    </div>
    <div class="newsRight">
      <img src="@/assets/img/231229110844220667.svg">
    </div>
  </div>

  <!-- 媽祖文化節 -->
  <div class="celebrations">
    <img src="https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122914/original/231229140930733891.png" alt="">
  </div>

  <!-- 活動輪播圖 -->
  <div>
    <h1>活動輪播圖</h1>
  </div>

  <!-- 服務項目 -->
  <div class="services">
    <img src="https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122916/original/231229165738660238.svg" alt="">
  </div>

  <!-- 臉書與地圖 -->
  <div>
    <h1>臉書與地圖</h1>
    <img src="https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2024010413/original/240104130707580399.svg" alt="">
  </div>

  <!-- 頁尾 -->
  <div class="footer">
    <h1>頁尾</h1>
    <img src="@/assets/img/footer01.svg" alt="">
    <div class="footerBox"></div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import 'tailwindcss/tailwind.css'

const images = ref<string[]>([
  new URL('@/assets/img/swiper01.png', import.meta.url).href,
  new URL('@/assets/img/swiper02.png', import.meta.url).href
])
const newsImages = ref<string[]>([
  new URL('@/assets/img/news01.jpg', import.meta.url).href,
  new URL('@/assets/img/news02.jpg', import.meta.url).href,
  new URL('@/assets/img/news03.jpg', import.meta.url).href
])

// 為每個輪播圖創建不同的 currentIndex
const carouselIndex = ref<number>(0)
const newsCarouselIndex = ref<number>(0)

// 自動切換圖片
let autoSlideInterval: number | null = null

const goToCarouselSlide = (index: number) => {
  carouselIndex.value = index
  restartAutoSlide() // 點擊後重啟自動切換計時器
}

const nextCarouselSlide = () => {
  carouselIndex.value = (carouselIndex.value + 1) % images.value.length
}

const prevNewsImage = () => {
  newsCarouselIndex.value = (newsCarouselIndex.value - 1 + newsImages.value.length) % newsImages.value.length
}

const nextNewsImage = () => {
  newsCarouselIndex.value = (newsCarouselIndex.value + 1) % newsImages.value.length
}

// 啟動自動切換
const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextCarouselSlide, 2000) // 每2秒切換下一張
}

// 清除自動切換計時器
const stopAutoSlide = () => {
  if (autoSlideInterval !== null) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// 重啟自動切換計時器
const restartAutoSlide = () => {
  stopAutoSlide() // 停止舊計時器
  startAutoSlide() // 啟動新計時器
}

onMounted(() => {
  startAutoSlide() // 啟動自動切換計時器
})

onUnmounted(() => {
  stopAutoSlide() // 清除計時器
})

</script>

<style scoped lang="scss">
$btn-bg-color: rgba(0, 0, 0, 0.5);
$btn-color: white;
$indicator-bg: rgba(255, 255, 255, 0.5);
$indicator-active-bg: white;
$mobile-nav-bg: #f2f27a;

.carousel {
  position: relative;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;

  &-container {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
  }

  &-item {
    min-width: 100%;
    height: 100%;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: $indicator-bg;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: $indicator-active-bg;
    }
  }
}
.news{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
}
.newsLeft{
  .newsCarousel {
    position: relative;
    height: 40vh;
    width: 40vw;
    overflow: hidden;
    margin: 0 auto;

    &-container {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
      height: 100%;
    }

    &-item {
      min-width: 100%;
      height: 100%;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  .newsIndicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;

    span {
      width: 10px;
      height: 10px;
      background-color: $indicator-bg;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: $indicator-active-bg;
      }
    }
  }

  .newsCarousel-controls {
    position: relative;
    bottom: 20vh;
    display: flex;
    justify-content: space-between;
    button {
      padding: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      background-color: #fff8d9d7;
      color: #7f4f21;
      border-radius: 50%;
      border: 1px solid #7f4f21;
    }
  }
}

.celebrations{
  width: 100%;

  img{
    width: 100%;
  }
}

.services{

  width: 100%;
  background-image: url('https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122917/original/231229170812212402.png');
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top:5rem ;
  img{
    width: 50%;
  }
}

.footer{
  width: 100%;

  img{
    width: 100%;
    margin: 0;
  }

  .footerBox{
    margin: 0;
    margin-top: -1rem;
    height: 30vh;
    background-color:$mobile-nav-bg;
  }
}

// 手機版設定
@media (max-width: 820px) {
  .carousel {
    height: 100vh;
  }
  .news{
    display: block;
    margin-top: 2rem;
    .newsCarousel {
    position: relative;
    height: 40vh;
    width: 80vw;
    overflow: hidden;
    margin: 0 auto;
    }
    .newsCarousel-controls {
    justify-content: space-between;
    }
  }
}
</style>
