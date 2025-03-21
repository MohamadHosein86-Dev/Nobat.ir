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
    const response = await fetch("https://67aa262f65ab088ea7e5d09a.mockapi.io/user",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body:JSON.stringify({email , password ,name})
    });
    
    const response1 = await response.json();
    
    return response1 as UserType;
  } 
  catch (error) {
    console.error(error)
  }
};
export const logIn = async ({email , password ,name}:LogInPropType) => {

  const response = await fetch("https://67aa262f65ab088ea7e5d09a.mockapi.io/user");
  
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
  const storageUser = localStorage.getItem("user");
  if(!storageUser) return null;
  const paresedUser = JSON.parse(storageUser);

  
  return paresedUser as UserType;
  
};

export const logout = async () => {
  localStorage.clear();
}

