import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Create = () => {
      const [name, setName] = useState()
      const [email, setEmail] = useState()
      const [age, setAge] = useState()
      const Navigate = useNavigate()

      const Submit = (e) => {
            e.preventDefault();
            axios.post("http://localhost:3001/create", { name, email, age })
                  .then(result => {
                        console.log(result)
                        Navigate('/')
                  })
                  .catch(err => console.log(err))

      }
      return (
            <>
                  <div className='container'>
                        <div className="row justify-content-center d-flex align-items-center min-vh-100">
                              <div className="col-md-5">
                                    <h5 className='text-center mb-4 badge bg-info'>Create Users</h5>
                                    <div className="card shadow">
                                          <div className="card-body">
                                                <form onSubmit={Submit}>
                                                      <div className="mb-3">
                                                            <label htmlFor="" className='form-label'>Name</label>
                                                            <input type="text" className='form-control' name="" id="name" onChange={(e) => setName(e.target.value)} />
                                                      </div>
                                                      <div className="mb-3">
                                                            <label htmlFor="" className='form-label'>Email</label>
                                                            <input type="email" className='form-control' name="" id="email" onChange={(e) => setEmail(e.target.value)} />
                                                      </div>
                                                      <div className="mb-3">
                                                            <label htmlFor="" className='form-label'>Age</label>
                                                            <input type="number" className='form-control' name="" id="age" onChange={(e) => setAge(e.target.value)} />
                                                      </div>
                                                      <div className="mb-3 gap-2 d-grid">
                                                            <button className='btn btn-primary'>Submit</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default Create
