import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

// later in your app
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle whiteColor />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
