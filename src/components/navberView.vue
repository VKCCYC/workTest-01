<template>
  <header>
    <nav class="navbar">
      <!-- 圖片 -->
      <div>
        <RouterLink to="/" @click="closeMenu"> <img style="max-width: 75vw;" src="@/assets/img/231227094120543288.svg" alt="錯誤圖片無法顯示"></RouterLink>
      </div>
      <!-- 導覽列 -->
      <div class="navRight" >
        <div class="navRightImg">
          <span v-for="link in navImgs" :key="link.src">
            <img style="padding: 10px;" :src="link.src" alt="">
          </span>
        </div>
        <div class="navRightLink">
          <div v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to" class="text">{{ link.label }}</RouterLink>
          </div>
        </div>

      </div>
      <!-- 按鈕 -->
      <div >
        <button class="menu-toggle" @click="toggleMenu" v-if="!isMenuOpen">☰</button>
        <!-- 動態綁定 isMenuOpen -->
        <div :class="['nav-links ', { open: isMenuOpen }]">
          <div style="display: flex; justify-content: flex-end;">
            <button class="menu-toggle " @click="toggleMenu" v-if="isMenuOpen"  style="padding-top: 20px; padding-right: 8px;" >X</button>
          </div>
          <RouterLink to="/" @click="closeMenu" > <img style="margin-bottom: 2rem; margin-top: 2rem;" src="@/assets/img/231227094120543288.svg" alt="錯誤圖片無法顯示"></RouterLink>
          <div v-for="link in navLinks" :key="link.to" class="nav-item">
            <RouterLink :to="link.to" class="menuText" @click="closeMenu">{{ link.label }}</RouterLink>
          </div>
          <span v-for="link in navImgs" :key="link.src">
            <img class="menuImg" :src="link.src" alt="">
          </span>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, reactive } from 'vue'

// 定義導航連結資料
const navLinks = reactive([
  { to: '/activityItinerary', label: '活動行程' },
  { to: '/about', label: 'About' },
  { to: '/lanternCeremony', label: '安燈禮斗' },
  { to: '/donateMoney', label: '油箱喜添' },
  { to: '/servicesView', label: '服務項目' },
  { to: '/cultureArt', label: '文化藝術' },
  { to: '/celebrationsView', label: '慶典活動' },
  { to: '/trafficInformation', label: '交通資訊' }
])

const navImgs = reactive([
  { src: 'https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122816/original/231228161345267984.svg' },
  { src: 'https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122816/original/231228161345368076.svg' },
  { src: 'https://www.hsinkangmazu.org.tw/upload_files/web/uploadfile/2023122816/original/231228161345464425.svg' }
])

// 控制導航列的展開與收起
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 新增的關閉菜單函數
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped lang="scss">
$primary-color: rgb(127, 79, 33);
$header-bg-color: #ffe56ed4;
$navbar-bg-color: #f9e08e;
$mobile-nav-bg: #f3f387;
$box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

.navRight {
  max-width: 70vw;
  width: 70%;
}

.navRightLink {
  display: flex;
  justify-content: space-between;
}

.navRightImg {
  display: flex;
  justify-content: end;
}

.text {
  text-decoration: none;
  color: $primary-color;
  font-weight: 600;
  font-size: medium;
  padding: 2px;
}

.menuText {
  text-decoration: none;
  color: $primary-color;
  font-weight: 600;
  font-size: large;
}

.menuImg {
  padding: 16px 8px;
}

header {
  width: 100%;
  background-color: $header-bg-color;
  box-shadow: $box-shadow;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $navbar-bg-color;
  padding: 10px 10px 10px 20px;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  max-height: 0;

  &.open {
    max-height: 100vh;
    background-color: $mobile-nav-bg;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    margin: 0;
    z-index: 1000;
    box-sizing: border-box;
    text-align: center;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &:not(.open) {
    display: none;
  }
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-item {
  padding-top: 1rem;
}

@media (min-width: 881px) {
  .menu-toggle {
    display: none;
  }

  .navRight {
    display: block;
  }
}

@media (max-width: 880px) {
  .menu-toggle {
    display: block;
  }

  .navRight {
    display: none;
  }
}
</style>
