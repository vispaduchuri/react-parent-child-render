import React ,{useState}from 'react';

const Hello = ()=>{
  const [num,setNum]=useState(0)

  const add = ()=>{
    setNum(num+1)
  }
   const minus = ()=>{
     if(num>0){
    setNum(num=num-1)
     }
  }

  const mul = ()=>{
 setNum(num*num)
  }

  const div = ()=>{
    if(num!=0)
    {
      setNum(num/2)
    }
  }
  return (
    <>
    <br />
    {console.log('child rerender')}
    {num}
    <br />
    <button onClick={()=> add()}>+</button>
    <button onClick={()=> minus()}>-</button>
    <button onClick={()=> mul()}>*</button>
    <button onClick={()=>div()}>/2</button>
    <button onClick={()=>setNum(0)}>Reset</button>
    </>
  )
}
export default Hello
