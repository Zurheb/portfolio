import { Route, Routes } from "react-router-dom"
import { Home } from "./Home/Home"
import { FooHea } from "./FooHea/FooHea"
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
 
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        // disable: function () {
        //   var maxWidth = 800;
        //   return window.innerWidth < maxWidth;
        // },
      });
    };
    loadAOS();
  }, []);
  return (
   <main className="bg-[#F5F5F5] dark:bg-[#191919]">
   <FooHea>
    <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </FooHea>
   </main>
  )
}

export default App
