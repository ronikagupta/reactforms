import React ,{useState} from 'react';


const App =() =>{

    const [name,setName] =useState("");
    const [fullname, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [lastpassword, setlastpassword] = useState('');

const inputEvent = (event)=> {
    console.log(event.target.value);
    setName(event.target.value);
}

const inputEventTwo = (event)=>{
    console.log(event.target.value);
    setPassword(event.target.value)
}

const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setlastpassword(password);
}

 return ( 
 <>
 <div className="main_div">
 <form onSubmit={onSubmits}>
  <div>
      <h1> Hello {fullname} Your Password is{lastpassword}</h1>

      <input type="text" placeholder ="Enter Your Name" 
      onChange={inputEvent}
      Value={name}
      />

       <input type="text" placeholder ="Emter Your Password" 
      onChange={inputEventTwo}
      Value={password}
      />

      <button type="submit">SUBMIT</button>
  </div>
  </form>
  </div>
  </>
 );
}
export default App;
