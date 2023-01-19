import { useState } from "react";

import Header from "./Header";
import Editor from "./Editor";
import Console from "./Console";

function MainEditor() {
  const [loading, setLoading] = useState(false);

  const updateLoading = (newLoading) => setLoading(newLoading);

  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-[60px_1fr] min-h-screen">
      <div className="border-b-2  border-gray-700 col-span-2">
        <Header />
      </div>
      <div className="col-span-1">
        <Editor updateLoading={updateLoading} />
      </div>

      <div className="col-span-1">
        {/* <Tests /> */}
        <Console isLoading={loading} />
      </div>
    </div>
  );
}

export default MainEditor;
