<template>
  <div id="app">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <router-link to="/about">Enfance</router-link>
    <router-link to="/galerie">Galerie</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
