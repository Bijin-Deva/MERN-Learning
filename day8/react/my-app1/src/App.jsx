import './App.css';

function StudentCard({name, course, city}){
  return(
    <div style={{border: '1px solid #ccc',padding:'16px',borderRadius:'8px',margin:'8px',width:'150px', boxShadow:'0 4px 12px red'}}>
      <h3>Name: {name}</h3>
      <p><strong>Course: </strong>{course}</p>
      <p><strong>City: </strong>{city}</p>
    </div>
  )
}



function App(){
  // const students = ["Ravi","Kishore","Srjana","sneha"];



  return(
    <div>
      {/* <h2>Student List</h2>
      <ul>
        {
          students.map((student,index)=>(
            <li key={index}>{student}</li>
          ))
        }
      </ul> */}
      <h1>My Class Room</h1>
      <StudentCard name="Arjun" course="MERN Stack" city="Kurnool"/>
      <StudentCard name="Priya" course="CSS" city="Hyderabad"/>
      <StudentCard name="Kiran" course="HTML" city="Chennai"/>
      
      
    </div>
  )
}
export default App;
