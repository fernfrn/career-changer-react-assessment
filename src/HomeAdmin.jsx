import React, { useState, useEffect } from "react";
import HomeUser from "./HomeUser";


const HomeAdmin = () => {
  
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
  
    const addEmployee = newEmployee => {
    setEmployee([...employees, newEmployee]);
    };
  
    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [position, setPosition] = useState();
     
    const handleClick = (event) => {
      event.preventDefault();
      const newEmployee={
          name:name,
          lastname:lastname,
          position:position}
      addEmployee(newEmployee);
      setName('');
      setLastName('');
      setPosition('');
    };
  
    const [sector, setSector] = useState();
    if (sector === "admin") {
      return (
          <HomeAdmin />
      );
    } else if (sector === "user") {
      return (
          <HomeUser />
      );}
  
    return (
      
        <div style={{textAlign: "center"}}>
          <h1>Generation Thailand</h1>
          <h1>Home - Admin Sector</h1>
          <button onClick={() => setSector("user")}>User Home Sector</button>
          <button onClick={() => setSector("admin")}>Admin Home Sector</button>
          <h3>Create User Here</h3>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(event) => setPosition(event.target.value)}
            type="text"
            placeholder="Position"
          />
          <button onClick={handleClick}>Save</button>
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

export default HomeAdmin;