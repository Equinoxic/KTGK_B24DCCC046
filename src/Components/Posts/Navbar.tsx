import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        height: "20%",
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
      <Link to={"/"} className="navlink">Trang Chủ</Link>
      <Link to={"/create"} className="navlink">Đăng Bài</Link>
    </nav>
  )
}

export default Navbar;