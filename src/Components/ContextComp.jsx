import React, { useContext } from "react";
import userContext from "../Context/userContext";

export default function ContextComp({}) {
   

  const context = useContext(userContext);
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      Context Data: {context.data}
     
    </div>
  );
}