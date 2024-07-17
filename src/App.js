import React from 'react'
import AvFormExample from './components/AvForm';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage'
const App = () => {
  return (
    <div>
      <MainPage />
      <Routes>
        <Route path='/avfrom/avfield' element={<AvFormExample />} />
      </Routes>

    </div>
  )
}

export default App
