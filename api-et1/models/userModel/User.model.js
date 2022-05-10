import userSchema from "./User.schema.js";

// insert user
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

// get user
export const getUser = (_id) => {
  return userSchema.findById(_id);
};

// find user by any filter
// @filter must be an object
export const findUser = (filter) => {
  return userSchema.findOne(filter);
};

// update user
export const updateUser = (_id, obj) => {
  return userSchema.findByIdAndUpdate(_id, obj); //obj must be object
};
