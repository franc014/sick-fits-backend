import { relationship, text, image } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";

import { cloudinaryImage } from "@keystone-6/cloudinary";

// cloudinary integration
export const cloudinary = {
  cloudName: "dfpkdo5tf",
  apiKey: "954846955722679",
  apiSecret: "7ljL_MDCJUjdzglITE3V9buwoso",
  folder: "sickfits",
};

console.log(cloudinary);

export const ProductImage = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    image: image({ storage: "sick_fits_local" }),
    altText: text(),
    product: relationship({
      ref: "Product.photo",
    }),
  },
});
