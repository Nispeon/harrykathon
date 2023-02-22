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
  text-align: center;
  color: #2c3e50;
  background-color: #000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
