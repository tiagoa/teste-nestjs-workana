import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    neighborhood: string;
    number: string;
    city: string;
    state: string;
    zip: string;
  };
}
