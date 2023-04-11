
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import HomePage from './pages/HomePage/HomePage'
import Layout from './pages/Layout/Layout'
import NewsPage from './pages/NewsPage/NewsPage'
import UsersPage from './pages/UsersPage/UsersPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='news' element={<NewsPage />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
