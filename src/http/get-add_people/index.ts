import axios from "axios";

import { tables } from "@architect/functions";

type User = {
  id: number;
  name: string;
  email: string;
};

export async function handler(request: any, context: any) {
  const client = await tables();

  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users: User[] = res.data;

  users.map(async (user) => {
    await client.people.put({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    console.log(user)
  });


  return {
    statusCode: 200,
    body: "users added",
  };
}
