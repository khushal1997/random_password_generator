import { useCallback, useEffect, useState } from 'react'
import './App.css'


function App(){

  const [length,setLength] = useState(8)
  const [password,SetPassword] = useState("")
  const [number,isNumberAllowed] = useState(false)
  const [character,isCharacterAllowed] = useState(false)

  const generatePassword=useCallback(()=>{
    let newpass=""
    let str="abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   
    if(number) str += '0123456789'
    if(character) str += '!@#$%&*()_+~`|}{[]\';:?><,./-=' 
   
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random() * str.length + 1)
      newpass+=str.charAt(char)
    }
    SetPassword(newpass)
    
  },[length,number,character,password])

  useEffect(()=>{
    generatePassword()
    },[length,number,character])

  return(
    <>
    <div className="flex justify-center h-screen w-screen bg-slate-900 p-10">
      <div className='h-50 w-200 border border-white p-5 rounded-xl'>
        <input type="text" className='border border-white text-white p-2 rounded bg-slate-800 w-155' 
        readOnly
        value={password}
        onLoad={generatePassword}
        />
        <button className='mx-2 border boder-white p-2 rounded bg-blue-800 w-30 shrink-0'>
          Copy
          </button>
          <div className='pt-10'>
        <input type="range" 
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
         />
         <label htmlFor="" className='text-white px-5'>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" name="" id=""
            onChange={()=>isNumberAllowed(prev=>!prev)}/>
            <label htmlFor="" className='text-white px-0.5'>Numbers</label>
          </div>
          <div className='pt-1'>
            <input type="checkbox"
            onChange={()=>isCharacterAllowed(prev=>!prev)}/>
            <label htmlFor="" className='text-white'>Characters</label>
          </div>
      </div>
    </div> 
    </>
  )
}

export default App  