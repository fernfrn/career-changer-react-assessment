import { useEffect, useState } from "react";

const AutoSync = () => {
    const [employee, setEmployee] = useState([]);

    const syncInfo = () => {
        // copy the employee from home
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
          ]
          setEmployee(mockEmployees)
    }

    useEffect(syncInfo, [])
    // add new employee
    const addDataToEmployees = () => {
        const newEmployee = {
            id: 4,
              name: "John",
              lastname: 'Doe',
              position: "X"
        }
        setEmployee([...employee,newEmployee])
    }

    return (

        //add div and buttons
        <div>

        <button onClick={addDataToEmployees}>Add</button>
    
        <table>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Position</th>
            </tr>
            {employee.map((item => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
                )
            }))}
        </table>

        </div>
    )
}

export default AutoSync