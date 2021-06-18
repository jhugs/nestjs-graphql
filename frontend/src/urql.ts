import { createClient } from "urql";

const client = createClient({
    url: "http://localhost:5000/graphql",
});

export default client;
