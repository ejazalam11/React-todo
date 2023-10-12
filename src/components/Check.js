import React, {useEffect, useState} from 'react'

const Check = () => {
    const [Count , setcount] = useState(1)

    function increment(){
        setcount(Count + 1)
        if(Count > 30){
            setcount(Count + 3)
        }
        if(Count > 50){
            setcount(Count + 5)
        }
    }

    function decrement(){
        setcount(Count -1)
        if(Count <= -30){
            setcount(Count -3)
        }
        if(Count < -50){
            setcount(Count -5)
        }
    }



  return (
    <>
    <button className='border 2' onClick={increment}>+</button>
    <span>{Count}</span>
    <button className='border 2' onClick={decrement}>-</button>
    </>
  )
}

export default Check
