import './App.css';

function StateMessage({isActive})
{
  return(
    <h2 style={{ color: isActive?"green":"red" }}>
      {isActive ? "User is Active" : "User is Inactive"}
    </h2>
  )
}



function App(){
  return(
    <div>
      <StateMessage isActive={true} />
      <StateMessage isActive={false} />
    </div>
  )
}
export default App;
