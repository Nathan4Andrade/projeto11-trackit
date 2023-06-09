import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import { ContextProvider } from "./contexts/Context";
import { UserProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route path="/habitos" element={<HabitosPage />} />
              <Route path="/hoje" element={<HojePage />} />
              <Route path="/historico" element={<HistoricoPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContextProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
