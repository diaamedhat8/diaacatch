import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import AliExpressDealFinder from './components/AliExpressDealFinder';
import FaqSection from './components/FaqSection';
import Newsletter from './components/Newsletter';
import ToastNotification from './components/ToastNotification';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';
import { TRANSLATIONS, LANGUAGES } from './data/translations';
import { Heart, AlertCircle } from 'lucide-react';

export default function App() {
  // i18n & App State
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default English
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default USD
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [choiceOnly, setChoiceOnly] = useState(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(150); // Default max price USD
  const [sortBy, setSortBy] = useState('featured');
  const [darkMode, setDarkMode] = useState(true);

  // User Cart, Wishlist & Toast State
  const [wishlist, setWishlist] = useState([1, 4]);
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1, selectedColor: 'Premium Black' }
  ]);
  const [toastMessage, setToastMessage] = useState(null);

  // Modal & Navigation State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  const productsSectionRef = useRef(null);

  // Get active translation dictionary & direction
  const currentLang = LANGUAGES[selectedLanguage] || LANGUAGES.en;
  const currentDir = currentLang.dir;

  // Translation Helper Function
  const t = (key) => {
    const langDict = TRANSLATIONS[selectedLanguage] || TRANSLATIONS.en;
    return langDict[key] || TRANSLATIONS.en[key] || key;
  };

  // Sync document dir and lang
  useEffect(() => {
    document.documentElement.setAttribute('dir', currentDir);
    document.documentElement.setAttribute('lang', selectedLanguage);
  }, [selectedLanguage, currentDir]);

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
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (product.priceUSD > maxPrice) {
      return false;
    }
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc) return false;
    }
    if (choiceOnly && !product.isChoice) return false;
    if (freeShippingOnly && !product.freeShipping) return false;
    if (showWishlistOnly && !wishlist.includes(product.id)) return false;

    return true;
  }).sort((a, b) => {
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.ordersCount - a.ordersCount;
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
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setShowWishlistOnly(!showWishlistOnly)}
        t={t}
      />

      {/* Hero Banner Section */}
      <HeroBanner onExploreClick={handleScrollToProducts} t={t} dir={currentDir} />

      {/* Main Content Body */}
      <main className="container" style={{ flex: 1, paddingTop: '1.5rem' }} ref={productsSectionRef}>
        
        {/* Wishlist Active Bar Indicator */}
        {showWishlistOnly && (
          <div style={{
            background: 'rgba(255, 43, 74, 0.1)',
            border: '1px solid var(--primary-red)',
            padding: '0.75rem 1.1rem',
            borderRadius: '14px',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'var(--text-main)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '800', fontSize: '0.88rem' }}>
              <Heart size={18} color="var(--primary-red)" fill="var(--primary-red)" />
              <span>{t('wishlistActiveNotice')} ({filteredProducts.length})</span>
            </div>
            <button
              onClick={() => setShowWishlistOnly(false)}
              className="btn-secondary"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
            >
              {t('showAllProducts')}
            </button>
          </div>
        )}

        {/* Category Filter, Price Range & Sorting Row */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          choiceOnly={choiceOnly}
          setChoiceOnly={setChoiceOnly}
          freeShippingOnly={freeShippingOnly}
          setFreeShippingOnly={setFreeShippingOnly}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          currencyCode={selectedCurrency}
          sortBy={sortBy}
          setSortBy={setSortBy}
          t={t}
        />

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3.5rem 1rem',
            background: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            margin: '1.5rem 0'
          }}>
            <AlertCircle size={44} color="var(--text-muted)" style={{ marginBottom: '0.85rem' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.4rem' }}>{t('noProductsFound')}</h3>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setChoiceOnly(false);
                setFreeShippingOnly(false);
                setMaxPrice(150);
                setShowWishlistOnly(false);
              }}
              className="btn-primary"
              style={{ marginTop: '0.85rem' }}
            >
              {t('resetFilters')}
            </button>
          </div>
        ) : (
          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
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
                onShowToast={(msg) => setToastMessage(msg)}
                t={t}
              />
            ))}
          </div>
        )}

        {/* Interactive AliExpress Deal Finder Component */}
        <AliExpressDealFinder t={t} dir={currentDir} />

        {/* FAQ Accordion Section */}
        <FaqSection t={t} />

        {/* Newsletter Subscription Section */}
        <Newsletter t={t} onShowToast={(msg) => setToastMessage(msg)} />

      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Floating Toast Notification */}
      <ToastNotification message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        currencyCode={selectedCurrency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        t={t}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        currencyCode={selectedCurrency}
        t={t}
      />

      {/* Mobile Bottom Dock Bar for Smartphones */}
      <MobileBottomNav
        activeTab={showWishlistOnly ? 'wishlist' : 'home'}
        setActiveTab={(tab) => {
          if (tab === 'wishlist') setShowWishlistOnly(true);
          else setShowWishlistOnly(false);
        }}
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setShowWishlistOnly(true)}
        onScrollToTop={handleScrollToProducts}
        t={t}
      />
    </div>
  );
}
