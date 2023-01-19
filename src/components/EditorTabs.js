import useEditor from "../hooks/userEditor";

function EditorTabs() {
  const { files, setFiles, fileActive, setFileActive } = useEditor();

  const handleAddNewFile = () => {
    const name = prompt("¿Cómo quieres que se llame tu nuevo archivo?");
    let dataFiles = [...files];
    let lastId = dataFiles[dataFiles.length - 1].id + 1;

    dataFiles.push({
      name,
      id: lastId,
      code: "",
      language: "java",
    });

    setFiles(dataFiles);
    setFileActive(lastId);
  };

  const handleClickTab = (e) => {
    if (!e.target.className.includes("tab-item")) return;

    const tabId = e.target.getAttribute("data-id");
    setFileActive(parseInt(tabId));
  };

  return (
    <ul
      className="w-full flex bg-gray-900 border-b-2 border-gray-700"
      onClick={handleClickTab}
    >
      {files.map((tab) => (
        <li
          key={tab.name}
          data-id={tab.id}
          className={`tab-item cursor-pointer border-r-2 border-gray-700 px-4 py-2 ${
            tab.id === fileActive ? "bg-sky-900" : ""
          }`}
        >
          {tab.name}
        </li>
      ))}

      <li
        title="Add new file"
        className="cursor-pointer border-r-2 border-gray-700 px-4 py-2"
        onClick={handleAddNewFile}
      >
        +
      </li>
    </ul>
  );
}

export default EditorTabs;
