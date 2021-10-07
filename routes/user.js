const {Router, application} = require('express');

const router = new Router();

router.get("/login",(req,res)=> {
    res.render('login',{
        pageTitle:'Login User',
    })
})

router.get('/register',(req,res) =>{
    res.render('register',(req,res) => {
        pageTitle:'Register user'
    })
})

module.exports = router;