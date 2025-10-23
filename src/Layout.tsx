import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Posts/Navbar";
import samplePosts from "./sample";

function Layout() {
    useEffect(() => {
      localStorage.setItem("posts", JSON.stringify(samplePosts));
    }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
