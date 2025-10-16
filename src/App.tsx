import { Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<header className="sticky top-0 bg-white/80 backdrop-blur border-b">
<nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
<Link to="/" className="font-semibold">Brand</Link>
<div className="flex gap-4">
<NavLink to="/" className={({isActive}) => isActive ? "text-blue-600" : "hover:text-blue-600"}>Каталог</NavLink>
<NavLink to="/register" className={({isActive}) => isActive ? "text-blue-600" : "hover:text-blue-600"}>Регистрация</NavLink>
</div>
</nav>
</header>

  <main className="mx-auto max-w-5xl px-4 py-8">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </main>

  <footer className="border-t py-4 text-center text-sm text-gray-500">
    © 2025 Brand
  </footer>
</div>
);
}
