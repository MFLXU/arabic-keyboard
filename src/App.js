import Keyboard from "./components/Keyboard";
import { createContext, useContext, useState } from "react";
export const TextContext = createContext();
function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div>
      <TextContext.Provider value={{ text, setText, search, setSearch }}>
        <div className="container ">
          <h1 className="my-10 text-center text-4xl font-bold">
            Arabic Keyboard
          </h1>
          <div className="md:w-1/2 mx-auto mb-4">
            <textarea
              className="w-full text-xl bg-neutral-900 text-white outline-none border-2 rounded-md p-2 border-neutral-800 focus:border-white"
              name=""
              id=""
              cols="30"
              rows="5"
              dir="rtl"
              value={text}
            ></textarea>
          </div>
          <Keyboard />
          <p className="text-center mt-20">
            made by{" "}
            <a
              href="https://louayekazar.com/"
              className="hover:underline font-bold"
              target="_blank"
            >
              Louaye Kazar
            </a>
          </p>
        </div>
      </TextContext.Provider>
    </div>
  );
}

export default App;
