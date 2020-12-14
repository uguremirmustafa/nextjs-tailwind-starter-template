/** @format */

import '../styles/globals.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 antialiased ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
