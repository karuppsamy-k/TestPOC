import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { CartPage } from './pages/CartPage';
import { ProfilePage } from './pages/ProfilePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { StoriesPage } from './pages/StoriesPage';
import { Home, Search, ShoppingBag, User } from 'lucide-react';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans relative overflow-x-hidden">
        {/* Modern Minimal Header */}
        <header className="bg-white/40 backdrop-blur-xl border-b border-white/40 sticky top-0 z-50">
          <div className="container mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gradient">
                Sathis<span className="text-gray-900">.</span>
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/search" className="p-2 rounded-full hover:bg-white/60 transition text-gray-700">
                <Search size={20} />
              </Link>
              <div className="hidden md:flex items-center space-x-6 pl-4 border-l border-gray-300/50 text-sm font-semibold text-gray-700">
                <Link to="/categories" className="hover:text-primary transition">Categories</Link>
                <Link to="/stories" className="hover:text-primary transition">Stories</Link>
                <Link to="/cart" className="hover:text-primary transition flex items-center">
                  <ShoppingBag size={18} className="mr-1.5" /> Cart
                </Link>
                <Link to="/profile" className="hover:text-primary transition flex items-center">
                  <User size={18} className="mr-1.5" /> Account
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main>
          <AnimatedRoutes />
        </main>

        {/* Mobile Bottom Navigation (Glassmorphism) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
          <div className="mx-4 mb-4 glass-panel rounded-full flex justify-around items-center p-2 px-6 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
            <BottomNav />
          </div>
        </div>
      </div>
    </Router>
  );
}

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <NavItem to="/" icon={<Home size={22} />} label="Home" active={currentPath === '/'} />
      <NavItem to="/search" icon={<Search size={22} />} label="Search" active={currentPath === '/search'} />
      <NavItem to="/cart" icon={<ShoppingBag size={22} />} label="Cart" badge="2" active={currentPath === '/cart'} />
      <NavItem to="/profile" icon={<User size={22} />} label="Profile" active={currentPath === '/profile'} />
    </>
  );
};

const NavItem = ({ to, icon, label, active, badge }) => (
  <Link to={to} className={`flex flex-col items-center justify-center space-y-1 p-2 relative transition-colors duration-300 ${active ? 'text-primary' : 'text-gray-500 hover:text-gray-800'}`}>
    {icon}
    <span className="text-[10px] font-bold">{label}</span>
    {badge && (
      <span className="absolute top-0 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
        {badge}
      </span>
    )}
    {active && (
      <span className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
    )}
  </Link>
);

export default App;
