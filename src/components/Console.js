import SpinnerLoader from "./SpinnerLoader";
import { Button } from "./Button";
import useEditor from "../hooks/userEditor";

function Console({ isLoading }) {
  const { output, setOutput } = useEditor();

  const handleClear = () => {
    setOutput("");
  };

  return (
    <div className="relative h-full">
      <div className="absolute p-4 h-14 w-full">Output</div>
      <div className="absolute p-4 h-4/5 w-full top-14 overflow-y-scroll text-[gray] font-mono">
        {!isLoading ? (
          <pre>{output}</pre>
        ) : (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <SpinnerLoader />
          </div>
        )}

        <Button onClick={handleClear} className="fixed bottom-10 right-4">
          Limpiar
        </Button>
      </div>
    </div>
  );
}

export default Console;
