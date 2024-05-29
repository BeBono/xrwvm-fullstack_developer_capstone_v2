import LoginPanel from "./components/Login/Login"   //LoginPanel es un nombre arbitrario dado al archivo de Login dentro de esta ruta.
import RegisterPanel from "./components/Register/Register"  //RegisterPanel es un nombre arbitrario dado al archivo de Register dentro de esta ruta.
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<Dealers />} />
    </Routes>
  );
}
export default App;
