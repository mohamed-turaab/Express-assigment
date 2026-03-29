import express from "express";

const app = express();
const port = 8000;

let users = [
  { id: 1, name: "Mohamed Ismail Adan", email: "mohamedturaab1991@gmail.com" },
  { id: 2, name: "Aisha Abdulkadir Mohamed", email: "cayuushabdulkadir@gmail.com" },
];

let posts = [
  { id: 1, title: "Mohamed iyo Aisha", content: "Mohamed iyo Aisha waa laba qof oo is jecel oo xiriirkoodu ku dhisan yahay ixtiraam iyo is faham." },
  { id: 2, title: "Xiriirkooda", content: "Jacaylka ka dhexeeya Mohamed iyo Aisha waa mid dagan, qurux badan, isla markaana ay ku jirto kalsooni." },
];

let comments = [
  { id: 1, postId: 1, message: "waxaan idiin lee yahay anigoo Sharafdiin ah isku barakooba  " },
  { id: 2, postId: 2, message: "waxaan idiin lee yahay anigoo tood ah gurigina guri qeyr." },
];

app.get("/", (req, res) => {
  res.send("Hello world, I am Mr Turaab");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send({ message: "User-kaan ma jiro" });
  }

  res.send(user);
});

app.use(express.json());

app.post("/users", (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).send({ message: "Fadlan geli magaca iyo email-ka" });
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);
  res.status(201).send(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).send({ message: "User-kaan ma ahan mid jiro" });
  }

  users[userIndex].name = req.body.name || users[userIndex].name;
  users[userIndex].email = req.body.email || users[userIndex].email;

  res.send(users[userIndex]);
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send({ message: "User-kaan ma ahan mid jiro " });
  }

  users = users.filter((u) => u.id !== userId);
  res.send({ message: "User-kaan waa la delete day " });
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).send({ message: "Post-gaan ma jiro" });
  }

  res.send(post);
});

app.post("/posts", (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).send({ message: "Fadlan geli title iyo content" });
  }

  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(newPost);
  res.status(201).send(newPost);
});

app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).send({ message: "Post-gaan ma jiro" });
  }

  posts[postIndex].title = req.body.title || posts[postIndex].title;
  posts[postIndex].content = req.body.content || posts[postIndex].content;

  res.send(posts[postIndex]);
});

app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).send({ message: "Post-ka ma jiro" });
  }

  posts = posts.filter((p) => p.id !== postId);
  res.send({ message: "Post-gaan waa la delete gareeyay " });
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return res.status(404).send({ message: "comment-kuma jiro" });
  }

  res.send(comment);
});

app.post("/comments", (req, res) => {
  if (!req.body.postId || !req.body.message) {
    return res.status(400).send({ message: "Fadlan geli postId iyo message" });
  }

  const newComment = {
    id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 1,
    postId: req.body.postId,
    message: req.body.message,
  };

  comments.push(newComment);
  res.status(201).send(newComment);
});

app.put("/comments/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const commentIndex = comments.findIndex((c) => c.id === commentId);

  if (commentIndex === -1) {
    return res.status(404).send({ message: "Comment-kuma jiro" });
  }

  comments[commentIndex].postId = req.body.postId || comments[commentIndex].postId;
  comments[commentIndex].message = req.body.message || comments[commentIndex].message;

  res.send(comments[commentIndex]);
});

app.delete("/comments/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return res.status(404).send({ message: "Comment-kuma jiro" });
  }

  comments = comments.filter((c) => c.id !== commentId);
  res.send({ message: "Comment-ka waa la delete-day " });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
