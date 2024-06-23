// pages/_app.js
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import React from "react"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
