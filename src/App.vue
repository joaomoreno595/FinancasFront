<template>
  <div id="app">
    <navbar/>
    <sidebar/>
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Grid from '@/components/Grid.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Sidebar,
    Grid,
    Footer
  }
}
</script>

<style>

</style>
