import supabase from "./Supabuse";


export interface LogInPropType {
  email: string;
  password: string;
}
export interface NewUserType {
  email: string;
  password: string;
}


export const logIn = async ({ email, password}:LogInPropType) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email , password });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  console.log(data);
  
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

