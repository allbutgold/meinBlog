
const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    
    const API_URL = import.meta.env.VITE_API_URL

    fetch(`${API_URL}api/v1/sendEmail`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" />
      <textarea name="mailContent" cols="30" rows="10" type="text"></textarea>
      <button type='submit'>send</button>
  </form>
  )
} 

export default ContactForm