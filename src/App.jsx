
function App() {
  const onSubmit = () => {
    console.log('halo')
  }

  return (
    <>
      <main className="d-flex justify-content-center flex-column vw-100 vh-100 align-items-center pt-3 pt-lg-5">
        <form className="h-75 d-flex justify-content-center flex-column" onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label fsemibold">Nama</label>
            <input type="text" className="form-control" id="name" autoComplete="name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fsemibold">Email</label>
            <input type="email" className="form-control" id="email" autoComplete="email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="asalInstansi" className="form-label fsemibold">Asal Instansi</label>
            <input type="text" className="form-control" id="asalInstansi" autoComplete="asal-instansi" required />
          </div>
          <div className="mb-4">
            <label htmlFor="testimoni" className="form-label fsemibold">Testimoni</label>
            <textarea className="form-control" id="testimoni" autoComplete="testimoni" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </main>
    </>
  );
}

export default App
