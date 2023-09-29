import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
      const [users, setUsers] = useState([])

      useEffect(() => {
            axios.get("http://localhost:3001")
                  .then(res => setUsers(res.data))
                  .catch(e => console.log(e))
      }, [])

      const handleDelete = (id) => {
            axios.delete("http://localhost:3001/deleteUser/" + id)
                  .then(res => {
                        console.log(res)
                        window.location.reload()
                  })
                  .catch(err => console.log(err))
      }
      return (
            <>
                  <div className='container'>
                        <div className="row  justify-content-center">
                              <div className="col-md-8 mt-5">
                                    <h1 className='text-center mb-5 fw-bold'>MERN CRUD</h1>
                                    <div className="card">
                                          <div className="card-header">
                                                <Link to='/create' className='btn btn-success'>Create</Link>
                                          </div>
                                          <div className="card-body">
                                                <table className='table table-bordered text-center'>
                                                      <thead>
                                                            <tr>
                                                                  <th>Name</th>
                                                                  <th>Email</th>
                                                                  <th>Age</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            {
                                                                  users.map((users) => {
                                                                        return <tr key={users.id}>
                                                                              <td>{users.name}</td>
                                                                              <td>{users.email}</td>
                                                                              <td>{users.age + " thn"}</td>
                                                                              <td>
                                                                                    <div className="btn-group">
                                                                                          <Link to={`/update/${users._id}`} className='btn btn-primary'>Update</Link>
                                                                                          <button onClick={(e) => handleDelete(users._id)} className='btn btn-danger'>Delete</button>
                                                                                    </div>
                                                                              </td>
                                                                        </tr>
                                                                  })
                                                            }
                                                      </tbody>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default Users
