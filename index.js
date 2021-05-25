const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')

var app = express();
app.use(cors());
app.options('*', cors());

// create application/json parser
var jsonParser = bodyParser.json()

app.listen(5000, () => {
    console.log("Server running on port 3000");
});

app.post('/otptokens/deliverables', jsonParser, function (req, res) {
    switch (req.body.status) {
        case 202:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "efefdca0-3f6e-40cb-b6b7-ff5c76aa1f29"
            })
            break;
        case 400:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "400",
                  "errorCode": "API-OTPTOKENS-400",
                  "message": "Bad Request",
                  "detailedMessage": "Bad Request",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 401:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "401",
                  "errorCode": "API-OTPTOKENS-401",
                  "message": "Unauthorized",
                  "detailedMessage": "Unauthorized",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 403:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "403",
                  "errorCode": "API-OTPTOKENS-403",
                  "message": "Forbidden",
                  "detailedMessage": "Client authorization failed.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 404:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "404",
                  "errorCode": "API-OTPTOKENS-404",
                  "message": "Not found",
                  "detailedMessage": "Resource not found.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 405:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "405",
                  "errorCode": "API-OTPTOKENS-405",
                  "message": "Method Not Allowed",
                  "detailedMessage": "Unavailable HTTP method.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 406:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "406",
                  "errorCode": "API-OTPTOKENS-406",
                  "message": "Request Not Acceptable",
                  "detailedMessage": "Requested content type not acceptable.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 422:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "422",
                  "errorCode": "API-OTPTOKENS-001",
                  "message": "Unprocessable Entity.",
                  "detailedMessage": "Error trying to send SMS.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 429:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "429",
                  "errorCode": "API-OTPTOKENS-429",
                  "message": "Too Many Requests",
                  "detailedMessage": "The maximum request limit for this MSISDN has been exceeded.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        case 451:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "451",
                  "errorCode": "API-OTPTOKENS-451",
                  "message": "Unavailable For Legal Reasons",
                  "detailedMessage": "Unavailable For Legal Reasons.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
            })
            break;
        default:
            res.status(202).send({
                "apiVersion": "1;2021-03-01",
                "transactionId": "1ca74fe9-aa41-424e-87cb-2d79b27c3264",
                "error": {
                  "httpCode": "503",
                  "errorCode": "API-OTPTOKENS-503",
                  "message": "Service Unavailable",
                  "detailedMessage": "Service Unavailable.",
                  "link": {
                    "rel": "related",
                    "href": "https://api.claro.com.br/docs"
                  }
                }
              })
            break;
    }
})