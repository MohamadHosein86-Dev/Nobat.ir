import supabase from "./Supabuse";


export interface LogInPropType {
  email: string;
  password: string;
  name:string;
}
export interface NewUserType {
  email: string;
  password: string;
  name:string;
}


export const signUp = async ({email , password , name}: NewUserType) => {
  
  const response = await fetch("http://localhost:9000/users",{
    method:" POST",
    headers:{" Content-Type":"application/json"},

    body:JSON.stringify({email , password ,name})
  });
  
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
  const response = await fetch("http://localhost:9000/users" ,{
    method:"GET",
    headers:{
      
    }
  })
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

