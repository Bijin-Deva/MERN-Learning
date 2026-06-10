import StudentCard from "./StudentCard";

function StudentDashboard({students}){
    return(
        <div>
            {students.map((student) =>(
                <StudentCard 
                id={student.id}
                name={student.name}
                branch={student.branch}
                percentage={student.percentage}
                />
            ))}
        </div>
    )
}

export default StudentDashboard;