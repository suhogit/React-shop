const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
   console.log('listening on 8080')
});

app.use(express.static(path.join(__dirname, 'test-project/build')));  //html,css,jascript파일들 담긴 곳 명시 해줘야함

app.get('/', function(요청,응답) {
    응답.sendFile( path.join(__dirname, 'test-project/build/index.html'));
});

app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
  }); // 리액트 프로젝트 내에서 라우팅하려면 서버에 이런 기능 필요 * 은 모든글자임
