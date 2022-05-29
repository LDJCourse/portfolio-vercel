// Components
import Navbar from "../components/layout/Navigation/TopNavbar/Navbar";
import BottomNav from "../components/layout/Navigation/MobileNavigation/BottomNav";

// CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="sm:mb-0">
      <div className="">
        <Navbar />
      </div>

      <BottomNav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
