import Courses from "./Courses";
function MainBody() {
        return(
            <div style={{ 
                flex: '1', 
                display: 'flex', 
                flexDirection: 'column' 
            }}>
                <Courses />
            </div>
        )
  }
  
  export default MainBody;