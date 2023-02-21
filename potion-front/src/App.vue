<template>
  <router-view/>
</template>

<style>
@font-face {
    font-family: 'ringbearermedium';
    src: url('~@/assets/font/webfont/ringbearermedium-51mgz-webfont.woff2') format('woff2'),
         url('~@/assets/font/webfont/ringbearermedium-51mgz-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'ringbearermedium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #535bf2;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
