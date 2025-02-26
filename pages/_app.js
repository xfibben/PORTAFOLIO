import '../styles/globals.css'
import { ThemeProvider } from './themeContext'

function MyApp({ Component, pageProps }) {

    return(
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
