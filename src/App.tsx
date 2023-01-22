import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempretureAndDetail from "./Components/TempretureAndDetail";
import Forcast from "./Components/Forcast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempretureAndDetail />
      <Forcast title="Hourly Forcast" />
      <Forcast title="Hourly Forcast" />
    </div>
  );
}

export default App;
