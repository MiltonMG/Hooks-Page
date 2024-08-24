import { Routes, Route, Navigate } from "react-router-dom"
import { UseStatePage, UseEffectPage, UseMemoPage, UseFetchPage } from "../pages"

export const AppRouter = () => {

    return (

        <Routes>
            {/* Ruta principal para Home */}
            <Route path="/" element={<UseStatePage />} />

            {/* Ruta para UseStatePage */}
            <Route path="/useEffect" element={<UseEffectPage />} />

            {/* Ruta para UseStatePage */}
            <Route path="/useMemo" element={<UseMemoPage />} />
            
            {/* Ruta para UseFetchPage */}
            <Route path="/useFetch" element={<UseFetchPage />} />

            {/* Ruta para manejar redireccionamientos o páginas no encontradas */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    )
}