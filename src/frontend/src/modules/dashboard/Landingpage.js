import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Landingpage() {
   
    const [mydata, setdata] = useState([]);
    const mygetalldata = () => {
        axios.get('http://localhost:7800/getdata').then((res) => {
            console.log(res.data);
            setdata(res.data);
        })

    }
    useEffect(() => {
        mygetalldata();
    }, []);

    const deleterecor = async(id)=>{
        await axios.delete(`http://localhost:7800/deleterecord/${id}`).then((res)=>{
            console.log(res.data);
            mygetalldata();
            });
    }



    return (
<>
<div>
 
      <select value={""} onChange={""}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        {/* Add more filter options */}
      </select>
      <input type="text" placeholder="Search..." value={""} onChange={""} />

      {/* Render filtered data */}
      {/* {filteredData.map(item => ( */}
        {/* <div key={item.id}> */}
          {/* Render data items */}
        {/* </div>
      ))} */}
    </div>


        <div className='container page border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>dashboard</h1>
                    <button type="button" onClick={mygetalldata}>fetch data</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">MongoDBId</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                        <td>
                                            <Link className='btn btn-info btn-sm' to={`view/${item._id}`}>View</Link>
                                            <Link className='btn btn-warning btn-sm ms-2' to={`editrecord/${item._id}`}>Edit</Link>
                                            <button className='btn btn-danger btn-sm ms-2' onClick={()=>deleterecor(item._id)}>Del</button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        </>
    )
}

export default Landingpage