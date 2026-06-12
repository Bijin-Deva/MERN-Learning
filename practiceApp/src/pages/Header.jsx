import {Link} from "react-router-dom";
function Header(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 ">
                        <h2 style={{color:'darkblue',fontFamily:'sans-serif',fontSize:'30px',textAlign:'left',padding:'2px',marginTop:'3px'}}>
                            <strong>Bright Future Academy</strong></h2>
                            <p>Learn Today,Lead Tomorrow</p>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header;