import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoList from './components/Videos/VideoList.tsx'
import VideoForm from './components/Videos/VideoForm.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <VideoList/> }/>
        <Route path="/new-video" element={ <VideoForm/> }/>
        <Route path="/update/:id" element={ <VideoForm/> }/>

      </Routes>
    </BrowserRouter>    
    <App />
  </React.StrictMode>,
)
