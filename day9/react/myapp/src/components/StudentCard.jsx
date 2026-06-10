function StudentCard({id,name,branch,percentage}){
    return(
        <div style={{border:'1px dashed brown', padding:'16px', borderRadius:'9px'}}>
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Branch: {branch}</p>
            <p>Percentage(%): {percentage}</p>    
        </div>
    )
}


export default StudentCard;