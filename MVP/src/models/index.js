// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogModel, Category, Product, UserModel } = initSchema(schema);

export {
  BlogModel,
  Category,
  Product,
  UserModel
};