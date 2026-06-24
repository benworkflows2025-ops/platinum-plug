import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import DocumentMeta from './components/DocumentMeta.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import Home from './pages/Home.jsx'
import PlansPage from './pages/PlansPage.jsx'
import CartPage from './pages/CartPage.jsx'
import Success from './pages/Success.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <DocumentMeta />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<Success />} />
          {/* Friendly alias for the thank-you / success page */}
          <Route path="/thank-you" element={<Success />} />
          <Route path="/terms" element={<Terms />} />
          {/* Real 404 instead of silently showing Home */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
