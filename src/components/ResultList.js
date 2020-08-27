import React, { useState } from 'react';

function ResultList(props) {
  const { result } = props;
  result.map(movie => {
    console.log(movie.Title)
  })
  
  console.log(result)
  return (
    <div>

    </div>
  )
  // return result.map(movie => {
  //   console.log(movie);
  // })
}

export default ResultList;