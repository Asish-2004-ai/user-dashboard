import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users/1" />} />
        <Route path="/users/:id" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
