const mongoose = require('mongoose');

mongoose
   .connect("mongodb://127.0.0.1:27017/Blogger", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
   })
  .then(() => console.log("Connection Successfull... !!"))
  .catch(() => console.log("Error, Connection could not be established"));

const bloggerSchema = new mongoose.Schema({
    title: {type: String, required: true},
    comment: String,
    likes: Number,
    visible: Boolean,
    date: {type: Date, default: Date.now},
  }
);

const Blog = new mongoose.model("posts", bloggerSchema);
const blog1 = new Blog({
    title: "Covid-19 - A threat to the new generation",
    comment: "",
    likes: 28,
    visible: true,
});
const blog2 = new Blog({
    title: "Covid-19 - A threat to the new generation",
    comment: "",
    likes: 28,
    visible: true,
});
const blog3 = new Blog({
    title: "Covid-19 - A threat to the new generation",
    comment: "",
    likes: 28,
    visible: true,
});
const blog4 = new Blog({
    title: "Covid-19 - A threat to the new generation",
    comment: "",
    likes: 28,
    visible: true,
});
Blog.insertMany([blog1,blog2,blog3,blog4])
   .then((doc) => console.log(doc))
   .catch((err) => console.log(err));
