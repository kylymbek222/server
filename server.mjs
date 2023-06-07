const jsonServer = require("json-server");
const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router

app.use(auth);
app.use(middlewares);
app.use(router);
app.listen(process.env.PORT, () => {
  console.log("JSON Server is running");
});
