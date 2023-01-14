import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import GlobalStyle from "./globalStyle"

const container = document.querySelector("#root")

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
  )
}
