<template>
  <div class="log">
    <form id="logForm" @submit.prevent="login">
      <div id= "error" v-if="error!==''">{{ error }}</div>
      <div>
        <label for="email">Emali: </label><br>
        <input class="col-md-2" name="emali" v-model="email" />
      </div>
      <div>
        <label for="passpord">Password: </label><br>
        <input class="col-md-2" name="password" type="password" v-model="password" />
      </div>
      <input class="loginBtn btn" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
        login(){
            this.$router.push('homePage')
        }
        }
    
}
</script>


<style lang="scss">
  .log{
    background-color: aqua;
  }
</style>
