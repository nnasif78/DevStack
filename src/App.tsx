import Navbar from "./Navbar"
import Hero from './Hero'
import Technologies from "./Technologies"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify'


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