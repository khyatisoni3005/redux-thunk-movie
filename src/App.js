import React from "react";
import Home from "./components/Home";
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import LoginPage from "./components/login/LoginPage";
import { Login } from "@mui/icons-material";


function App() {
  return (

    <SnackbarProvider autoHideDuration={2000} maxSnack={6} severity="success">
      <Home />
    </SnackbarProvider>


  );
}

export default App;
