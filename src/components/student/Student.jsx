import React from 'react';
import './student.css';
import {
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody
} from  '@mui/material';
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {API_FACULTY_URL} from '../../Global';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function Student(){
    const navigate = useNavigate();
    const [allFaculty, setAllFaculty] = useState([]);

    useEffect(() => {
        fetch(`${API_FACULTY_URL}`,{
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setAllFaculty(data))
    },[]);

    return(
        <div className="student">
           <div className="studentHeadContainer">
                <h1 className="studentHeadTitle">Student Details</h1>
                    <button 
                    className="studentHeadButton"
                    onClick={() => navigate('/add-faculty')}
                    >Asign Faculty</button>
           </div>
           <div className="studentTableContainer">
           <TableContainer className="studentTablecontainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>FacultyCode</TableCell>
                            <TableCell>FacultyName</TableCell>
                            <TableCell>StudnentCode</TableCell>
                            <TableCell>StudentName</TableCell>
                            <TableCell>StudentEmail</TableCell>
                            <TableCell>StudentPassword</TableCell>
                            <TableCell>StudentCourse</TableCell>
                            <TableCell>StudentPhone</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allFaculty.map(data => (
                                <TableRow key={data.id}>
                                    <TableCell>{data.facultyCode}</TableCell>
                                    <TableCell>{data.facultyName}</TableCell>
                                    <TableCell>{data.studnentCode}</TableCell>
                                    <TableCell>{data.studentName}</TableCell>
                                    <TableCell>{data.studentEmail}</TableCell>
                                    <TableCell>{data.studentPassword}</TableCell>
                                    <TableCell>{data.studentCourse}</TableCell>
                                    <TableCell>{data.studentPhone}</TableCell>
                                    <TableCell>
                                        <buttn 
                                            className="tableEditButton"
                                            onClick={()=> navigate(`/update-faculty/${data.id}`)}
                                        >Edit</buttn>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteOutlineOutlinedIcon
                                            className="tableDeleteIcon"
                                            onClick={ ()=>{
                                                fetch(`${API_FACULTY_URL}/${data.id}`,{
                                                    method: "DELETE"
                                                })
                                                .then((res) => alert(res.status))
                                                .then(() => navigate('/'))
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
           </TableContainer>
           </div>
        </div>
    )
};