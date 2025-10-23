import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import TrangChu from "./Pages/TrangChu"
import DangBai from "./Pages/DangBai"
import PostContent from "./Pages/PostContent"
import EditBai from "./Pages/EditBai"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="/create" element={<DangBai /> }/>
          <Route path="/posts/:id" element={<PostContent />} />
          <Route path="/posts/edit/:id" element={<EditBai />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
