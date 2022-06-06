const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/Schema");
const mongoose = require("mongoose");

const app = express();

const user = "Anuboost";
const pass = "Iamlong2033";
const db = "HelloWorld";

mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0.dlv9nnw.mongodb.net/${db}?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("Conneted to the database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Now listening the request on port 3000");
});
