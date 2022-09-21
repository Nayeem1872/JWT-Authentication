const express=  require('express');
const app= express();
const jwt = require("jsonwebtoken")
app.use(express.json())
// app.listen(5000,()=> console.log("backend is running"));
const users = [
    {
        id:"1",
        username:"nayeem",
        password:"nayeem",
        isAdmin:true
    },
    {
        id:"2",
        username:"nayeem111",
        password:"nayeem111",
        isAdmin:false
    },
];

app.post("/api/login",(req,res)=>{
    const{ username, password } =req.body; 
    // res.json("worked!")
    const user = users.find((u)=>{
        return u.username === username && u.password === password;
    });
    if(user){
        // res.json(user)
        const accessToken = jwt.sign({id:user.id, isAdmin:user.isAdmin},"myKey")
        res.json({
            username:user.username,
            isAdmin:user.isAdmin,
            accessToken,
        });

    }else{
        res.status(400).json("username or password incorrect!")
    }
});

const verify = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token
    }
}



app.listen(5000,()=>{
    console.log('server running');
})