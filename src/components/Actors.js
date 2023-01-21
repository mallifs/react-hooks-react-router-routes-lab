import React from "react";
import { actors } from "../data";

 
function Actors() {
  console.log(actors)
  const actorName = actors.map((names,index)=>{
    const actorMovies = names.movies.map((movie)=>{
      return(
        <ul key={movie}>
          <li>{movie}</li>
        </ul>
      )
    })
    return(
      <div key={index}>
        <h2>{names.name}</h2>
        {actorMovies}

      </div>
    )
  })

  return(
    <div>
      <h1>Actors Page</h1>
      {actorName}
    </div>
  );
}


export default Actors;
