<template>
  <div class="reg">
    <form id="regForm" @submit.prevent="register">
      <div id= "error" v-if="error!==''">{{ error }}</div>
      <div>
        <label for="email">Emali: </label><br>
        <input class="col-md-2" name="emali" v-model="email" />
      </div>
      <div>
        <label for="passpord">Password: </label><br>
        <input class="col-md-2" name="password" type="password" v-model="password" />
      </div>
      <div>
        <label for="passpord">Repeat Password: </label><br>
        <input class="col-md-2" name="password_rept" type="password" v-model="password_rept" />
      </div>
      <input class="loginBtn btn" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      password_rept: "",
      error: "",
    };
  },
  methods: {
      validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
      register(){
            if(this.password !== this.password_rept){
                this.error = "Passwords do not match"
            }
            else if(! this.validateEmail(this.email)){
                this.error = "Not valid email"
            }
            else{
                this.$router.push('homePage')
            }
      }
    }
    
}
</script>


<style lang="scss">
</style>
