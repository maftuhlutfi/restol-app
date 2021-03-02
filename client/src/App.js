import { Route, Switch } from "react-router-dom";
import AppPages from "./components/pages/App";
import LoginRegisterPage from "./components/pages/LoginRegister";

function App() {
  return (
    <Switch>
      <Route path='/' render={() => <AppPages />} />
      <Route 
        exact 
        path='/login' 
        render={() => <LoginRegisterPage type='login' />}
      />
      <Route 
        exact 
        path='/signup' 
        render={() => <LoginRegisterPage type='signup' />}
      />
    </Switch>
  );
}

export default App;
