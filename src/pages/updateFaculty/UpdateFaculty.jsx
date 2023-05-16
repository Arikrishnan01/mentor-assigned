import React from 'react';
import './updateFaculty.css';
import { API_FACULTY_URL} from '../../Global';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function AddFaculty(){
    const { bookid } = useParams();
    // const [ book, setBook ] = useState(null);
    const navigate = useNavigate();
    const [facultyCode, setFacultyCode] = useState("");
    const [facultyName, setFacultyName] = useState("");
    const [studnentCode, setStudnentCode] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [studentCourse, setStudentCourse] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
   
    useEffect(() => {
            fetch(`${API_FACULTY_URL}/${bookid}`,{
                mathod: "GET"
            })
            .then((response) => response.json())
            .then((bk) => {
                setFacultyCode(bk.facultyCode)
                setFacultyName(bk.facultyName)
                setStudnentCode(bk.studnentCode)
                setStudentName(bk.studentName)
                setStudentEmail(bk.studentEmail)
                setStudentPassword(bk.studentPassword)
                setStudentCourse(bk.studentCourse)
                setStudentPhone(bk.studentPhone)
            })
    },[]);
    
    

    return(
            <div className="addFaculty">
                <button className="addFacultyBackButton"
                    onClick={()=> navigate('/')}
                >
                    <ArrowBackIosNewIcon/>
                </button>
                    <div className="addFacultyContainer">
                        <h3 className="addFacultyTitle">Update Faculty and Student Details</h3>
                        <div className="addFacultyForm">
                            <form className="addForm">
                                <div className="addfacultyItems">
                                    <TextField
                                        id="facultyCode"
                                        name="facultyCode"
                                        type="text"
                                        label="FacultyCode" 
                                        variant="outlined"                                    
                                        value={facultyCode}
                                        onChange={(event) => setFacultyCode(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="facultyName"
                                        name="facultyName"
                                        type="text" 
                                        label="FacultyName" 
                                        variant="outlined" 
                                        value={facultyName}
                                        onChange={(event) => setFacultyName(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="studnentCode"
                                        name="studnentCode"
                                        type="text"
                                        label="StudnentCode" 
                                        variant="outlined" 
                                        value={studnentCode}
                                        onChange={(event) => setStudnentCode(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="studentName"
                                        name="studentName"
                                        type="text"
                                        label="StudentName" 
                                        variant="outlined" 
                                        value={studentName}
                                        onChange={(event) => setStudentName(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField
                                        id="studentEmail"
                                        name="studentEmail" 
                                        type="email"
                                        label="StudentEmail" 
                                        variant="outlined" 
                                        value={studentEmail}
                                        onChange={(event) => setStudentEmail(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="studentPassword"
                                        name="studentPassword"
                                        type="password"
                                        label="StudentPassword" 
                                        variant="outlined" 
                                        value={studentPassword}
                                        onChange={(event) => setStudentPassword(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="studentCourse"
                                        name="studentCourse"
                                        type="text" 
                                        label="StudentCourse" 
                                        variant="outlined"
                                        value={studentCourse}
                                        onChange={(event) => setStudentCourse(event.target.value) }
                                    />
                                </div>
                                <div className="addfacultyItems">
                                    <TextField 
                                        id="studentPhone"
                                        name="studentPhone"
                                        type="text"
                                        label="StudentPhone" 
                                        variant="outlined" 
                                        value={studentPhone}
                                        onChange={(event) => setStudentPhone(event.target.value) }    
                                    />
                                </div>
                            </form>
                            <button 
                                className="addFacultyButtonBottom"
                                onClick={ () => {
                                    const updateFaculty = {
                                        facultyCode: facultyCode,
                                        facultyName: facultyName,
                                        studnentCode: studnentCode,
                                        studentName: studentName,
                                        studentEmail: studentEmail,
                                        studentPassword: studentPassword,
                                        studentCourse: studentCourse,
                                        studentPhone: studentPhone
                                    }
                                    fetch(`${API_FACULTY_URL}/${bookid}`, {
                                        method: "PUT",
                                        body: JSON.stringify(updateFaculty),
                                        headers: {
                                            "Content-type": "application/json",
                                        }
                                    })
                                    .then((data) => data.json())
                                    .then(() => navigate('/'))
                                } }   
                            >Update</button>
                        </div>
                    </div>
            </div>
        )
    }  
    
    
