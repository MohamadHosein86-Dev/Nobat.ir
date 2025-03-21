import React, { cloneElement, createContext, ReactElement, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useOutsidClick from "../hooks/useOutsideClick";

interface ModalProps {
  children: React.ReactNode;
}

interface OpenProps {
  openwindowName: string;
  children: ReactElement;
}

interface WindowProps {
  children: ReactElement;
  name: string;
  center: boolean;
}

interface ModalContextType {
  openName: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<Partial<ModalContextType>>({});

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <Context.Provider value={{ openName, close, open }}>
      <div>{children}</div>
    </Context.Provider>
  );
}

function Open({ children, openwindowName }: OpenProps) {
  const { open } = useContext(Context);

  return cloneElement(children, { onClick: () => open?.(openwindowName) });
}

function Window({ children, name, center }: WindowProps) {
  const { openName, close = () => {} } = useContext(Context);
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
  }, [openName, name, body]);

  return createPortal(
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-50 transition-opacity duration-300 ${openName === name ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div
        ref={modalRef}
        className={`bg-white h-[100%] cursor-pointer p-5 z-[100] rounded-[2rem]  shadow-lg fixed transition-all duration-300 opacity-0 transform scale-95 pointer-events-none ${
          center
            ? " top-[35rem] sm:rounded-none sm:top-[27.5rem] left-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2"
            : "  top-[8.2rem] right-0 left-0 w-[100%] sm:max-w-lg    sm:right-[-1.8rem] sm:rounded-none  sm:top-[-1.8rem] "
        } ${openName === name ? "opacity-100 scale-100 pointer-events-auto" : ""} rounded-lg  w-full  `}
      >
        <div>{cloneElement(children, { CloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
