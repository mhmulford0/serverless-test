import { tables } from "@architect/functions";

export async function handler(request: any, context: any) {
  const client = await tables();

  let people = await client.people.scan({});
  people = JSON.stringify(people, null, 2);

  return {
    statusCode: 200,
    body: people,
  };
}
