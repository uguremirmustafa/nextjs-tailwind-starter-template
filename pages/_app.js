/** @format */

import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 antialiased ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
