import { useState } from 'react';

const AddGalleries = ({ setGalleries }) =>  {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
      formData.append('title', e.target.title.value);
      for (let i = 0; i < e.target.postGalleryImages.files.length; i++) {
        formData.append('postGalleryImages', e.target.postGalleryImages.files[i]);
      }
    const API_URL = import.meta.env.VITE_BACKEND_URL;

    const response = await fetch(`${API_URL}api/v1/addGallery`, {
      credentials: 'include',
      method: 'POST',
      body: formData
    })
    console.log(response)
    if (!response.ok) {
      setError('You are not authorized to create new galleries');
      return;
    } else {
      setMessage('Gallery created');
    }
    const data = await response.json();
    if(!data.message){
      setGalleries(data);
      e.target.reset();   
    }
  }

  return (
    <div>
      <h3>create new gallery</h3>
      <form onSubmit={handleSubmit}>
      {error && <p style={{color: 'red'}}>{error}</p>}
        {message && <p style={{color: 'green'}}>{message}</p>}
        <input type="text" name="title" placeholder="Title"></input><br/>
        <input type="file" name='postGalleryImages' multiple/>
        
        <button type="submit">upload</button>
      </form>
    </div>
  )
}

export default AddGalleries;