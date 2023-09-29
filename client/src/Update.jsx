import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
      const { id } = useParams();
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [age, setAge] = useState('');
      const navigate = useNavigate();

      useEffect(() => {
            axios.get('http://localhost:3001/getUsers/' + id)
                  .then(res => {
                        setName(res.data.name);
                        setEmail(res.data.email);
                        setAge(res.data.age);
                  })
                  .catch(err => console.log(err));
      }, []); // Tambahkan array dependensi kosong agar efeknya hanya dijalankan saat komponen di-mount

      const handleUpdate = (e) => {
            e.preventDefault();
            axios.put("http://localhost:3001/update/" + id, { name, email, age })
                  .then(result => {
                        console.log(result);
                        navigate('/');
                  })
                  .catch(err => console.log(err));
      }

      return (
            <div className='container'>
                  <div className="row justify-content-center d-flex align-items-center min-vh-100">
                        <div className="col-md-5">
                              <h5 className='text-center mb-4 badge bg-info'>Update Users</h5>
                              <div className="card shadow">
                                    <div className="card-body">
                                          <form onSubmit={handleUpdate}>
                                                <div className="mb-3">
                                                      <label htmlFor="name" className='form-label'>Name</label>
                                                      <input type="text" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="email" className='form-label'>Email</label>
                                                      <input type="email" id="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="mb-3">
                                                      <label htmlFor="age" className='form-label'>Age</label>
                                                      <input type="number" id="age" className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
                                                </div>
                                                <div className="mb-3 gap-2 d-grid">
                                                      <button type="submit" className='btn btn-primary'>Submit</button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Update;
