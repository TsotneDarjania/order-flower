import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("order-flavor");

const promise = account.create("[USER_ID]", "email@example.com", "password");

promise.then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);
