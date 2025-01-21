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
      throw new Error(" there was Error In SignUp");
  }

  return response.json();
};
export const logIn = async ({email , password ,name}:LogInPropType) => {

  const response = await fetch("http://localhost:9000/users",{
    method:" POST",
    headers:{" Content-Type":"application/json"},

    body:JSON.stringify({email , password ,name})
  });
  
  if(!response.ok){
      throw new Error(" there was Error In Login");
  }

  return response.json();
};



export const getCurrentUser = async () => {
  const token = localStorage.getItem("authToken");

  const response = await fetch("http://localhost:9000/users" ,{
    method:"GET",
    headers:{
      Authorization:`Bearer ${token} `
    }
  });

  if(!response.ok){
    throw new Error(" there was Error In GetUser");
  }

  return response.json();
};

export const logout = async () => {
  const token = localStorage.getItem("authToken");

  const response = await fetch("http://localhost:9000/users" ,{
    method:"GET",
    headers:{
      Authorization:`Bearer ${token} `
    }
  });

  if(!response.ok){
    throw new Error(" there was Error In Logout");
  }

  return response.json();

}

