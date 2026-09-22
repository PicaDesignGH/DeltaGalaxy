import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Preloader from "./components/common/Preloader";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// About
import Journey from "./pages/about/Journey";
import Team from "./pages/about/Team";

// Investors
import AnnualReport from "./pages/investors/AnnualReport";
import Policies from "./pages/investors/Policies";

// Services
import Infrastructure from "./pages/services/Infrastructure";
import Mining from "./pages/services/Mining";
import Transportation from "./pages/services/Transportation";
import Equipment from "./pages/services/Equipment";
import HumanResources from "./pages/services/HumanResources";
import WorksContract from "./pages/services/WorksContract";
import Electrical from "./pages/services/Electrical";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* About */}
        <Route path="/about/journey" element={<Journey />} />
        <Route path="/about/team" element={<Team />} />

        {/* Investors */}
        <Route
          path="/investors/annual-report"
          element={<AnnualReport />}
        />
        <Route
          path="/investors/policies"
          element={<Policies />}
        />

        {/* Services */}
        <Route
          path="/services/infrastructure"
          element={<Infrastructure />}
        />
        <Route path="/services/mining" element={<Mining />} />
        <Route
          path="/services/transportation"
          element={<Transportation />}
        />
        <Route
          path="/services/equipment"
          element={<Equipment />}
        />
        <Route
          path="/services/hr"
          element={<HumanResources />}
        />
        <Route
          path="/services/works-contract"
          element={<WorksContract />}
        />
        <Route
          path="/services/electrical"
          element={<Electrical />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;



// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
// import Preloader from "./components/common/Preloader";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   if (isLoading) {
//     return <Preloader onComplete={() => setIsLoading(false)} />;
//   }

//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;