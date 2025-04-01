import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Feed } from "./components/Feed";
import { Connection } from "./components/Connection";
import { Requests } from "./components/Requests";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connection />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      {/* <NavBar /> */}
    </>
  );
}

export default App;
