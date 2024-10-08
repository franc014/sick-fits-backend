import { integer, relationship, select, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { rules, isSignedIn } from "../access";

export const Product = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },

  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    status: select({
      options: [
        { label: "Draft", value: "DRAFT" },
        { label: "Available", value: "AVAILABLE" },
        { label: "Unavailable", value: "UNAVAILABLE" },
      ],
      defaultValue: "DRAFT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),

    price: integer(),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),

    /* user: relationship({
      ref: "User.products",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }), */
  },
});
