import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import TrangChu from "./Pages/TrangChu"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="/create" />
          <Route path="/posts/:id" />
          <Route path="/posts/edit/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
