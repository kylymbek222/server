const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(middlewares);
app.use(router);
app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.options("*", cors());
app.listen(3001, () => {
  console.log("JSON Server is running");
});
