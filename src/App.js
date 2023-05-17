import{Route,Routes} from 'react-router-dom';


import Login from './component/Login';
import Navbar from './component/Navbar';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
<Route path = "/" element ={<Login/>}>

</Route>

   </Routes>
   </>
  );
}

export default App;
