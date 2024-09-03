import { integer, relationship, text, virtual } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { isSignedIn, rules } from "../access";
import formatMoney from "../lib/formatMoney";

export const Order = list({
  // TODO
  access: {
    operation: {
      create: isSignedIn,
      query: rules.canOrder,
      update: () => false,
      delete: () => false,
    },
  },
  fields: {
    label: virtual({
      graphQLReturnType: "String",
      resolver(item) {
        return `Order total ${formatMoney(item.total)}`;
      },
    }),
    total: integer(),
    items: relationship({ ref: "OrderItem.order", many: true }),
    user: relationship({ ref: "User.orders" }),
    charge: text(),
  },
});
