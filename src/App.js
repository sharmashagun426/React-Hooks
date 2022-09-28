import './App.css';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import MyTodos from './Components/Memo';
import Todos from './Components/UseReducer';

function App() {
  return (
    <div className="App">
    <p>You can access all components using routing separately.</p>
    <h3>UseReducer: <Link to={"/use-reducer"}>useReducer</Link></h3>
    <h3>UseMemo: <Link to={"/use-memo"}>UseMemo</Link> </h3>
    <h3>UseCallBack: <Link to={"/use-callback"}>UseCallBack</Link> </h3>
    <h3>Memo: I have impelemnted and wraped component using memo() with UseCallBack hooks.</h3>
   <h4 style={{color: "red"}}> Note: To confirm the functionality please check "console.log()" </h4>

      <Routes>
      <Route path="/use-reducer" element={<Todos />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/memo" element={<MyTodos />} />
      </Routes>
    </div>
  );
}

export default App;
