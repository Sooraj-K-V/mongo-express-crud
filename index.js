// index.js
import express from "express";
import connect from "./db.js";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.routes.js"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const startServer = async () => {
  const connected = await connect();

  if (connected) {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } else {
    console.log("Server not started due to DB connection failure");
  }
};

startServer();

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});
