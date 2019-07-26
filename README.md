개발한 noteAuthorizeServer및 noteServer를 테스트 하기위해

Vue.js를 사용 하여 간단히 만든 클라이언트 입니다


![1](./image/1.PNG)

첫 화면 입니다 

![2](./image/2.PNG)

로그인을 누를시 noteAuthorizeServer로 리다이렉트 됩니다.

![3](./image/3.PNG)

noteAuthorizeServer에서 로그인 성공 시 noteAuthorizeServer에서 다시 noteClient로 리다이렉트됩니다
noteClient로 리다이렉트 되면서 code값을넘겨 주고 받아온 code값으로 access_token을 발급 받습니다.
발급 받은 access_token으로 noteServer에 회원 정보를 요청 하여 받아 옵니다.

![4](./image/4.PNG)

게시판으로 이동시 noteServer에서 게시글 목록을 가져와 보여줍니다(서버에서는 페이징 처리가 되어있으나 아직 클라이언트에서 페이징 처리 구현이 안되어 있습니다)

![5](./image/5.PNG)

게시글 클릭시 noteServer에서 해당 게시글의 내용과 댓글을 가져와 보여줍니다.

![6](./image/6.PNG)

글쓰기 클릭시 게시글을 작성 할 수 있습니다

![7](./image/7.PNG)

게시글을 작성시 noteServer에서 해당 게시글을 저장 후 저장한 게시글 내용을 보여 줍니다.

![8](./image/8.PNG)

작성한 게시글이 noteServer에 저장되어 있는 것을 확인 할 수 있습니다.
