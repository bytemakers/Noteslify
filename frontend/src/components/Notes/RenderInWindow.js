import React, {useState, useEffect,useRef} from 'react'
import ReactDOM from "react-dom";

export default function RenderInWindow(props) {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );

      newWindow.current.document.head.innerHTML = window.document.head.innerHTML;
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Save reference to window for cleanup
      const curWindow = newWindow.current;

      setupBeforeUnloadListener();
     
      // Return cleanup function
      return () => {
        curWindow.close();
    }
    }
  }, [container]);

  const setupBeforeUnloadListener = () => {
    newWindow.current.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        props.closeMarkdownWindow();
        
    });
};


  return container && ReactDOM.createPortal(props.children, container);
};