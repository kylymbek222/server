const jsonServer = require("json-server");
const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });
const domainList = ["http://localhost:3030"];

const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(auth);
app.use(middlewares);
app.use(router);
app.listen(3000);
