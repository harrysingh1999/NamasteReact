import React, { useContext, useState } from "react";
import userContext from "../Context/userContext";

export default function ContextComp({}) {
   const context = useContext(userContext);
  const [name, setUsername] = useState({score: 0}); 
  return (
   <>
   <h1 className="text-3xl text-center font-semibold mt-10">Context API</h1>
    <div className="flex flex-col justify-center items-center h-[50vh]">
      Context Data: {context.data}
      <div>
          {name.score}
          <button onClick={() => setUsername(prevScore => {
              return {...prevScore, score: prevScore.score+1}
          } )}
          className="border border-black ms-2 p-2"
          >Change Score</button>

          <input className="border border-black ms-2" type="text" />
        </div>
    </div>
   
    </>
  );
}