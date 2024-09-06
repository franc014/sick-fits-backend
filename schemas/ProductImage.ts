import dotenv from "dotenv";
dotenv.config();
import { relationship, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";

import { cloudinaryImage } from "@keystone-6/cloudinary";

// cloudinary integration
export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: process.env.CLOUDINARY_FOLDER,
};

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
    image: cloudinaryImage({ cloudinary }),
    altText: text(),
    product: relationship({
      ref: "Product.photo",
    }),
  },
});
