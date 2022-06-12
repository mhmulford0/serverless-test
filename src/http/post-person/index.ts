import { tables } from "@architect/functions";
import { LambdaHandler } from "@architect/functions/http";

export const handler: LambdaHandler = async (request, context) => {
  const client = await tables();
  const req = JSON.parse(request.body);

  await client.people.put({
    id: 3,
    name: req.name,
    email: req.email,
  });

  console.log(req)

  return {
    statusCode: 200,
    body: "user added",
  };
};
