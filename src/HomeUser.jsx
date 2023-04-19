import React, { useState, useEffect } from "react";
import HomeAdmin from "./HomeAdmin";

const HomeUser = () => {
    const [sector, setSector] = useState();
  
    const [employees, setEmployee] = useState([
      {
        id: 0,
        name: "mock",
        lastname: "mocklastname",
        position: "Manager",
      },
      {
        id: 1,
        name: "employee 1",
        lastname: "em",
        position: "Engineer",
      },
      {
        id: 2,
        name: "employee 2",
        lastname: "lord",
        position: "Designer",
      }
  ]);
  
    if (sector === "admin") {
      return (
          <HomeAdmin />
      );
    } else if (sector === "user") {
      return (
          <HomeUser />
      );
    };
  
    return (
      
        <div style={{textAlign: "center"}}>
          <h1>Generation Thailand</h1>
          <h1>Home - User Sector</h1>
          <button onClick={() => setSector("user")}>User Home Sector</button>
          <button onClick={() => setSector("admin")}>Admin Home Sector</button>
          <table style={{margin: "auto", bordercollapse: "collapse"}}>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
            {employees.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                </tr>
              );
            })}
          </table>
        </div>
      
    );
  };

export default HomeUser;