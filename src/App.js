import './App.css';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
function App() {
  return (
    <div className="App">
      <FullName />
      <Adress />
      <ProfilePhoto/>
    </div>
  );
}

export default App;
