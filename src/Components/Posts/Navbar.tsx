import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        height: "30px",
        position: "sticky",
        display: "flex",
        top: 0,
        borderRadius: "20px 0 20px 0",
        zIndex: 10,
        backgroundColor: "blue",
        gap: "16px",
        padding: "12px 20px",
        alignItems: "center",
        margin: "6px 12px"
      }}
    >
      <NavLink to={"/"} className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>Trang Chủ</NavLink>
      <NavLink to={"/create"} className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>Đăng Bài</NavLink>
    </nav>
  )
}

export default Navbar;