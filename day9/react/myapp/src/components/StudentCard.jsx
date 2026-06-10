function StudentCard({id,name,branch,percentage}){
    const statusColor = percentage>=60?"green":"red";
    return(
        <div style={{border:'1px dashed brown', padding:'16px', borderRadius:'9px', marginTop:'5px' ,width:'200px'}}>
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Branch: {branch}</p>
            <p style={{color:
                statusColor}}>Percentage(%): {percentage}</p>    
        </div>
    )
}


export default StudentCard;