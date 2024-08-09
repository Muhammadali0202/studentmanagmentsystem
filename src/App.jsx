import './App.css'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import { getDocs,collection } from 'firebase/firestore'
import { useState } from 'react'
import { db } from './firebaseConfig'
import { useEffect } from 'react'

function App() {
  const [students, setStudents] = useState([]);
  const studentsCollection = collection(db, 'students')
  
  const getSudents = async() => {
    const studentSnapshot = await getDocs(studentsCollection)
    const studentList = studentSnapshot.docs.map(doc => (
      {
        id: doc.id,
        ...doc.data()
      }
    ))
    console.log(studentList)
    setStudents(studentList)
  }

  useEffect(() => {
    getSudents()
  }, [])
 

  return (
    <div className='app-container'>
     <h1 className='app-title'>Student Management System</h1>
     <CreateStudent getSudents = {getSudents} />
     <StudentList students = {students} setStudents={setStudents} />
    </div>
  )
}

export default App
