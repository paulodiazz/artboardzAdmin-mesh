import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import Layout from '../components/Layout/Layout';
import { createWrapper } from 'next-redux-wrapper';
import { store, persistor } from "../store/redux-store/store"
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MeshProvider>
          <Layout>
          <Component {...pageProps} />
          <ToastContainer />
          </Layout>
        </MeshProvider>
      </PersistGate>
    </Provider>
    
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);

