function Home(){
    return(
        <div>
        <div className="container bg-lightblue border border-2 rounded box-shadow">
            <div className="row ">
                <div className="col-md-6 p-5" style={{ backgroundColor: "rgba(245, 106, 42, 0.03)" }}>
                    <h1 style={{color:'darkblue',fontFamily:'sans-serif',fontSize:'60px'}}><strong>Shaping Minds,<br /> Building Futures</strong></h1>
                    <p>Bright Future Academy provides quality education, practical skills, and real-world exposure to help students achieve their goals and build successful careers.</p>
                    <div>
                        <button className="btn btn-primary">Explore Courses &gt; </button> &nbsp;&nbsp;
                        <button className="btn border border-2" >Learn More</button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src="./Home.jpg" width='375px'  />
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3 border border-2 rounded">
                    <img src="./expert.png" style={{width:'50px',height:'50px'}} />
                    <h2><b>Expert Instructors</b></h2>
                    <p>Learn from industry professionals and experienced educators.</p>
                </div>
                <div className="col-md-3 border border-2 rounded">
                    <img src="./quality.png" style={{width:'50px',height:'50px'}} />
                    <h2><b>Quality Education</b></h2>
                    <p>Up-to-date curriculum designed to give you the knowledge that matters.</p>
                </div>
                <div className="col-md-3 border border-2 rounded">
                    <img src="./practical.png" style={{width:'50px',height:'50px'}} />
                    <h2><b>Practical Learning</b></h2>
                    <p>Hands-on projects and real-world skills to prepare you for the future.</p>
                </div>
                <div className="col-md-3 border border-2 rounded">
                    <img src="./career.png" style={{width:'50px',height:'50px'}} />
                    <h2><b>Career Support</b></h2>
                    <p>Guidance and support to help you achieve your career goals.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;