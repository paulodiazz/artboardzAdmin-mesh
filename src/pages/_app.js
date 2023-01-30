import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import Layout from '../components/Layout/Layout';
import { store } from "../store/redux-store/store"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
    </Layout>
  );
}

export default store.withRedux(MyApp);
