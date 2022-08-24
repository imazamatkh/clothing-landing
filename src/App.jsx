import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import MainPage from './router/MainPage/MainPage'
import NewPage from './router/NewPage/NewPage'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App() {
  const [theme, setTheme] = useState(getInitialMode())

  const toggleTheme = () => {
    return setTheme((prevTheme) => !prevTheme)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('theme'))
    return savedMode || false
  }

  theme
    ? document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode')

  return (
    <div className={'App'}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/new'} element={<NewPage />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App
