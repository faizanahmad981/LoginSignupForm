
import './App.css';
import FormHandling from './component/login';
import LoginForm from './pages/index'
function App() {
  return (
    <div style={{ padding: "20px" }}>
    <h1 style={{ textAlign: "center" }}>Registration Form</h1>
    {/* <LoginForm /> */}
    <FormHandling/>
  </div>
  );
}

export default App;
