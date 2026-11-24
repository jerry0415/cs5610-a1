import express from "express";
import cors from "cors";
import Hello from "./Hello";
import Lab5 from "./Lab5/index";
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
