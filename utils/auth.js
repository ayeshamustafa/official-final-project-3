
import supabase from './supabase';
import { createRecord } from "./table";

export const registerUser = async (name, email, password) => {
  try {
    // Register the user with Supabase auth
    const { user, error } = await supabase.auth.signUp({ email, password });
    console.log('user:', user); 
    console.log('error:', error); 

    if (error) {
      throw new Error(error.message);
    }

    // Create a user record in the 'users' table
    const newUser = await createRecord('users', { id: user.id, name, email });

    return newUser;
  } catch (error) {
    throw new Error(`An error occurred during registration: ${error.message}`);
  }
};

export const loginUser = async (email, password) => {
  try {
    // Login the user with Supabase auth
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      throw new Error(error.message);
    }
    return user;
  } catch (error) {
    throw new Error('An error occurred during login.');
  }
};
