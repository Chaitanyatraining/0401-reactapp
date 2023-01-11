import ClassComp from "./ClassComp"
import StylingComp from "./Components/Stylings/StylingComp"
import FuncComp from "./FuncComp"
import Header from "./Header"

const App = ()=>{
  const productdetails = {
    Name : "laptops",
    price : 10000,
    description : "this is a laptop",
  }
  return(
    <div>
      {/* <Header />
      <h2>Welcome to react</h2>
      <ClassComp productName="iphone" productPrice="10000" />
      <hr />
      <FuncComp courseName="ReactJs" courseDuration="3Months" /> */}
      <StylingComp />
    </div>
  )
}

export default App