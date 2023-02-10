import '../styles/globals.css'
import '../styles/border.scss'
import Header from '../components/Static/Header'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
<>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Days+One&family=Source+Sans+Pro:ital@1&display=swap" rel="stylesheet"/>
      <Component {...pageProps} />
</>
)
}

export default MyApp
