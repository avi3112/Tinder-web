import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./assets/Profile";
import { Body } from "./Body";
import { Login } from "./Login";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <NavBar /> */}
      {/* <h1 className="text-xl font-bold ">hellow world</h1> */}
    </>
  );
}

export default App;
