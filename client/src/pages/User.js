import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function User() {
  let { id } = useParams();
  const [userObject, setUserObject] = useState({});

  let history = useHistory();


  useEffect(() => {
    axios.get(`http://localhost:3001/users/byId/${id}`).then((response) => {
      setUserObject(response.data);
    });
  });

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/users/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        history.push("/");
      });
  };



  return (
    <div className="userPage">  
      <div className="leftSide">
        <div className="user" id="individual">
         <div className="title"> {userObject.userName} </div> 
          <div className="body">{userObject.email}</div> 
          <div className="body">{userObject.firstName}</div> 
          <div className="body">{userObject.lastName}</div>
          <div className="body">{userObject.birthDate}</div>          
          <div className="body">{userObject.postdescription}</div>
          <div className="footer">{userObject.imgUrl}</div> 
        </div>
      </div>
      <div className="rightSide">USER DESCRİPTİON SECTİON <button onClick={() => {
        deleteUser(userObject.id);}} >{" "} DELETE USER </button>

      </div> 
    </div>
    
 

  );
}

export default User;