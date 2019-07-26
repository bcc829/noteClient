<template>
  <div> 
    <div>
        <h1>{{postDetail.title}}</h1>
    </div>
    <div>
        {{postDetail.content}}
    </div>
    <div>
        <template v-if="postComments.content.size != 0">
            <p>댓글 목록</p>
            <ul>
                <li v-for="comment in postComments.content" :key="comment.seqId">
                    {{comment.content}}
                     <template v-if="comment.postCommentList.size != 0">
                         <ul>
                            <li v-for="commentComments in comment.postCommentList" :key="commentComments.seqId">
                                {{commentComments.content}}
                            </li>
                         </ul>
                     </template>
                </li>
            </ul>
        </template>
    </div>
    <div>
        <button><router-link :to="{ name: 'Post' }">글 목록으로</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'PostDetail',
  data() {
    return {
      postDetail: '',
      postComments: ''
    }
  },
  created() {
    const postSeqId = this.$route.params.postSeqId
    axios.get(`${this.$store.getters.CONSTANTS.resourceHost}/api/v1/post/${postSeqId}`)
    .then((result)=>{
        this.postDetail = result.data
    })

    axios.get(`${this.$store.getters.CONSTANTS.resourceHost}/api/v1/post/postComments/${postSeqId}`)
    .then((result)=>{
        this.postComments = result.data
    })
  }
  
}
</script>
