
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
    import ContextApp from "./componet/Context"
    import PostTable from "./componet/User"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./componet/About"
import Contact from "./componet/Contact"
  import Home from "./componet/Home"
  function App(){
 
    const [showCounter, setShowCounter] = useState(true);
    const [propTitle, setPropTitle] = useState('Old title value');
    function changeTitle(){
      setPropTitle('New value');
    }
    const [selectedPost, setSelectedPost] = useState([]);
    function slectPost (post){
      setSelectedPost(slectPost =>[... slectPost,post])
    }
    function removePost (indexRemove){
      setSelectedPost(post=>post.filter((value,index)=>index !== indexRemove));
    }
  return (
    <>
 <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>

      <div className=""  style={{  backgroundImage: `url(${logo})`, width:"90%", margin:"0 auto", padding:"13%"}}>
     <TextComponent></TextComponent>
    </div>
       <Mybutton></Mybutton>

       <Pricing></Pricing>
        <Useeffect></Useeffect>
    <ContextApp ></ContextApp>
    
    <ul>
      {selectedPost.map((post,index)=>{
        return <li kay={index} className="">{post.id} <button className="btn btn-danger" onClick={()=>removePost(index)}></button></li>
      })}
    </ul>
    <PostTable title= "" onSelectPost={slectPost}></PostTable>
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
 