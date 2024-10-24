import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        {/* Intro */}
        <Intro />

        {/* Projects */}
        <Projects />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
