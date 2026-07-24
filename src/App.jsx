import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import AliExpressDealFinder from './components/AliExpressDealFinder';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';
import { ShoppingBag, Heart, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  // Filters & App State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [choiceOnly, setChoiceOnly] = useState(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCurrency, setSelectedCurrency] = useState('SAR'); // Default SAR
  const [darkMode, setDarkMode] = useState(true); // Default sleek dark theme

  // User Cart & Wishlist State
  const [wishlist, setWishlist] = useState([1, 4]); // Pre-filled with some items for demo
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1, selectedColor: 'أسود بريميوم' }
  ]);

  // Modal State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  const productsSectionRef = useRef(null);

  // Sync Dark Mode Attribute
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  // Filter & Sort Products
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category match
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Search match
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc) return false;
    }
    // Choice Only filter
    if (choiceOnly && !product.isChoice) return false;
    // Free Shipping filter
    if (freeShippingOnly && !product.freeShipping) return false;
    // Wishlist Only view toggle
    if (showWishlistOnly && !wishlist.includes(product.id)) return false;

    return true;
  }).sort((a, b) => {
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.ordersCount - a.ordersCount; // Featured / Most popular
  });

  // Handlers
  const handleToggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleScrollToProducts = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Bar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setShowWishlistOnly(!showWishlistOnly)}
      />

      {/* Hero Banner Section */}
      <HeroBanner onExploreClick={handleScrollToProducts} />

      {/* Main Content Body */}
      <main className="container" style={{ flex: 1, paddingTop: '2rem' }} ref={productsSectionRef}>
        
        {/* Wishlist Active Bar Indicator */}
        {showWishlistOnly && (
          <div style={{
            background: 'rgba(255, 43, 74, 0.1)',
            border: '1px solid var(--primary-red)',
            padding: '0.85rem 1.25rem',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'var(--text-main)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800' }}>
              <Heart size={20} color="var(--primary-red)" fill="var(--primary-red)" />
              <span>أنت تعرض المنتجات المفضلة لديك فقط ({filteredProducts.length})</span>
            </div>
            <button
              onClick={() => setShowWishlistOnly(false)}
              className="btn-secondary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}
            >
              عرض كل المنتجات
            </button>
          </div>
        )}

        {/* Category Filter & Sorting Row */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          choiceOnly={choiceOnly}
          setChoiceOnly={setChoiceOnly}
          freeShippingOnly={freeShippingOnly}
          setFreeShippingOnly={setFreeShippingOnly}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            background: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            margin: '2rem 0'
          }}>
            <AlertCircle size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>لم يتم العثور على منتجات مطابقة!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              جرب تغيير كلمات البحث أو إلغاء بعض الفلاتر لعرض نتائج أكثر.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setChoiceOnly(false);
                setFreeShippingOnly(false);
                setShowWishlistOnly(false);
              }}
              className="btn-primary"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currencyCode={selectedCurrency}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* Interactive AliExpress Deal Finder Component */}
        <AliExpressDealFinder />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        currencyCode={selectedCurrency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        currencyCode={selectedCurrency}
      />
    </div>
  );
}
