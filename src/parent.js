import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Parent = () => {
    const [count, setCount] = useState([]);
    const [searchedValue,setSearchedValue] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json()).then(json => setCount(json))

    }, []);
    console.log(searchedValue);
    let filteredVlues = searchedValue !== '' ? count.filter((x)=>x.name.toLowerCase().includes(searchedValue.toLowerCase())):count;
   
    return (
        <div>
            <input placeholder="search username" onChange={(e)=>setSearchedValue(e.target.value)}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>userName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredVlues.map((x,index)=>{
                            return <tr>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            </tr>
                        })
                    }
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Parent;