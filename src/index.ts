// index.js
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
// const adminFB = require("./firebaseAdmin");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello from Firebase Cloud Functions!");
});

// // Endpoint to verify Firebase ID token
// app.post("/verify-user", async (req: any, res: any) => {
//   const { idToken } = req.body;

//   try {
//     // Verify the ID token
//     const decodedToken = await adminFB.auth().verifyIdToken(idToken);
//     const uid = decodedToken.uid;
//     console.log("verified: ", uid);
//     // Use the UID to find or create a user in your database
//     res.json({ message: "User verified", uid });
//   } catch (error) {
//     console.error("Error verifying ID token:", error);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

exports.app = functions.https.onRequest(app);
