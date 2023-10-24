import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '83da2426eeaf7f8840817eda0ece9f5b5a232c7f', queries });
export default client;
  