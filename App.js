import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosApi from "./API/TodosApi";
import "./App.css";
import Form from "./FormValidation/Form";
import FormVal from "./FormValidation/FormVal";
import Main from "./Hooks/Main";
import About from "./React_Router/About";
// import Home from "./React_Router/Home";
// import Profile from "./React_Router/Profile";
import Home from "./React_Router2/Home";
import Profile from "./React_Router2/Profile";
import Showitem from "./React_Router2/Showitem";
import Coin from "./sample/Coin";
import Footer from "./sample/Footer";
import Header from "./sample/Header";
// import Header from "./sample/Header";
import Sample from "./sample/Sample";
import Today from "./sample/Today";
import MoreInfo from "./React_Router2/MoreInfo";

function App() {
  return (
    <div>
      {/* <Main/> */}

      {/* <Form/> */}

      {/* <FormVal /> */}

      {/* <TodosApi /> */}

      {/* React Router */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="showItem" element={<Showitem />}></Route>
          <Route path="moreInfo/:id" element={<MoreInfo/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Sample /> */}
      {/* <Header/>
<Coin/>
<Today/>
<Footer/> */}
    </div>
  );
}

export default App;
