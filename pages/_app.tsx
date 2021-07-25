import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import store from '@redux/store'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
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
