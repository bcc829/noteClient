<template>
  <div> 
    <p>hello {{userInfo.nickname}}</p>
    <router-link to="/post">게시판 보기</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'Auth',
  data() {
    return {
      userInfo: ''
    }
  },
  created() {
    let code = this.getParam()['code']
    this.$store.dispatch('LOGIN', {code})
      .then(()=>{
        axios.get(`${this.$store.getters.CONSTANTS.resourceHost}/api/v1/member`)
        .then(result => {
          this.userInfo = result.data
        })
      })
      .catch((err) => {console.log(err)})
  },
  methods: {
    getParam: function() {
      // 파라미터가 담길 배열
      let param = new Array();
  
      // 현재 페이지의 url
      let url = decodeURIComponent(location.href);
      // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
      url = decodeURIComponent(url);
  
      let params;
      // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
      params = url.substring( url.indexOf('?')+1, url.length );
      // 파라미터 구분자("&") 로 분리
      params = params.split("&");
  
      // params 배열을 다시 "=" 구분자로 분리하여 param 배열에 key = value 로 담는다.
      let size = params.length;
      let key, value;
      for(let i=0 ; i < size ; i++) {
          key = params[i].split("=")[0];
          value = params[i].split("=")[1];
  
          param[key] = value;
      }
  
      return param;
    }
  }
}
</script>
