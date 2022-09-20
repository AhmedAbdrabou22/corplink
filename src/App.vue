<template>
  <navbarcomponent/>
  <router-view/>
</template>


<script>
  import navbarcomponent from '@/components/navbarcomponent.vue'
  export default{
    data(){
      return{

      }
    },
    components:{navbarcomponent}
  }
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  color: #6c757d;
  font-family: Arial, Helvetica, sans-serif;
}

nav a.router-link-exact-active {
  color: #2c3038;
}
</style>
