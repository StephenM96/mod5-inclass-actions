const express = require('express')
const userRouter = express.Router()

// http://localhost:3000/users/user1
userRouter.get('/user1', (req,res) => {
    res.send('This is a test for user 1')
})

// http://localhost:3000/users/user2
userRouter.get('/user2', (req,res) => {
    res.send('This is a test for user 2')
})

module.exports = userRouter