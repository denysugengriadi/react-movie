"use client";

import React, { useState ,useRef} from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';


const MovieForms = () => {  
 const [judul, setJudul] = useState('');
 const [sutradara, setSutradara] = useState('');
 const [deskripsi, setDeskripsi] = useState('');
 const [rating, setRating] = useState('');

const fileInputRef = useRef(null);
 
 const simpanData = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 
  const formData = new FormData();
  formData.append('judul', judul);
  formData.append('sutradara', sutradara);

  formData.append('deskripsi', deskripsi);
  formData.append('rating', rating);
  
  if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]) {
      formData.append('image', fileInputRef.current.files[0]);
  }

   

   try {
     const response = await axios.post('http://localhost:5000/api/movies', formData, {
       headers: {
        'Content-Type': 'multipart/form-data', // Important for files
        
        },
        timeout: 10000,
     });
     console.log(response.data);
     // Handle success (e.g., showing a success message or redirecting)
   } catch (error) {
     console.error('There was an error submitting the form:', error);
     // Handle error (e.g., showing an error message)
   }
 };
return (
    <div className="row">
        <form className='gradient-custom'  onSubmit={simpanData}>
            <div className="form-group row">
                <label htmlFor="judul" className="col-sm-2 col-form-label">Judul Film</label>
                <div className="col-sm-10">
                    
                <input type="text"  className="form-control-plaintext bg-light form-control bg-light form-control-sm" 
                placeholder='judul' id="judul" 
                value={judul}
                onChange={(e) => setJudul(e.target.value)}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="sutradara" className="col-sm-2 col-form-label">Sutradara</label>
                <div className="col-sm-10">
                    
                <input type="text"  className="form-control-plaintext  form-control bg-light form-control-sm" id="sutradata" 
                                value={sutradara}
                                onChange={(e) => setSutradara(e.target.value)}
                placeholder='sutradara'   />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="deskripsi" className="col-sm-2 col-form-label ">Deskripsi</label>
                <div className="col-sm-10">
                    
                <input type="text"  className="form-control-plaintext bg-light form-control bg-light form-control-sm" 
                placeholder='deskripsi' id="deskripsi" 
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="image" className="col-sm-2 col-form-label">Gambar Cover</label>
                <div className="col-sm-10">
                    
                <input type="file" className="form-control-file" id="image"  ref={fileInputRef}

                />
                </div>
            </div> 
        
        
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Rating</label>
                <div className="col-sm-5">
                    <div className="star-rating">
                        <input type="radio" id="5-stars" name="rating" value="5"  onClick={(e) => setRating("5")}/>
                        <label htmlFor="5-stars">&#9733;</label>
                        <input type="radio" id="4-stars" name="rating" value="4" onClick={(e) => setRating("4")}/>
                        <label htmlFor="4-stars">&#9733;</label>
                        <input type="radio" id="3-stars" name="rating" value="3" onClick={(e) => setRating("3")}/>
                        <label htmlFor="3-stars">&#9733;</label>
                        <input type="radio" id="2-stars" name="rating" value="2" onClick={(e) => setRating("2")}/>
                        <label htmlFor="2-stars">&#9733;</label>
                        <input type="radio" id="1-star" name="rating" value="1" onClick={(e) => setRating("1")}/>
                        <label htmlFor="1-star">&#9733;</label>
                    </div>
                </div>
            </div>

        <div className="form-group row">
            <div className="col-sm-5">
            <Button type='submit' variant="primary">
                Simpan Data
            </Button>
            </div>
        </div>
        </form>
    </div>

);
};
export default MovieForms;