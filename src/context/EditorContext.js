import { createContext, useMemo, useState } from "react";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
  const [files, setFiles] = useState([
    {
      id: 0,
      name: "prueba.java",
      language: "java",
      code: "",
    },
  ]);
  const [fileActive, setFileActive] = useState(0);
  const [output, setOutput] = useState(null);

  const value = useMemo(() => {
    return {
      files,
      setFiles,
      fileActive,
      setFileActive,
      output,
      setOutput,
    };
  }, [files, fileActive, output]);

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}
