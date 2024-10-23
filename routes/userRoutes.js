const express = require("express");
const userRouter = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hisen Loong", country: "SG" },
];

// http://localhost:3000/users/headers
userRouter.get('/headers', (req, res) => {
    console.log(req.headers)

    res.json(req.headers)
})

// http://localhost:300/users/:id <-- dynamic param
userRouter.get("/:id", (req, res) => {
  console.log(req.params);
  console.log(parseInt(req.params.id)); // returns the string as an integer so we can compare against user below

  let userId = parseInt(req.params.id);
  let user = users.find((user) => user.id === userId);
  console.log("User find: ", user);

  user
    ? res.status(200).json({
        result: user,
      })
    : res.status(400).json({
        result: `User ${userId} not found`,
      });
});

// http://localhost:3000/users/ - POST Request
userRouter.post('/', (req, res) => {
    let newUser = req.body; //first update index.js
    console.log('newUser: ', newUser)
    
    if (!newUser.name || !newUser.location) {
        // incorrect user input - don't want to let user know that pw is incorrect
        res.status(400).json({error: 'User must contain name and location'})
        return
    } else if (!newUser.id) {
        newUser.id = users.length + 1
    }

    users.push(newUser)
    res.status(200).json(newUser)
})

module.exports = userRouter;