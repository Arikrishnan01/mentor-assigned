import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Student from './components/student/Student';
import  AddFaculty from './pages/addfaculty/AddFaculty';
import UpdateFaculty from './pages/updateFaculty/UpdateFaculty';
import FacultyList from './pages/faculty/FacultyList';
import Course from './pages/course/Course';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
          
            <Routes>
              <Route index path='/' element= {<Student/>}/>
              <Route path='/add-faculty' element= { <AddFaculty/>}/>
              <Route path='/update-faculty/:bookid' element={ <UpdateFaculty/>}/>
              <Route path='/faculty-list' element={ <FacultyList/>} />
              <Route path='/course' element={ <Course/>} />
            </Routes>
          
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
