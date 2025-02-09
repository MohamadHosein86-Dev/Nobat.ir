import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import ErrorElemnt from "./ui/ErrorElemnt";
import PageDotor from "./pages/PageDotor";
import SearchDoctors from "./ui/SearchDoctors";
import PhonePage from "./pages/PhonePage";
import PageRules from "./pages/PageRules";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import FavaritDoctorpage from "./pages/FavaritDoctorpage"
import { Provider } from "react-redux";
import store, { persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DoctorTurns from "./ui/DoctorTurns";
import ProtectedRouted from "./ui/ProtectedRouted";


const queryClinet = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0 
    }
  }
});

const router = createBrowserRouter([
  {path:"/user.nobat.ir/login" , element:<Login/>},
  {path:"/user.nobat.ir/signup" , element:<SignUp/>},
  {path:"/user.nobat.ir" ,element :<ProtectedRouted> <ProfilePage /> </ProtectedRouted> ,errorElement:<ErrorElemnt /> , children:[
    {path:"favarite" , element:<FavaritDoctorpage />},
    {path:"turns" , element:<DoctorTurns />}
  ]
  },
  {element:<Applayout /> , errorElement:<ErrorElemnt /> , children:[
    {path:"/", element:<Home /> },
    {path:"/:id" , element:<PageDotor />},
    {path:"/101" , element:<SearchDoctors />},
    {path:"/phone" , element:<PhonePage />},
    {path:"/rules" , element:<PageRules />},
  ]}
]);


function App() {

  return (
    <Provider store={store}>
        <PersistGate  loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClinet}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
            <Toaster position="top-center" gutter={12} containerStyle={{margin : "8px"}}
              toastOptions={{
               success:{
                duration:3000  
           },
          error:{
            duration:5000
          }
          ,
          style : {
            fontSize:"16x",
            maxWidth:"500px",
            padding:"16px 24px",
            backgroundColor:"white",
            color:"black"
          }
            }} />
          </QueryClientProvider>
        </PersistGate>
    </Provider>

  )
}

export default App;