<template>
  <div> 
    <ul>
        <li v-for="post in posts.content" :key="post.seqId">
            <router-link :to="{ name: 'PostDetail', params: { postSeqId: post.seqId } }">제목: {{post.title}} 조회수: {{post.readCount}}</router-link>
        </li>
    </ul>
    <div>
        <button><router-link :to="{ name: 'PostWrite' }">글쓰기</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'Post',
  data() {
    return {
      posts: ''
    }
  },
  created() {
    axios.get(`${this.$store.getters.CONSTANTS.resourceHost}/api/v1/posts`)
    .then((result)=>{
        this.posts = result.data
    })
  }
  
}
</script>
