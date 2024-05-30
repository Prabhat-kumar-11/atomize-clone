import "./App.css";
import { NavBar } from "./components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { CardContainer } from "./components/CardContainer";
import { StylingCard } from "./components/StylingCard";
import flexi from "./assets/flexibleGrid.svg";
import style from "./assets/styleGrid.svg";
import spacing from "./assets/spacing.svg";
import responsive from "./assets/responsive.svg.svg";
import { ToolsContainer } from "./components/ToolsContainer";
import { LastSection } from "./components/LastSection";
import { MiddleCard } from "./components/MiddleCard";
import { CodeSection } from "./components/CodeSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <section className="pt-[160px] pb-[96px] flex justify-center">
        <div className="max-w-[1184px] space-y-4 text-center">
          <p className="text-2xl sm:text-4xl font-bold pb-[16px] text-[56px]">
            Design System for React JS
          </p>
          <p className="w-full max-w-[576px] mx-auto text-md md:text-lg">
            Atomize React is a UI framework that helps developers collaborate
            with designers and build consistent user interfaces effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="bg-blue-500 p-3 px-8 text-white rounded-lg hover:bg-blue-400">
              Get Started Now
            </button>
            <button className="bg-gray-200 p-3 px-8 text-black rounded-lg flex items-center gap-2 hover:bg-gray-300">
              <FontAwesomeIcon icon={faPlay} className="text-2xl" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </section>

      <CardContainer />

      <section className="w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-[220px] justify-between items-center">
        <div>
          <button className="text-white px-4 py-2 bg-black rounded-3xl">
            Key features
          </button>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-7">
            Why use Atomize React?
          </p>
          <p className="text-gray-500 w-full sm:w-2/3 lg:w-[460px] mt-3">
            Atomize React helps you in building fully responsive websites and
            products that match your style.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10 pb-10 sm:pb-[85px] border-b-[2px] border-gray-400">
          <StylingCard
            icon={flexi}
            heading={"Flexible Grid"}
            paragraph={"Change grid variables or give decimal column size."}
          />
          <StylingCard
            icon={style}
            heading={"Style guide"}
            paragraph={"Update theme throughout the application easily."}
          />
          <StylingCard
            icon={spacing}
            heading={"Spacing"}
            paragraph={"A better and controlled way of update spacing."}
          />
          <StylingCard
            icon={responsive}
            heading={"Responsive"}
            paragraph={"Better control to make the app responsive."}
          />
        </div>
      </section>
      <MiddleCard />
      <CodeSection />
      <section className="w-full px-4 md:px-12 lg:px-24 pt-24 md:pt-32 lg:pt-40 justify-between items-center">
        <p className="text-2xl md:text-3xl lg:text-4xl max-w-xl mx-auto font-medium text-center">
          A combination of tools to design and develop modern applications at
          ease.
        </p>
        <div className="w-full max-w-screen-xl mt-12 md:mt-20 pb-24 md:pb-32 border-b-2 border-gray-400">
          <ToolsContainer />
        </div>
      </section>

      <section className="w-full  px-[268px]  justify-between items-center mt-[80px]">
        <LastSection />
        <div className="w-[1140px] h-[190px] py-[64px] px-[56px] bg-[#F7F8F9] flex justify-between rounded-full">
          <div className="">
            <p className="text-[26px] font-semibold">
              UI Templates are on their way 🚀
            </p>
            <p className=" mt-3 text-[#505256]">
              Official UI templates build on Atomize React will be released very
              soon.
            </p>
          </div>
          <div className="w-full max-w-[192px] mx-auto">
            <div className="bg-black text-white rounded-full py-2 px-4 sm:py-3 sm:px-6 flex justify-between text-sm sm:text-base">
              Get Notified <span className="hidden sm:inline-block">➜</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
