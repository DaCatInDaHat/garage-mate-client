import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Board'
import Contacts from './components/Contacts'
import Storage from './components/Storage'
import Layout from './components/Layout'
import Create from './components/Create'
import Edit from './components/Edit'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const App = () => {
  const [mode, setMode] = useState('dark')

  const appTheme = createTheme({
    palette: {
      mode: mode === 'light' ? 'dark' : 'light'
    }
  })

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout mode={mode} setMode={setMode}>
            <Routes>
              <Route exact path='/' element={<Board />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='storage' element={<Storage />} />
              <Route path='create' element={<Create />} />
              <Route path='edit/:id' element={<Edit />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider >
    </>
  )
}

export default App
