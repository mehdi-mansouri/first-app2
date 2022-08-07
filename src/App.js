import React,{ Component} from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { Routes, Route} from "react-router-dom";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
class App extends Component {
   
    render() {
       
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/aboutus" element={<AboutUs />}/>
                    
                </Routes>
                
                <Footer />                    
            </div>      
        )
    }
}
export default App;