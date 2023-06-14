const express = require("express");
require("dotenv").config();
const path = require("path");
const logInRouter = require("./Routes/logInRoute");
const signUpRouter = require("./Routes/signUpRoute");
const equbUserRoute = require("./Routes/equbUserRoute");
const equbGroupRouter = require("./Routes/equbGroupRoute");
const equbTypeRouter = require("./Routes/equbTypeRoute");
const groupMemberRouter = require("./Routes/groupMemberRoute");

const cors = require("cors");
const app = express();

const connectToDB = require("./config/db_config");

connectToDB();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5003;

app.use("/api/v1/login", logInRouter);
app.use("/api/v1/signup", signUpRouter);
app.use("/api/v1/users", equbUserRoute);
app.use("/api/v1/groups", equbGroupRouter);
app.use("/api/v1/types", equbTypeRouter);
app.use("/api/v1/members", groupMemberRouter);

app.listen(5003, () => {
  console.log(`server is running on port : 5003`);
});

module.exports = app;
<<<<<<< HEAD

// app.use(
//   cors({
//     origin: "http://localhost:5500",
//   })
// );

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Pay Equb Payment" }],
// ]);

// app.use("/api/v1/users", routes);
// app.use("/notifications", notificationRoute);

app.use(
  cors({
    origin: "http://localhost:5500",
  })
);

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         const storeItem = storeItems.get(item.id);
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `${process.env.CLIENT_URL}/success.html`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     });
//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// const twilio = require("twilio");

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const sendSms = () => {
//   const client = new twilio(accountSid, authToken);

//   return client.messages
//     .create({
//       body: "hey this is test message",
//       from: "+13194585993",
//       to: process.env.PHONE_NUMBER,
//     })
//     .then((messages) => {
//       console.log(messages);
//     })

//     .catch((err) => {
//       console.log(err);
//     });
// };
// //sendSms();
=======
>>>>>>> 9737bd2aaec414fe3d7f6cfca0e78e8e120b3867
