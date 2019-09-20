<template>
  <div id="nav" class="nav">
    <nuxt-link class="brand" to="/">Real World Events</nuxt-link>
    <nuxt-link class="nav-item" to="/list">List of events</nuxt-link>
    <nuxt-link class="nav-item" to="/create">Create Events</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.nuxt-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>