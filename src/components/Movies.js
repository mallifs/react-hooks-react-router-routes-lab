import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  const moviesList = movies.map((mName,index)=>{
    const movieGen = mName.genres.map((gen)=>{
      return (
        <ul key={gen}>
          <li>{gen}</li>
        </ul>
      )
    })
    return(
      <div key={index} >
        <h2 >Name: {mName.title}</h2>
        <p > Time: {mName.time}</p>
        <p>Genres:</p>
        {movieGen}
       
      </div>
    )
   })
  return( <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    {moviesList}
    </div>)
}

export default Movies;
