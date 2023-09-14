import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createStore} from "redux"
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import rooteredux from './Pages/Qalereya/redux.jsx'


const store = createStore(rooteredux)

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</Provider>
)
