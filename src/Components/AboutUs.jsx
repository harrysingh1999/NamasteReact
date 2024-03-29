import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [fetchedData, setFetchedData] = useState({});
   const [showPassword, setShowPassword] = useState(false);
   const [name, setUsername] = useState({score: 0}); 

  useEffect(() => {
    const getUser = async () => {
      let response = await fetch("https://api.github.com/users/harrysingh1999");
      let data = await response.json();
      setFetchedData(data);
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]" >
      <p>Name: {fetchedData.name}</p>
      <div className="relative cursor-pointer">
      <label htmlFor="password">Enter your password:</label>
        <input type={showPassword ? 'text' : 'password'} 
        className="border border-black ms-2"
        id="password" />
      <span className="absolute right-3"
      onClick={() => setShowPassword(!showPassword)}>👁️</span>
      </div>
        <div>
          {name.score}
          <button onClick={() => setUsername(prevScore => {
              return {...prevScore, score: prevScore.score+1}
          } )}
          className="border border-black ms-2 p-2"
          >Change Score</button>
        </div>
    </div>
  );
}