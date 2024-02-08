import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  storageId:'655b4a73e4fc13b8682a',
  databaseId:'655b4ae65efc858cdb4b',
  savesCollectionId:'655b4cc08b77299607b3',
  userCollectionId:'655b4ca090fc3fc7d88d',
  postCollectionId:'655b4c6a3a31d1de9aea'
}

const appwriteUrl = import.meta.env.VITE_APPWRITE_URL;

export const client = new Client();

client.setProject('655894936a886e6a0cc7');
client.setEndpoint('https://cloud.appwrite.io/v1');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);



