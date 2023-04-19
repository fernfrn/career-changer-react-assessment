import React, { useState, useEffect } from "react";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
];


const Home = () => {
  const [sector, setSector] = useState(); 

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

    <div>
      <div>
        <h1>
          Generation Thailand
          {sector === "user"
                ? " - User Sector"
                : sector === "admin"
                ? " - Admin Sector"
                : " - React Assessment"}
        </h1>
      </div>

        {/* create button for sector selection */}
      <div>
        <button onClick={() => setSector("user")} className="sector-btn">User home Sector</button>
        <button onClick={() => setSector("admin")} className="sector-btn">Admin home Sector</button>
      </div>

    </div>
  )
}


export default Home;
