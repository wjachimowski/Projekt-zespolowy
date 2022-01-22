<template>
<div class="all">
  <div id="nav" v-if=" this.$route.path ==='/login' || this.$route.path ==='/register' 
  || this.$route.path === '/'" >
    <router-link to="/register">Registration</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
</div>
</template>

<style lang="scss">

</style>
