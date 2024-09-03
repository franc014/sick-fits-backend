import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file

import { User } from "./schemas/User";
import { CartItem } from "./schemas/CartItem";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import { extendGraphqlSchema } from "./mutations";
import { Order } from "./schemas/Orders";
import { Role } from "./schemas/Role";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";

export default withAuth(
  config({
    /* server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    }, */
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists: {
      // Schema items go in here
      User,
      /* CartItem,
      Order,
      Role,
      Product,
      ProductImage, */
      /* Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role, */
    },
    /* extendGraphqlSchema, */
    ui: {
      // show the ui only for people that pass this test
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session,
  })
);
