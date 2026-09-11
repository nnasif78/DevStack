import Navbar from "./Navbar"
import Hero from './Hero'
import Technologies from "./Technologies"
import Footer from "./Footer"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <Navbar></Navbar>
        <Hero></Hero>
        <Technologies></Technologies>
        <Footer></Footer>
       
       <ToastContainer position="bottom-right" />
    </>
    )
}
export default App