
require("dotenv").config();
const app = require(".");

const port=process.env.PORT || 5001;

mongoose.connect(
  port,
  {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  },
  (err) => {
    if (err) {
      console.log();
    } else {
      console.log("connected to database");
    }
  }
);

//middleware
app.use(cors());

// routes
app.use(express.json());
app.use("/api/v1/users", routes);
app.use("/notifications", notificationRoute);

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

app.listen(5000, () => {
  console.log(`server is running on port : ${port}`);
});

module.exports = app;
