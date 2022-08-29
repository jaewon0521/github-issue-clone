import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

dayjs.extend(relativeTime)
