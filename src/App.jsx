import { BrowserRouter} from "react-router-dom"
import Header from "./components/Header"
import Programs from "./components/Programs"
import Plans from "./components/Plans"
import Reviews from "./components/Reviews"
import Trainers from "./components/Trainers"
import Gallery from "./components/Gallery"
import Faq from "./components/Faq"
import Contact from "./components/Contact"





const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Programs/>
    <Plans/>
    <Reviews/>
    <Trainers/>
    <Gallery/>
    <Faq/>
    <Contact/>

    
       </BrowserRouter>
  )
}

export default App