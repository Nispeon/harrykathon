<template>
  <div class="container">
    <div class="menu">
      <nav>
        <router-link to="/board">Play</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  min-height: 100vh;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://www.gazette-du-sorcier.com/wp-content/uploads/2022/07/WBTourLondon-Making-Of-Studio-Tour-serre-botannique-17.jpg');
  padding-top: 50px;
}

.container .menu {
  width: 60%;
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: rgb(235 183 52 / 0.5);
  margin-left: 20%;
  border-radius: 20px;
  border: solid gold;
}

.container .menu nav {
  display: flex;
  flex-direction: column;
}

.container .menu a {
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 2.5rem;
  padding: 5px 0;
}

.container .menu a:hover {

  color: gold;
}

canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
