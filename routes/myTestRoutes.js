const express = require('express')
const router = express.Router()

// http://localhost:3000/mytest/test
router.get('/test', (req, res) => {
    res.send('This is a test, this is only a test')
})

// http://localhost:3000/mytest/test2
router.get('/test2', (req, res) => {
    res.send('This is another test, and only another test')
})

module.exports = router;