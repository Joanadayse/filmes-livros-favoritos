import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import useAuth from "./Hooks/useAuth";
import { AuthProvider} from "./Hooks/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}

const MainRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Pode ser um spinner ou algo mais estilizado
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/profile" element={user ? <Profile /> : <Login />} />
    </Routes>
  );
};

export default App;

