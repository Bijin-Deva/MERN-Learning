function App(){
  return(
    <div>
      <div className="container mt-4 col-2">
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title">Student Profile</h4>
            <p className="card-text">Course: MERN Stack</p>
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>

    <div>
      <h2>
        Notifications: 
        <span className="badge bg-danger">5</span>
      </h2>
      <h2>
        Notifications: 
        <span className="badge bg-warning">7</span>
      </h2>
      <h2>
        Notifications: 
        <span className="badge bg-info">5</span>
      </h2>
      <h2>
        Notifications: 
        <span className="badge bg-success">5</span>
      </h2>
    </div>

    <div>
      <div className="alert alert-success">
        Student Data Saved Successfully
      </div>
      <div className="alert alert-danger">
        Something went wrong! Please try again...
      </div>
      <div className="alert alert-warning">
        Share correct details
      </div>
      <div className="alert alert-info">
        You have done this
      </div>
    </div>

    <div className="container">
      <button className=" pd-3 m-3 btn btn-primary btn-sm">Small Button</button>
      <button className="pd-3 m-3 btn btn-primary">Normal Button</button>
      <button className="pd-3 m-3 btn btn-warning btn-lg">Large Button</button>
    </div>

    <div>
      <button className=" m-3 btn btn-primary">Primary</button>
      <button className="m-3 btn btn-Success">Success</button>
      <button className="m-3 btn btn-warning">Warning</button>
      <button className="m-3 btn btn-danger">Danger</button>
      <button className="m-3 btn btn-info">Info</button>
      <button className="m-3 btn btn-dark">Dark</button>
    </div>


    <div>
      <p className="p-3 mb-2 bg-primary text-white">Primary Background</p>
      <p className="p-3 mb-2 bg-success text-white">Primary Background</p>
      <p className="p-3 mb-2 bg-danger text-white">Primary Background</p>
      <p className="p-3 mb-2 bg-warning text-white">Primary Background</p>
    </div>

    <div className="container mt-4">
      <h1 className="display-4">React Bootstrap</h1>
      <p className="lead">This is para with class lead</p>
      <p className="text-muted">This is muted text</p>
    </div>


    <div className="container mt-5">
      <h1 className="text-primary">Bootstrap Container</h1>
      <h1 className="text-danger">Bootstrap Container(danger)</h1>
      <h1 className="text-success">Bootstrap Container(success)</h1>
      <h1 className="text-warning">Bootstrap Container(warning)</h1>
      <p className="text-warning">Somelines of text</p>
      <p className="text-info">Somelines of text</p>
      <p className="text-dark">Somelines of text</p>
      <h1>Hello</h1>
    </div>
    </div>
  )
}

export default App;