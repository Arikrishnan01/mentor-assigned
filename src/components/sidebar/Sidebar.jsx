import React from 'react';
import './sidebar.css';
import GroupIcon from '@mui/icons-material/Group';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active " >
                            <Link to='/' className="link">
                                <Diversity3Icon className="sidebarIcon"/>
                                Student
                            </Link>
                        </li>
                        <li className="sidebarListItem ">
                            <Link to='/faculty-list' className="link">
                                <GroupIcon className="sidebarIcon"/>
                                Faculty                                   
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to='/course' className="link">
                                <MenuBookIcon className="sidebarIcon"/>
                                Courses
                            </Link>
                        </li>
                            
                    </ul>
                </div>
            </div>
        </div>
    )
}