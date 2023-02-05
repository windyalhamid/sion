import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
