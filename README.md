# **HNG Stage 1 Backend API**

This is a simple public API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

---

## 🚀 Features

- Takes a number value params.
- Returns interesting mathematical properties about the number **(IsPrime, isPerferct, isArmstrong)**.
- Returns a fun fact about the number using the **[number](http://numbersapi.com/#42)** api .
- Supports **CORS** for cross-origin requests.

---

## 📌 Live API URL

🔗 **[View Live API](https://hng-backend-stage1-e4la.vercel.app/api/classify-number?number=381)**

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/MakindeTobby/hng-backend-stage1.git
cd hng-backend-stage1
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the API Locally**

```sh
node server.js
```

- The API should now be running at http://localhost:8000

## 📍 Endpoint

- GET /

## 📤 Response Format

- Status Code: **200 OK**
- Content-Type: **application/json**

Example JSON Response Format (200 OK)

```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

Example JSON Response Format (400 Bad Request)

```
{
    "number": "alphabet",
    "error": true
}
```

## 🔗 Example Usage

Using JavaScript (Fetch API):

```
fetch("https://hng-backend-stage1-e4la.vercel.app/api/classify-number?number=381")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

```

## 🛠 Technologies Used

- Node.js
- Express.js
- Vercel (for deployment)

## 📢 Hire Node.js Developers

Looking to hire top Node.js developers?
Check out **HNG Talent Pool:**
🔗 **[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)**

## 🤝 Contributing

Feel free to submit pull requests or issues to improve this API.

## 📄 License

This project is licensed under the MIT License.
