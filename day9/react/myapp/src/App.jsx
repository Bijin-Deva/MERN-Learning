// function ChildComponent({message}){
//   return(
//     <h2>{message}</h2>
//   )
// }

// function ParentComponent(){
//   const greeting = "Hello from React Component! Have a good Day";
//   return(
//     <div>
//       <ChildComponent message={greeting} />
//     </div>
//   )
// }





// function App(){
//   return(
//     <div>
//       <ParentComponent />
//     </div>
//   )
// }



//Function As a Prop

// function ClickBtn({ handleClick }){
//   return(
//     <button onClick={handleClick}>
//     Click Me
//     </button>
//   )
// }


// function App(){
//   function showMessage(){
//     alert("Button CLicked from child component");
//   }
//   return(
//     <div>
//       <ClickBtn handleClick={showMessage} />
//     </div>
//   )
// }

// import StudentCard from "./components/StudentCard";

// function App(){
//   return(
//     <div>
//       <StudentCard name = "Arjun" course="MERN"  batch="CSM" />
//     </div>
//   )
// }

import Header from "./components/Header";
import StudentDashboard from "./components/StudentDashboard";

function App(){
  const students=[
    {id:1,name:"Rahul",branch:"CSE",percentage:"85%"},
    {id:2,name:"Deva",branch:"CSM",percentage:"95%"},
    {id:3,name:"Kiran",branch:"CSE",percentage:"80%"},
  ]
  return(
    <div> 
      <Header title="My Project App Title" />
      <StudentDashboard students={students} />
    </div>
  )
}
export default App;