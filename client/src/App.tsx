import "./App.css";
import Content from "./components/common/Content";
import Footer from "./components/common/Footer";
import HeroSection from "./components/common/HeroSection";
import NavigationBar from "./components/common/NavigationBar";

function App() {
  return (
    <>
      <div className="relative w-full h-max-screen flex flex-col  bg-[white]">
        <div className="bg-[#5865F2] p-4">
          <nav className="sticky top-4">
            <NavigationBar />
          </nav>
          <main className="mt-[70px] overflow-clip h-[500px]">
            <HeroSection />
          </main>
        </div>
        <Content />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
