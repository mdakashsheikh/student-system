import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import StudentForm from './component/StudentForm';
import ShowData from './component/ShowData';

function App() {
  return (
    <>
      <Navbar/>
      <StudentForm/>
      <ShowData/>
    </>
  );
}

export default App;
