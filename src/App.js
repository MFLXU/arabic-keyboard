import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div>
      <div className="container ">
        <h1 className="my-10 text-center text-4xl font-bold">
          Arabic Keyboard
        </h1>
        <div className="w-1/2 mx-auto mb-4">
          <textarea
            className="w-full bg-neutral-900 text-white outline-none border-2 rounded-md p-2 border-neutral-800 focus:border-white"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
