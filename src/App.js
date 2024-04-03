import './App.css';
import TaskList from './components/taskList/TaskList';
import NewTask from './components/newTask/NewTask';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <nav>
        <ol className='li-navbar'>
          <li><Link to={"/"}>Task Manager</Link></li>
          <li><Link to={"/newtask"}>New Task</Link></li>
        </ol>
      </nav>

      <Routes>
        <Route path='/' element={<TaskList />}></Route>
        <Route path='/newtask' element={<NewTask />}></Route>
        <Route path='*' element={<p>Page Not Found</p>}></Route>
      </Routes>

    </div>
  );
}

export default App;
