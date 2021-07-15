
import React from 'react'
import Box from "./Box"

function Row(props) {

  const row = [];
  for (let i = 1; i <= 8; i++) {
    row.push(<Box posBox={((i % 2) === 0) ? "even" : "odd"} posRow={props.posRow}/> );
  }

    return (
    <div className="row">
      { row }
    </div>
    )
}

export default Row
