const express = require("express");
const app = express();
const port = 3001;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const testRoutes = require('./routes/myTestRoutes')
const userRoutes1 = require('./routes/userRoutes1')
const calculatorRouter = require('./routes/calculatorRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// http://localhost:3000
app.use('/', express.static('public'))

app.use('/mytest', testRoutes)

app.use('/users1', userRoutes1) // testing with a student in a breakoutroom

app.use('/calculator', calculatorRouter)

app.use('/users', userRoutes) // what was done in class

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
