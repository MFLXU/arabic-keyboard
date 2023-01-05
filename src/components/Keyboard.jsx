import Key from "./Key";
import {
  BackspaceIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const Keyboard = () => {
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
        <div className="clipboard flex justify-center relative items-center w-10 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md">
          <ClipboardDocumentIcon className="w-6" />
          <div className="cb-notice absolute bg-black bg-opacity-50 p-2 w-32 flex justify-center items-center rounded-md top-9 right-5 duration-300 text-sm">
            <p> Copy to clipboard</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-80 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md"></div>
        <div className="flex justify-center items-center w-10 h-8 cursor-pointer text-xl font-medium bg-neutral-800 active:scale-90 hover:bg-neutral-700 duration-300 rounded-md">
          <BackspaceIcon className="w-6" />
        </div>
      </div>
    </section>
  );
};
export default Keyboard;
