import { useState } from "react"

function Detail({onActive}){
  const [status,setStatus] = useState(true)
  function handleClick(){
    setStatus(!status)
    onActive(status)
  }
  return (
    <div>
      <button onClick={handleClick}>按钮</button>
      <p style={{display:status?'block':'none'}}>我睡觉啦</p>
    </div>
  )
}

export default function Details() {
  function handleActive(x){
    console.log(x, '变化的值')
  }
  return (
    <>
      <Detail onActive = {handleActive}/>
    </>
  )
}
