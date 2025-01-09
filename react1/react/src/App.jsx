 import Header from "./componet/Header"
  import Footer from "./componet/Footer"
  import TextComponent from "./componet/TextComponent"
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min'
  import  logo from './assets/coffee1.png'
 import Mybutton from "./componet/cutomcss/mybutton" 
 import Section from "./componet/Section"
  import logoone from "./assets/cafe1.png"
  import SectionSecond from "./componet/SectionSecond"
   import Pricing from "./componet/pricing"
   import Useeffect from "./componet/Useeffect"
   import Useref from "./componet/Useref" 
function App() {
  
  return (
    <>
 <Header></Header>

      <div className=""  style={{  backgroundImage: `url(${logo})`, width:"90%", margin:"0 auto", padding:"13%"}}>
     <TextComponent></TextComponent>
    </div>
       <Mybutton></Mybutton>

       <Pricing></Pricing>
        <Useeffect></Useeffect>
        <div className="container">
        <Useref></Useref>
        </div>
       <div className=""  style={{  backgroundImage: `url(${logoone})`, width:"90%", margin:"0 auto", padding:"1%"}}>
       <Section></Section>
       </div>
       <div className="" style={{backgroundColor:" rgba(129, 97, 59, 0.2)",width:"90%", margin:"0 auto", padding:"1%"}}>
       <SectionSecond></SectionSecond>
      </div>

       <div className="" style={{backgroundColor:"black",width:"90%", margin:"0 auto", padding:"1%"}}>
     <Footer></Footer>
     </div>
    
    </>
  )
}

export default App
 