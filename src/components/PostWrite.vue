<template>
  <div> 
    <div>
        <span>제목: </span><input v-model='title'>
    </div>
    <div>
        <span>내용: </span><input v-model='content' type="text">
    </div>
    <div>
        <button @click="writePost">쓰기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'PostWrite',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    writePost: function() {
    const url = `${this.$store.getters.CONSTANTS.resourceHost}/api/v1/post`
    const data = {
        title: this.title,
        content: this.content
    }

    axios.post(url, data)
      .then((result)=>{
        const seqId = result.data.seqId
        this.$router.push({name: 'PostDetail', params: { postSeqId: seqId }})
      })

    }
  }  
}
</script>
