import { NavBar } from "./components"
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';



export const HooksApp = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <AppRouter />
    </BrowserRouter>
  )
}
