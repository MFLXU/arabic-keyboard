import { useContext } from "react";
import { TextContext } from "../App";

const Key = ({ KeyVal, t }) => {
  const { text, setText, search, setSearch } = useContext(TextContext);
  return (
    <div
      onClick={() => {
        setSearch(text + KeyVal);
        setText(text + KeyVal);
      }}
      className={
        t === 1
          ? "flex justify-center items-center w-10 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
          : "flex justify-center items-center w-10 h-12 md:h-16 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
      }
    >
      {KeyVal}
    </div>
  );
};

export default Key;
