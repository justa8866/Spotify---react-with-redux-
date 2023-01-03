import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route
            path="/playlist"
            element={
              // <RequireAuth>
              <Playlist />
              // </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

function useAuth() {
  // return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  // if (!auth.user) {
  //   return <p>You are not logged in.</p>;
  // }

  // return (
  //   <p>
  //     Welcome {auth.user}!{" "}
  //     <button
  //       onClick={() => {
  //         auth.signout(() => navigate("/"));
  //       }}
  //     >
  //       Sign out
  //     </button>
  //   </p>
  // );
}

export default App;
