<template>
  <div class="container">
    <div class="menu">
      <nav>
        <router-link to="/create">Create game</router-link>
        <router-link to="/join">Join</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
  }

  .container .menu {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container .menu nav {
    display: flex;
    flex-direction: column;
  }

  .container .menu a {
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 2.5rem;
    padding: 5px 0;
  }
</style>
