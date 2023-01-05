import Key from "./Key";
import {
  BackspaceIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { TextContext } from "../App";

const Keyboard = () => {
  const { text, setText } = useContext(TextContext);
  const [notice, setNotice] = useState("Copy to clipboard");
  const k1 = ["ذ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
  const k2 = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"];
  const k3 = ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"];
  const k4 = ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ"];

  return (
    <section className="w-1/2 mx-auto">
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
          onClick={() => {
            setText(text + " ");
          }}
          className="flex justify-center items-center w-80 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        ></div>
        <div
          onClick={() => {
            setText(text.slice(0, -1));
          }}
          className="flex justify-center items-center w-14 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
        >
          <BackspaceIcon className="w-6" />
        </div>
      </div>
    </section>
  );
};
export default Keyboard;
