
import React, {useState, useEffect} from 'react'

const Usestate = () => {
    const [variable,setVariable]=useState(5)
    const [text,setText]=useState('Hello I  initial text, but you can change me..... hahaha')
    
  
    const Add1=()=>{
        setVariable(variable+1)
    }
    const onChangeFunc=(e)=>{
       setText(e.target.value)
    }
  return (
    <>
    <div className="container my-3">
        <div className='text-center mb-3'>
        <h2 className="text-success">{variable}</h2>
    {
        variable<50 &&  <button className="btn btn-primary px-3 py-1" onClick={Add1}>Add by 1</button>
    }
       
{
    variable >5 &&   <button className='btn btn-danger px-3 py-1 ms-2' onClick={()=>setVariable(variable-1)}>Decrease by 1</button>
}
      
    {
        variable>5 &&
           <button className="btn btn-warning px-3 py-1 ms-2" onClick={()=>setVariable(variable-variable+5)}>Reset</button>
    }
        </div>

     <div className='text-center'>
     <textarea name="textbox" id="textbox" cols="30" rows="10" value={text} className='form-control mb-3' onChange={(e)=>setText(e.target.value)} ></textarea>
     <button className="btn btn-info px-3 py-1 rounded-5 me-3" onClick={()=>setText(text.toUpperCase())}>Change to UpperCase</button>
     <button className="btn btn-warning px-3 py-1 rounded-5 me-3" onDoubleClick={()=>setText(text.toLowerCase())}>Change to LowerCase</button>
     <button className="btn btn-primary px-3 py-1" onClick={(text)=>setText(text.toString(2))}>Change to Binary case.</button>
     </div>

    </div>

    </>
  )
}

export default Usestate