import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyProjectPage from "./pages/my-project";
import MyWorkPage from "./pages/my-work";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Notification from "./pages/notification";

function App() {
  return (
    <BrowserRouter className="flex flex-col h-full">
      <Header />
      <div className="flex bg-gray-100 h-full pt-5">
        <Sidebar />
        <div className="bg-white w-full rounded-tl-[30px] shadow px-5 pt-5">
          <Routes>
            <Route path="/" element={<MyProjectPage />} />
            <Route path="/my-work" element={<MyWorkPage />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
