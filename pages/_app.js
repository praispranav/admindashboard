import Head from "next/head";
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/custom.css"

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
        {/* Mobile responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Always desktop view meta tag. */}
        <meta name="viewport" content="width=1024" />
        <title>Admin Template</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* <script src="/popper.min.js" />
        <script src="/bootstrap.min.js" /> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" />
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" />
      </Head>
    <Component {...pageProps} />

    </>

  ) 
}

export default MyApp
