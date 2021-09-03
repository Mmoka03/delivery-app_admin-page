// express 모듈 호출
const express = require('express');
const app = express();
const menu = require('./routes/menu');
const member = require('./routes/member');

app.use('/menu', menu);
app.use('/member', member);
 
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})