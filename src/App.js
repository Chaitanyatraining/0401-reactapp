import ClassComp from "./ClassComp"
import StylingComp from "./Components/Stylings/StylingComp"
import FuncComp from "./FuncComp"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.min.css"
import UsersData from "./Components/UsersData"
import ConditionalRendering from "./Components/ConditionalRendering"
import ContactUs from "./Components/ContactUs"
import UseStateComp from "./Components/UseStateComp"
import LifecycleMethods from "./Components/LifecycleMethods"
import Routing from "./Components/Routing/Routing"
const App = ()=>{
  const productdetails = {
    Name : "laptops",
    price : 10000,
    description : "this is a laptop",
  }
  return(
    <div>
       <Header />
       <Routing />
       {/* <LifecycleMethods /> */}
       {/* <UseStateComp /> */}
       {/* <ContactUs /> */}
       {/* <ConditionalRendering /> */}
       {/* <UsersData /> */}
      {/*<h2>Welcome to react</h2>
      <ClassComp productName="iphone" productPrice="10000" />
      <hr />
      <FuncComp courseName="ReactJs" courseDuration="3Months" /> */}
      {/* <StylingComp /> */}
    </div>
  )
}

export default App