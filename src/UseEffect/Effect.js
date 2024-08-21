import React,{useEffect, useState} from 'react'

const Effect = () => {

  const[count , setcount] = useState(0);

  useEffect(() => {
    document.title = `chats(${count})`
    console.log("Hello useEffect")
  }
); 
console.log("hello immortal")




  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" OnClick ={
        ()=> setcount(count + 2)
      } >Click</button>
    </div>
  )
}

export default Effect

