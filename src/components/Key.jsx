import { useContext } from "react";
import { TextContext } from "../App";

const Key = ({ KeyVal }) => {
  const { text, setText } = useContext(TextContext);
  return (
    <div
      onClick={() => {
        setText(text + KeyVal);
      }}
      className="flex justify-center items-center w-10 h-16 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"
    >
      {KeyVal}
    </div>
  );
};

export default Key;
