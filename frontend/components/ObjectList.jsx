import { useEffect, useState } from "react";

function ObjectList() {
  const [objects, setObjects] = useState([])
  const [selectedObject, setSelectedObject] = useState('')
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');


  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetch('http://localhost:9999/api/v1/getGalleries')
      .then(res => res.json())
      .then(data => setObjects(data))
  }, [])

  const handleDelete = () => {
    fetch(`${API_URL}api/v1/deleteGallery/${selectedObject}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 401) {
          setError('You are not authorized to delete galleries')
          
        } else if (!res.ok) {
          setError('failed to delete gallery')
        } return res.json()
      })
      .then(data => {
        const newObjects = objects.filter(item => item._id !== selectedObject._id)
        
        setObjects(newObjects)
        setSelectedObject('')
      })
      .catch(err => console.error(err))
  }

  const handleSelect = (e) => {
    setSelectedObject(e.target.value)
    
  }

  return (
    <div>
      <h3>delete existing gallery</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
        {message && <p style={{color: 'green'}}>{message}</p>}
      <select value={selectedObject} id={objects} onChange={handleSelect}>
        <option value="">select gallery</option>
        {objects.map(item => (


            <option key={item._id} value={item._id}>{item.title}</option>

          ))}
      </select><br/>
      
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default ObjectList;