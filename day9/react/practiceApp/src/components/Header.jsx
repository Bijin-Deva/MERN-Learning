
function Header({setScreen}){
    return (
        <header style={{
            backgroundColor: 'beige', 
            padding: '20px', 
            display: 'flex',        
            alignItems: 'center',     
            justifyContent: 'space-between' 
        }}>
       
            <div style={{fontFamily: '-apple-system'}}>
                <strong style={{color: 'darkblue', fontSize: '25px'}}>
                    Bright Future Academy
                </strong> 
                <div style={{color: 'brown', fontSize: '16px', marginTop: '5px'}}>
                    Learn Today, Lead Tomorrow
                </div>
            </div>


            <div style={{ fontFamily: '-apple-system', fontSize: '16px' }}>
                <span 
                    onClick={() => setScreen('home')} 
                    style={{ marginRight: '20px', cursor: 'pointer' }}
                >
                    Home
                </span>
                <span 
                    onClick={() => setScreen('courses')} 
                    style={{ marginRight: '20px', cursor: 'pointer' }}
                >
                    Courses
                </span> 
                <span 
                    onClick={() => setScreen('about')} 
                    style={{ marginRight: '20px', cursor: 'pointer' }}
                >
                    About
                </span>
                <span 
                    onClick={() => setScreen('contact')} 
                    style={{ cursor: 'pointer' }}
                >
                    Contact
                </span>
            </div>
        </header>
    )
}

export default Header;