import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { helpers } from "./helpers/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/api/classify-number", async (req, res) => {
  let num = parseInt(req.query.number);

  if (isNaN(num)) {
    return res
      .status(400)
      .json({ number: req.query.number || "alphabet", error: true });
  }

  num = Math.abs(num); // Ensure only positive integers are processed

  let properties = [];
  if (helpers.isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${num}/math`
    );
    res.json({
      number: num,
      is_prime: helpers.isPrime(num),
      is_perfect: helpers.isPerfect(num),
      properties,
      digit_sum: helpers.digitSum(num),
      fun_fact: funFactResponse.data,
    });
  } catch (error) {
    res.json({
      number: num,
      is_prime: helpers.isPrime(num),
      is_perfect: helpers.isPerfect(num),
      properties,
      digit_sum: helpers.digitSum(num),
      fun_fact: "No fun fact found.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
