import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  const directorList = directors.map((dir, index) =>{
    const movieDone = dir.movies.map((movie, index)=>{
      return(
        <ul key={movie}>
          <li >{movie}</li>
        </ul>
      )
    })
    return(
      <div key={index}>
        <h2 >{dir.name}</h2>
        <p>Movies:</p>
        {movieDone}
      </div>      
    )
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
      
    </div>
  );
}


export default Directors;
