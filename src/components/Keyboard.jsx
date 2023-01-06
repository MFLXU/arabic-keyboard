import Key from "./Key";
import {
  BackspaceIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState, useEffect, useCallback } from "react";
import { TextContext } from "../App";

const Keyboard = () => {
  const { text, setText, search, setSearch } = useContext(TextContext);
  const [notice, setNotice] = useState("Copy to clipboard");
  const k1 = ["ذ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
  const k2 = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"];
  const k3 = ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"];
  const k4 = ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"];
  const k5 = ["ْ", "ّ", "ً", "ٌ", "ٍ", "َ", "ُ", "ِ"];
  const spaceHandler = () => {
    setText(text + " ");
    setSearch(search + "%20");
  };
  const deleteHandler = () => {
    setText(text.slice(0, -1));
  };
  const handleKeyboard = useCallback((event) => {
    if (event.code === "Space") {
      spaceHandler();
    }
    if (event.code === "Backspace") {
      deleteHandler();
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <section className="w-1/2 mx-auto">
      <div className="flex justify-center relative items-center gap-1 mb-1">
        {k5.map((key) => {
          return <Key KeyVal={key} t={1} />;
        })}
        <a
          href={"https://www.google.com/search?q=" + search}
          target="_blank"
          className="clipboard relative flex justify-center right-0 absolute items-center w-20 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        >
          <MagnifyingGlassIcon className="w-6" />
          <div className="cb-notice absolute bg-black bg-opacity-50 p-2 w-32 flex justify-center items-center rounded-md top-9 -right-20 duration-300 text-sm">
            <p>Search on Google</p>
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center gap-1 mb-1">
        {k1.map((key) => {
          return <Key KeyVal={key} />;
        })}
      </div>
      <div className="flex justify-center items-center gap-1 mb-1">
        {k2.map((key) => {
          return <Key KeyVal={key} />;
        })}
      </div>
      <div className="flex justify-center items-center gap-1 mb-1">
        {k3.map((key) => {
          return <Key KeyVal={key} />;
        })}
      </div>
      <div className="flex justify-center items-center gap-1 mb-1">
        {k4.map((key) => {
          return <Key KeyVal={key} />;
        })}
      </div>

      <div className="flex justify-center items-center gap-1">
        <div
          onClick={() => {
            navigator.clipboard.writeText(text);
            setNotice("Text Copied!");
            setTimeout(() => {
              setNotice("Copy to clipboard");
            }, 3000);
          }}
          className="clipboard flex justify-center relative items-center w-14 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        >
          <ClipboardDocumentIcon className="w-6" />
          <div className="cb-notice absolute bg-black bg-opacity-50 p-2 w-32 flex justify-center items-center rounded-md top-9 right-5 duration-300 text-sm">
            <p>{notice}</p>
          </div>
        </div>
        <div
          onClick={spaceHandler}
          className="flex justify-center items-center w-80 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        ></div>
        <div
          onClick={deleteHandler}
          className="flex justify-center items-center w-14 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        >
          <BackspaceIcon className="w-6" />
        </div>
      </div>
    </section>
  );
};
export default Keyboard;
