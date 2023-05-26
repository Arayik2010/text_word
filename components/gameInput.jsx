import React from 'react'

const GameInput = () => {
  return (
    <div>
     <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick ={addName}>add</button>
        {nameGamer.map((el,index) =>(
          <div key={index}>
            <p>{el} {finishPoint}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default GameInput
