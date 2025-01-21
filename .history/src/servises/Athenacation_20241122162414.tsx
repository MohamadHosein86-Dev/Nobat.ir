import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export interface LogInPropType {
  email: string;
  password: string;
}
export interface NewUserType {
  email: string;
  password: string;
  fullName: string;
}

export const signUp = async (user: NewUserType) => {
  const { fullName, email, password } = user;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
};

export const logIn = async (informations: LogInPropType) => {
  const { email, password } = informations;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data.user;
};
export const Logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export interface UpdatedUserType {
  fullName?: string;
  avatar?: FileList;
  password?: string;
}

export const updateUser = async (updateUser: UpdatedUserType) => {
  if (updateUser.password) {
    const { error, data } = await supabase.auth.updateUser({
      password: updateUser.password,
    });
    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    if (!updateUser.avatar) return data;
  }
  if (updateUser.fullName) {
    const { error, data } = await supabase.auth.updateUser({
      data: { fullName: updateUser.fullName },
    });
    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    if (!updateUser.avatar) return data;
    const fileName = `avatar-${data.user.id}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, updateUser.avatar[0]);
    if (storageError) {
      console.error(storageError);
      throw new Error(storageError.message);
    }
    const { error: error2, data: user } = await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });
    if (error2) console.error(storageError);
    return user;
  }
};