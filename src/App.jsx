import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyProjectPage from "./pages/my-project";
import MyWorkPage from "./pages/my-work";

import Sidebar from "./components/side-bar"
import Header from "./components/header";
import Notification from "./pages/notification";

function App() {

  return (
    <BrowserRouter className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MyProjectPage />} />
          <Route path="/my-work" element={<MyWorkPage />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
