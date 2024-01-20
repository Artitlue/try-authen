import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './componet/Home.jsx'
import SignIn from "./componet/SignIn.jsx";
import SignUp from "./componet/Signup.jsx";
import AboutUs from "./componet/AboutUs.jsx";
function App() {

  return (
<BrowserRouter>
<Routes>
<Route path ="/" element = {<Home/>} />
<Route path ="/sign-in" element = {<SignIn/>} />
<Route path ="/sign-up" element = {<SignUp/>} />
<Route path ="/about-us" element = {<AboutUs/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
