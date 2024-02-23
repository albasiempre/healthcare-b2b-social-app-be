// console.log("nodejs")
const express = require("express");
const app = express();
const useRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");
const mongoose = require("mongoose");
// require("dotenv").config();

// reactのルーティングとの調整
const PORT = 5000;

// NodeとDBの接続作業

mongoose
.connect("mongodb+srv://albasiempre:Akihisa5931@social-media-mock.7d00tfp.mongodb.net/social-media-mock?retryWrites=true&w=majority")
.then( () => {
  console.log("DBと接続しました");
})
  .catch( (err) => {
    console.log("DBと接続していません");

});


// ミドルウェア
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use("/api/users/",useRoute)
app.use("/api/auth/",authRoute)
app.use("/api/posts/",postRoute)
app.use("/api/upload/",uploadRoute)

app.get("/", (req, res) => {
  res.send("hello postman");

})

// app.get("/users", (req, res) => {
//   res.send("hello users");

// })


app.listen(PORT, () => console.log("サーバーが起動しました"));
