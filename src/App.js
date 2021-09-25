import { useState } from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import Axios from 'axios';
// import Show from "./Show";
function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [qualification,setQualification] = useState("");
  const [salary,setSalary] = useState(0);
  // const [emplist, setEmplist] = useState([]);

  const handleClick =(e)=>{

    if(name==="" || age==0||qualification==="" ||salary==0){
      alert('please check it :(')
    }

    Axios.post('http://localhost:2021/create',{
      name:name,
      age:age,
      qualification:qualification,
      salary:salary
    }).then(()=>{
      console.log("successful")
      alert("successfully stored")
    })
    setName('');
    setAge(0);
    setQualification('');
    setSalary(0);
    // e.target.reset();

  };

  // const showDetails=()=>{
  //   // event =>  window.location.href='/show'
  //   Axios.get('http://localhost:2021/show').then((Response)=>{
  //     console.log(Response.data);
  //     setEmplist(Response.data)
  //   })
  // }
  return (
    <div className="App">
      <div className="container">
        <h3 >Filll this things ....</h3>
        <div className="row">
          <label>Name:</label>
          <input
            value={name}
            type="text"
            onChange={(event) => {setName(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Age:</label>
          <input
          value={age}
            type="number"
            onChange={(event) => {setAge(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Qualification:</label>
          <input
            value={qualification}
            type="text"
            onChange={(event) => {setQualification(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Salary:</label>
          <input
            value={salary}
            type="number"
            onChange={(event) => {setSalary(event.target.value)}}
          />
        </div>
        <div className="">
          <button className="button-add" type="submit" onClick={handleClick}>
            + Add
          </button>
        </div>
      </div>
      <div>
        {/* <button className="btn-show"  onClick={showDetails}>show Details </button> */}
        <button to="/show" className="btn-show" onClick={event =>  window.location.href='/show'}>show details</button> 
        {/* this also work */}
      </div>
    </div>
  );
}

export default App;
