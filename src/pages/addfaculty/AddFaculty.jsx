import React from 'react';
import './addFaculty.css';
import { API_FACULTY_URL} from '../../Global';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function AddFaculty(){
    const navigate = useNavigate();
    const [facultyCode, setFacultyCode] = useState("");
    const [facultyName, setFacultyName] = useState("");
    const [studnentCode, setStudnentCode] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [studentCourse, setStudentCourse] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
  
   
        
    return(
        <div className="addFaculty">
            <button className="addFacultyBackButton"
                onClick={()=> navigate('/')}
            >
                <ArrowBackIosNewIcon/>
            </button>
                <div className="addFacultyContainer">
                    <h3 className="addFacultyTitle">Add Faculty and Student Details</h3>
                    <div className="addFacultyForm">
                        <form className="addForm">
                            <div className="addfacultyItems">
                                <lable>FacultyCode</lable>
                                <input 
                                    type="text"                                    
                                    placeholder="Enter the facultycode"
                                    value={facultyCode}
                                    onChange={event => setFacultyCode(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>FacultyName</lable>
                                <input 
                                    type="text" 
                                    placeholder="Enter the facultyname"
                                    value={facultyName}
                                    onChange={event => setFacultyName(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudnentCode</lable>
                                <input 
                                    type="text" 
                                    placeholder="Enter the studentcode"
                                    value={studnentCode}
                                    onChange={event => setStudnentCode(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudentName</lable>
                                <input 
                                    type="text" 
                                    placeholder="Enter the studentname"
                                    value={studentName}
                                    onChange={event => setStudentName(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudentEmail</lable>
                                <input 
                                    type="email" 
                                    placeholder="Enter the email"
                                    value={studentEmail}
                                    onChange={event => setStudentEmail(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudentPassword</lable>
                                <input 
                                    type="password" 
                                    placeholder="Enter the password"
                                    value={studentPassword}
                                    onChange={event => setStudentPassword(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudentCourse</lable>
                                <input 
                                    type="text" 
                                    placeholder="Enter the course"
                                    value={studentCourse}
                                    onChange={event => setStudentCourse(event.target.value) }
                                />
                            </div>
                            <div className="addfacultyItems">
                                <lable>StudentPhone</lable>
                                <input 
                                    type="text" 
                                    placeholder="Enter the phone"
                                    value={studentPhone}
                                    onChange={event => setStudentPhone(event.target.value) }    
                                />
                            </div>
                        </form>
                        <button 
                            className="addFacultyButtonBottom"
                            onClick={ () => {
                                const newFaculty = {
                                    facultyCode,
                                    facultyName,
                                    studnentCode,
                                    studentName,
                                    studentEmail,
                                    studentPassword,
                                    studentCourse,
                                    studentPhone
                                }
                                fetch(`${API_FACULTY_URL}`, {
                                    method: "POST",
                                    body: JSON.stringify(newFaculty),
                                    headers: {
                                        "Content-type": "application/json",
                                    }
                                })
                                .then((data) => data.json())
                                .then(()=> navigate('/'))
                            } }   
                        >Create</button>
                    </div>
                </div>
        </div>
    )
}