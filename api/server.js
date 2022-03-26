const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const axios = require("axios");
const { User } = require("@auth0/auth0-react");
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-6pfso-t4.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "anr-sub-endpoint",
  issuer: "https://dev-6pfso-t4.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

app.use(jwtCheck);

app.get("/", (req, res) => {
  res.send("hello from index route");
});

app.get("/protected", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-6pfso-t4.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userInfo = response.data;
    res.send(userInfo);
  } catch (error) {
    res.send(error);
  }
});

// Use 404 error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  res.status(status).send(message);
});

app.listen(port, () => console.log(`server on port ${port}`));
