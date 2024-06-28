import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  address: {
    street: String,
    neighborhood: String,
    number: String,
    city: String,
    state: String,
    zip: String,
  },
});
