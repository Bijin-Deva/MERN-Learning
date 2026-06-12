function Home(){
    return(
        <div className="container">
            <div className="row m-5 bg-lightblue border border-2 rounded box-shadow">
                <div className="col-md-6 p-5">
                    <h1 style={{color:'darkblue',fontFamily:'sans-serif',fontSize:'60px'}}><strong>Shaping Minds,<br /> Building Futures</strong></h1>
                    <p>Bright Future Academy provides quality education, practical skills, and real-world exposure to help students achieve their goals and build successful careers.</p>
                    <div>
                        <button className="btn btn-primary">Explore Courses &gt; </button> &nbsp;&nbsp;
                        <button className="btn border border-2" >Learn More</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="./Home.jpg" />
                </div>
            </div>

        </div>
    )
}

export default Home;