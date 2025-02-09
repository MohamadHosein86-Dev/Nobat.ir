import React, { cloneElement, createContext, ReactElement, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useOutsidClick from "../hooks/useOutsideClick";


const StyledModal = styled.div<{ center?: boolean }>`
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  position: fixed;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;  /* از کلیک جلوگیری می‌کند وقتی مدال بسته است */

  ${({ center }) =>
    center
      ? `top: 20%;
         left: 40%;
         transform: translate(-50%, -50%) scale(0.95);`
      : `top: auto;
         right: 0;`}

  &.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: all; /* وقتی باز شد، قابل کلیک است */
  }

  @media (max-width: 764px) {
    ${({ center }) => (center ? "top: 80%;" : "width: 100%;")}
    border-radius: 2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none; /* از کلیک جلوگیری می‌کند وقتی مدال بسته است */

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`;




interface tyepep{
  children:ReactElement,
  name:string,
  center:boolean
}
interface tyepepe{
  children:React.ReactNode
}
interface typeOpen{
  openwindowName:string,
  children:ReactElement
}
interface ModalContextType {
     openName: string;
     close: ()=>void
     open: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<Partial<ModalContextType >>({});
export default function Modal({children}:tyepepe) {
  const [openName , setOpenName]=useState("");
  const close = ()=> setOpenName("") ;
  const open = setOpenName;

  return (
      <Context.Provider value={{openName , close , open}}>
          <div> {children} </div>
      </Context.Provider>
  )
}

function Open({children , openwindowName}:typeOpen) {
  const {open} = useContext(Context);
 
  return cloneElement(children , {onClick : ()=> open?.(openwindowName)})
}


function Window({ children, name, center }: tyepep) {
  const { openName, close } = useContext(Context);
  const { modalRef } = useOutsidClick(close);
  const body = document.body;

  useEffect(() => {
    if (openName === name) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }

    return () => {
      body.style.overflowY = "scroll";
    };
  }, [openName, name]);

  return createPortal(
    <Overlay className={openName === name ? "open" : ""}>
      <StyledModal ref={modalRef} className={openName === name ? "open" : ""} center={center}>
        <div>{cloneElement(children, { CloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}


Modal.Open = Open;
Modal.Window = Window;