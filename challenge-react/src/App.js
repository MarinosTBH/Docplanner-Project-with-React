import Component_header from "./Header.js"
import Aboutus from "./Aboutus.js"
import Brands from "./Brands.js"
import Stats from "./Stats.js"
import Offices from "./Offices.js"
import Joinus from "./Joinus.js"
import Footer from "./Footer.js"



import "./App.css"
function App() {
  return (
    <div className="Main">
      <Component_header/>
      <Aboutus/>
      <Brands/>
      <Stats/>
      <Offices/>
      <Joinus/>
      <Footer/>
    </div>
  );
}

export default App;
