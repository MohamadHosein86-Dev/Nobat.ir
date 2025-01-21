import toast from "react-hot-toast";


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
export interface UserType {
    id: string,
    email: string,
    password: string,
    name: string
}


export const signUp = async ({email , password , name}: NewUserType) => {
  
  try {
    const response = await fetch("http://localhost:9000/users",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body:JSON.stringify({email , password ,name})
    });
    
    if (!response.ok) {
        throw new Error(" there was Error In SignUp");
    }
  
    return response.json();
  } 
  catch (error) {
    console.error(error)
  }
};
export const logIn = async ({email , password ,name}:LogInPropType) => {

  const response = await fetch("http://localhost:9000/users");
  
  if(!response.ok){
      throw new Error(" there was Error In Login");
  }

  const response1 =await response.json();
  const users= response1 as UserType[];

  const user = users.find((res)=>res.email == email && res.name ==name && res.password === password);

  if(!user){
    toast.error("ایمیل یا رمز یا نام اشتباه است")
  }

  return user ;
};



export const getCurrentUser = async () => {
  const storageUser = localStorage.getItem("user")
  if(!storageUser) return null;
  return JSON.parse(storageUser);
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

