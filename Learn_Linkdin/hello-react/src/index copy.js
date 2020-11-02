import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GithubUser({login}){
  const [data,setData] = useState(null);  
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then( res => res.json())
    .then(setData)
    .catch(console.error)
  }, [])

  if(data){
    return(
      <>
      <h2>{data.login}</h2>
      <img alt="test" src={data.avatar_url} width={100} />
      </>
    );
  }
return null ;
}
function App() {
  return(
    <GithubUser login="mouadlouhichi"/>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
