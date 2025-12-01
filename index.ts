import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, {Request, Response} from "express";
const server = express();
const port = 3040;
server.get("/hello", function (req, res) {
const response = routeHello(req, res);
res.send(response);
});
server.get("/api/names", async function (req, res) {
let response;
try {
response = await routeAPINames(req, res);
} catch (err) {
console.log(err);
}
res.send(response);
});
server.get("/apt/weather/:zipcode", function(req:Request, res:Response);void{
const response = routeWeather(zipcode:req.params.zipcode});
res.send(response);
});
server.listen(port, function () {
console.log("Listening on " + port);
});
