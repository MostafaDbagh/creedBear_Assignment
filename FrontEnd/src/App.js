import {Routes,Route} from 'react-router-dom'
import { LoginContainer } from "./pages/login/login-container";
import {Store} from './pages/dashboard/userStore'
import {LOGIN,DASH_BOARD} from './constants/web-constant'
import RequireAuth from './hooks/checkAuth';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<LoginContainer />} />
      <Route path={LOGIN} element={<LoginContainer />} />
      <Route path={DASH_BOARD} element={<RequireAuth><Store/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
