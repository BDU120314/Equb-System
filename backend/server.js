
require("dotenv").config();
const app = require(".");


// // CRUD endpoints for signup user
// app.get("/User", async (req, res) => {
//   const accounts = await User.find();
//   res.json(accounts);
// });

// app.get("/User/:id", async (req, res) => {
//   const account = await User.findById(req.params.id);
//   res.json(account);
// });

// app.post("/User", async (req, res) => {
//   const account = new User(req.body);
//   await account.save();
//   res.json(account);
// });

// app.put("/User/:id", async (req, res) => {
//   const account = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(account);
// });

// app.delete("/User/:id", async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: "Account deleted successfully." });
// });

// app.delete('/gebre/:id',(req,res)=>{
//   res.send('successfully deleted')
// })
// app.patch('/:id',(req,res)=>{
//  res.send('correctly updated')
// })



app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = () => {
  const client = new twilio(accountSid, authToken);

  return client.messages
    .create({
      body: "hey this is test message",
      from: "+13194585993",
      to: process.env.PHONE_NUMBER,
    })
    .then((messages) => {
      console.log(messages);
    })

    .catch((err) => {
      console.log(err);
    });
};
//sendSms();

app.listen(port, () => {

  console.log(`server is running on port : ${port}`);
});

module.exports = app;
