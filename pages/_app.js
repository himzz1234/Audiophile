import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}
