import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="nav bg-green-400">nav</div>
        <div className="flex">
          <div className="aside w-full hidden lg:block bg-blue-400">aside</div>
          <div className="main w-full bg-red-400">main</div>
        </div>
      </div>
    </>
  );
}

export default App;
