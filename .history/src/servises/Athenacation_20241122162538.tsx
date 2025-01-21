import supabase from "./Supabuse";


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

