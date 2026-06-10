function Courses(){
    return(
            <div style={{ margin: '0', padding: '30px 20px', backgroundColor: 'rgba(102, 221, 221, 0.8)', flex: '1' }}> 
            <h2>Our Courses</h2>
            <p> Explore our wide range of courses designed to help you build skills and advance your career...</p>
            <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)',padding: '20px',borderRadius:'6px',backgroundColor:'rgba(230, 241, 129, 0.5)'}}>
                <div id="course1" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>HTML Basics</h2>
                    <p>Learn how to create webpages</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                <div id="course2" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>CSS Styling</h2>
                    <p>Learn How to design beautiful Webpages</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                <div id="course3" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>JavaScript</h2>
                    <p>Learn how to add interactivity to webpages</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                <div id="course4" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>Bootstrap 5</h2>
                    <p>Build a responsive website faster with Bootstrap</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                <div id="course5" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>React</h2>
                    <p>Learn React to create SPA</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                <div id="course6" style={{border:'1px solid black',borderRadius:'5px', padding:'5px' ,margin:'10px',textAlign:'center'}}>
                    <h2>MERN</h2>
                    <p>Get a complete Frontend Development Stack</p>
                    <button style={{backgroundColor:'white'}}>View Details</button>
                </div>
                
            </div>
        </div>
    )
}

export default Courses;