import Login from "./pages/Login";
import News from "./pages/News";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPost from "./pages/AddPost";
import Comments from "./pages/Comments";
import ProtectedRoute from "./Components/protectedRoute";
import UnAuthorized from "./pages/UnAuthorized";

function App() {
  const isLogin = useSelector((state) => state.auth.token !== null);
  const role = useSelector((state) => state.auth.role)

  

  return (
    <>
      {isLogin && <Header />}
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path ="/unauthorized" element={<UnAuthorized/>} />


        <Route
          path="/comments/:postId"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Comments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/News"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <News />
            </ProtectedRoute>
          }
        />
       
        <Route
          path="/addpost"
          element={
            <ProtectedRoute
              isLogin={isLogin}
              role={role}
              allowedRole={["teacher"]}
            >
              <AddPost />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
