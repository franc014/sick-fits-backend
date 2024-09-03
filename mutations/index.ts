import { mergeSchemas } from "@graphql-tools/schema";
import addToCart from "./addToCart";
import checkout from "./checkout";
// make a fake graphql tagged template litteral
const graphql = String.raw;

export const extendGraphqlSchema = (schema) => {
  mergeSchemas({
    schemas: [schema],
    typeDefs: graphql`
      type Mutation {
        addToCart(productId: ID): CartItem
        checkout(token: String!): Order
      }
    `,
    resolvers: {
      Mutation: {
        addToCart,
        checkout,
      },
    },
  });
};
