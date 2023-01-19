import { useContext } from "react";

import { EditorContext } from "../context/EditorContext";

function useEditor() {
  const context = useContext(EditorContext);

  return {
    ...context,
  };
}

export default useEditor;
