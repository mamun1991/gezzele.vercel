import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
import { wrapper } from "../src/app/store";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  return (
    <Provider store={store}>
      {/* Navbar */}
      <Navbar />

      <Component {...pageProps} />

      {/* footer */}
      {router.pathname.includes("/dashboard" || "editblog") ? "" : <Footer />}
      <Toaster />
    </Provider>
  );
}

export default MyApp;
