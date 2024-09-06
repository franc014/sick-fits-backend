import { integer, relationship } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { isSignedIn, rules } from "../access";

export const CartItem = list({
  access: {
    operation: {
      query: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  ui: {
    listView: {
      initialColumns: ["product", "quantity", "user"],
    },
  },
  fields: {
    // TODO: CUSTOM LABEL IN HERE
    quantity: integer({
      defaultValue: 1,
      validation: {
        isRequired: true,
      },
    }),
    product: relationship({ ref: "Product" }),
    user: relationship({ ref: "User.cart" }),
  },
});
