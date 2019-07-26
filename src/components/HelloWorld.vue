<template>
  <div>
    <p>로그인 페이지</p>
    <a v-bind:href='loginUrl'>login</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loginUrl: ''
    }
  },
  created(){
    this.loginUrl = `${this.$store.getters.CONSTANTS.authHost}/oauth/authorize?client_id=${this.$store.getters.CONSTANTS.clientId}&redirect_uri=${this.$store.getters.CONSTANTS.redirectUri}&response_type=code&scope=read`
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
