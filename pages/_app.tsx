import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import store from '@redux/store'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

// later in your app
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <GlobalStyle whiteColor />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
