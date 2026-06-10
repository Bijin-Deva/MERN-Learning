import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
function App(){

  return(
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}


export default App;