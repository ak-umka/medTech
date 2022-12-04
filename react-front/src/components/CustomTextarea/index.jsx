import { useState } from "react";

function CustomTextArea() {
  const [content, setContent] = useState(
    <i className="p-1 bg-black text-white">Text</i>
  );
  return (
    <>
      <div contentEditable="true" className="w-auto">
        {content}
      </div>
    </>
  );
}

export default CustomTextArea;
