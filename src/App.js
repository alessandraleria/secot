import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Login from "./pages/login/login";
import Usuarios from "./pages/usuarios/list";
import Palestras from "./pages/palestras/list";
import QRCode from "./pages/palestras/lerQrCode";
import CadastroUsuarios from "./pages/usuarios/addUserForm";
const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastrar-usuario" element={<CadastroUsuarios />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/ler-qr-code" element={<QRCode />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
