import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function Home() {
  const [listOfUsers, setListOfUsers] = useState([]);
  let history = useHistory();


  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div>
      {listOfUsers.map((value, key) => {
        return (
          <div 
            className="user" 
            onClick={() => {
              history.push(`/user/${value.id}`);
            }}
          >
            <div className="title"> {value.userName} </div>
            <div className="body">{value.email}</div>
            <div className="body">{value.firstName}</div>
            <div className="body">{value.lastName}</div>
            <div className="body">{value.birthDate}</div>
            <div className="body">{value.postdescription}</div>
            <div className="footer">{value.imgUrl}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;




