"use client";
import { meraStore } from "@/store/store";
import { Provider, useSelector } from "react-redux";
import { users } from "../data";

export default function Page(){

  return <Provider store={meraStore}>
      <Users></Users>
  </Provider>

}

function Users(){
 
  let data =  useSelector((store)=>{
      return store;
  })
    return <div>
      <h1>{data.city}</h1>
        <table>
{
 data.users.map(function(user){
  return <tr>

  <td>{user.email}</td>
  <td>{user.password}</td>

</tr>


})
}
      </table>       
     </div>
}
