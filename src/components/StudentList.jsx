import  StudentTable  from "./StudentTable";

function StudentList({students,setStudents}){

   return(
    <>
      <h1>Student List</h1>
    <StudentTable students={students} setStudent={setStudents}/>
    </>
   )
}

export default StudentList;