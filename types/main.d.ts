import type {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
