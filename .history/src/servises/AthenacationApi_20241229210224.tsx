import supabase from "./Supabuse";


export interface LogInPropType {
  email: string;
  password: string;
  name:string;
}
export interface NewUserType {
  email: string;
  password: string;
}


export const signUp = async ({email , password}: NewUserType) => {
 const response = await fetch("")
  
  if (!response.ok) {
      throw new Error(" there was new Error In SignUp");
  }
  
  return response;
};
export const logIn = async ({email , password ,name}:LogInPropType) => {

  const response = await fetch("http://localhost:9000/users",{
    method:" POST",
    headers:{" Content-Type":"application/json"},

    body:JSON.stringify({email , password ,name})
  });
  
  if(!response.ok){
      throw new Error(" there was new Error In Login");
  }

  return response;
};



export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;


  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }


  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

