import HeaderLayout from "./Pages/Layout/layout";
import MainPage from "./Pages/MainPage/mainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
