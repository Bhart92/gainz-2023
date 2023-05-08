import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const setViewportHeight = () => {
    console.log("fired viewport");
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    document.documentElement.style.setProperty("position", "absolute");
    document.body.style.setProperty("width", "100vw");
    document.body.style.setProperty("position", "absolute");
    // We listen to the resize event
    window.addEventListener("resize", resizeFunction);
    // if (isMobile) window.addEventListener("orientationchange", resizeFunction);
  };

  const resizeFunction = () => {
    console.log("resize func");
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    document.documentElement.style.setProperty("position", "absolute");
    document.body.style.setProperty("position", "absolute");
    window.setTimeout(() => {
      vh = window.innerHeight * 0.01;
      vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
      document.documentElement.style.setProperty("position", "absolute");
      document.body.style.setProperty("position", "absolute");
    }, 500);
  };
  useEffect(() => {
    setViewportHeight();
  });
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
