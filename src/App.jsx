import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    asalInstansi: '',
    testimoni: '',
    photo:''
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('https://647ed0d7c246f166da8f68b6.mockapi.io/testi');
      setTestimonials(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://647ed0d7c246f166da8f68b6.mockapi.io/testi', formData);
      const newTestimonial = response.data;

      setTestimonials((prevTestimonials) => [...prevTestimonials, newTestimonial]);
      setFormData({ name: '', email: '', asalInstansi: '', testimoni: '', photo:'' });
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://647ed0d7c246f166da8f68b6.mockapi.io/testi/${id}`);
      setTestimonials((prevTestimonials) => prevTestimonials.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://647ed0d7c246f166da8f68b6.mockapi.io/testi/${id}`);
      setTestimonials((prevTestimonials) => prevTestimonials.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  return (
    <main className="d-flex justify-content-center flex-column vw-100 vh-100 align-items-center pt-3 pt-lg-5">
      <form className="h-75 w-50 d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label fsemibold">Nama</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} autoComplete="name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label fsemibold">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="asalInstansi" className="form-label fsemibold">Asal Instansi</label>
          <input type="text" className="form-control" id="asalInstansi" name="asalInstansi" value={formData.asalInstansi} onChange={handleInputChange} autoComplete="asal-instansi" required />
        </div>
        <div className="mb-4">
          <label htmlFor="testimoni" className="form-label fsemibold">Testimoni</label>
          <textarea className="form-control" id="testimoni" name="testimoni" value={formData.testimoni} onChange={handleInputChange} autoComplete="testimoni" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="form-label fsemibold">Photo</label>
          <input className="form-control" id="photo" name="photo" value={formData.photo} onChange={handleInputChange} autoComplete="testimoni" required />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {testimonials.length > 0 && (
        <div className="mt-5 overflow-scroll">
          <h2>Testimonials</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Aksi</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Asal Instansi</th>
                <th scope="col">Testimoni</th>
                <th scope="col">Foto</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial, index) => (
                <tr key={index}>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(testimonial.id)}>Delete</button>
                    <button className="btn btn-success" onClick={() => handleUpdate(testimonial.id)}>Update</button>
                  </td>
                  <td>{testimonial.name}</td>
                  <td>{testimonial.email}</td>
                  <td>{testimonial.asalInstansi}</td>
                  <td>{testimonial.testimoni}</td>
                  <td>{testimonial.photo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default App
