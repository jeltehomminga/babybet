import { RemoteMongoClient, UserPasswordAuthProviderClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );

const babies = mongoClient.db("babyBetDb").collection("babies");
const babybets = mongoClient.db("babyBetDb").collection("babybets");
const users = mongoClient.db("babyBetDb").collection("users");

const emailPasswordClient = app.auth.getProviderClient(UserPasswordAuthProviderClient.factory)



export { babies, babybets, users, emailPasswordClient };