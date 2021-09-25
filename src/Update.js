import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import "./App.css";

function Update() {

    const [emplist, setEmplist] = useState([]);

    const showDetails=()=>{
    
      // event =>  window.location.href='/show'
      Axios.get('http://localhost:2021/show').then((Response)=>{
        console.log(Response);
        setEmplist(Response.data);
      })
    };
  
     useEffect(() => {
      console.log("useeffect");
      showDetails();
    }, [])
  

    return (
        <div>
            <div className="App">
      <div className="container">
        <h3 >Filll this things ....</h3>
        <div className="row">
          <label>Name:</label>
          <input
            // value={name}
            type="text"
            // onChange={(event) => {setName(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Age:</label>
          <input
        //   value={age}
            type="number"
            // onChange={(event) => {setAge(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Qualification:</label>
          <input
            // value={qualification}
            type="text"
            // onChange={(event) => {setQualification(event.target.value)}}
          />
        </div>
        <div className="row">
          <label>Salary:</label>
          <input
            // value={salary}
            type="number"
            // onChange={(event) => {setSalary(event.target.value)}}
          />
        </div>
        <div className="">
          <button className="button-add" type="submit" onClick={""}>
            Save
          </button>
        </div>
      </div>
      <div>
        {/* <button className="btn-show"  onClick={showDetails}>show Details </button> */}
        <button to="/show" className="btn-show" onClick={event =>  window.location.href='/show'}>show details</button> 
        {/* this also work */}
      </div>
    </div>
        </div>
    )
}

export default Update
