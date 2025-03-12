import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { AuthProvider, useAuth} from "./Hooks/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}

const MainRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/profile" element={user ? <Profile /> : <Login />} />
    </Routes>
  );
};

export default App;

