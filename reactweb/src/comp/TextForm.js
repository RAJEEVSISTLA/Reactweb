import React, {useState} from 'react'

export default function TextForm(props) {
    
const [text, setText] = useState("Enter text here");

  const change = (event) =>{
       setText(event.target.value);
  }
  const uppercase = () =>{
    let mytext = text.toUpperCase();
    setText(mytext);
  }
  const lowercase = () =>{
    let mytext = text.toLowerCase();
    setText(mytext);
  }
  const clear = ()=>{
    let mytext = " ";
    setText(mytext);
  }

  return (
    <>
     <h3 className="text-center">{props.heading}</h3>
    <div>
         <div className="mb-3 my-3 ">
         <textarea className="form-control" value={text} onChange={change} id="myBox" rows="6"></textarea>
         </div>
        <button className="btn btn-primary" onClick={uppercase}>Convert to Upper case</button><>   </>
        <button className="btn btn-primary" onClick={lowercase}>Convert to Lower case</button><>   </>
        <button className="btn btn-primary" onClick={clear}>Clear text</button>
    </div>
    </>
  )
}
