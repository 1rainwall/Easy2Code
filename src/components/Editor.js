import CodeEditor from "@uiw/react-textarea-code-editor";

import { getOutput } from "../services/Compiler";
import { Button } from "./Button";
import EditorTabs from "./EditorTabs";
import useEditor from "../hooks/userEditor";

function Editor({ updateLoading }) {
  const { files, setFiles, fileActive, setOutput } = useEditor();

  const changeTextArea = (e) => {
    const data = [...files];
    data[fileActive].code = e.target.value;
    setFiles(data);
  };

  const handleRun = async () => {
    updateLoading(true);

    const response = await getOutput(files[fileActive].code);

    if (response === null) {
      alert("Ocurrio un error");
      return;
    }

    if (response.error.length !== 0) {
      setOutput(response.error);
      return;
    }

    setOutput(response.output);
    updateLoading(false);
  };

  return (
    <div className="relative h-full border-r-2  border-gray-700 hover:outline-none focus:outline-none">
      <EditorTabs />

      <CodeEditor
        className="block w-full h-full p-4"
        value={files[fileActive].code}
        language="java"
        placeholder="Aquí puedes escribir tu código..."
        onChange={changeTextArea}
        style={{
          background: "transparent",
          fontSize: "16px",
          color: "#eee",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />

      <Button
        onClick={handleRun}
        className="absolute bottom-10 right-4 text-red"
      >
        Probar
      </Button>
    </div>
  );
}

export default Editor;
