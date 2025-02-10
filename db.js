// db.js
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:1234@node-api-cluster.hnt3o.mongodb.net/?retryWrites=true&w=majority&appName=Node-API-Cluster"
    );
    console.log("Connected to database");
    return true; // Indicate successful connection
  } catch (error) {
    console.log("Database Connection Error:", error.message);
    return false; // Indicate failure
  }
};

export default connect;
