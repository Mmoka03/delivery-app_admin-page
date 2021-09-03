const express = require('express');
const router = express();
const db = require('../config/db');

// http://localhost:4000/ 으로 접속 시 응답메시지 출력

router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/', (req,res) => {
    db.query('SELECT * FROM app_member', (err, data) => {
        console.log(data);
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})
router.get('/:id', (req,res) => {
    const sql = 'SELECT * FROM app_member WHERE id=?';
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(!err) res.send({ products : data});
        else {
            res.send(err);
            console.log(err);
        }
    })
})
// router.post('/', (req,res) => {
//     const sql = 'INSERT INTO food_menu (id, price, menu_description, menu_name) VALUES (?,?,?,?)';
//     const sub_sql = 'SELECT IFNULL(MAX(id), 0)+1 AS max_id FROM food_menu';
//     db.query(sub_sql, (err, data) => {
//         if(err) {
//             res.send(err); 
//             console.log(err);
//         }
//         const id = data[0].max_id;
//         const { price, menu_description, menu_name } = req.body.data;
//         db.query(sql, [id, price, menu_description, menu_name], (err, data) => {
//             if(err) {
//                 res.send(err);
//                 console.log(err);
//             }
//         })
//     })
// })

module.exports = router;