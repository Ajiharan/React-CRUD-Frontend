// import React, { useState ,useEffect } from "react";
// import Axios from 'axios';
// import './show.css';
// function Show() {
//   const [emplist, setEmplist] = useState([]);

//   const showDetails=()=>{
  
//     // event =>  window.location.href='/show'
//     Axios.get('http://localhost:2021/show').then((Response)=>{
//       console.log(Response.data);
//       // console.log(data);

//       setEmplist(Response.data);
//     })
//   };

//    useEffect(() => {
//     console.log("useeffect");
//     showDetails();
//   }, []);

//   const deleteEmployee=(id)=>{
//     Axios.delete(`http://localhost:2021/delete/+${id}`).then((Response)=>{
//       setEmplist(emplist.filter((val)=>{
//         return val.id !=id;
//       }))
//     })
//   };
  


//   return (
//       <div >
//         {showDetails}
//       <table className="table">
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Qualification</th>
//           <th>Salary</th>
//           <th>

//           </th>
//           <button className="back-btn" onClick={event =>  window.location.href='/'}>BACK</button>
//         </tr>
//         {emplist.map((val,key)=>{
//             return(
//                 <tr>
//                 <td>{val.name}</td>
//                 <td>{val.age}</td>
//                 <td>{val.qualification}</td>
//                 <td>{val.salary}</td>
//                 <td>
//                   <button className="btn-edit" onClick={event =>  window.location.href='/{id}/update'}>edit</button>
//                   <button className="btn-delete" onClick={()=>{deleteEmployee(val.id)}}>delete</button>
//                     {console.log(val.id)}
//                 </td>
//                 </tr>
//             )
//         })}
//       </table>
//     </div>
//   );
// }

// export default Show;
