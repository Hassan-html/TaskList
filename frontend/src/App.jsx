import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Page from "./page";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
