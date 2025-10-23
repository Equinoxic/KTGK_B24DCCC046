import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import TrangChu from "./Pages/TrangChu"
import DangBai from "./Pages/DangBai"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="/create" element={<DangBai /> }/>
          <Route path="/posts/:id" />
          <Route path="/posts/edit/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
