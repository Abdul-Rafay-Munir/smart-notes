import { Routes, Route } from "react-router";
import { toast } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
import { Toaster } from "react-hot-toast";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
