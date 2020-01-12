import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );

const babies = mongoClient.db("babyBetDb").collection("babies");
const babybets = mongoClient.db("babyBetDb").collection("babybets");

export { babies, babybets };