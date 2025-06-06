import { useState } from 'react'
import News from './News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<News category="all"/>}/>
      <Route path="/business" element={<News category="business"/>}/>
      <Route path="/entertainment" element={<News category="entertainment"/>}/>
      <Route path="/general" element={<News category="general"/>}/>
      <Route path="/health" element={<News category="health"/>}/>
      <Route path="/science" element={<News category="science"/>}/>
      <Route path="/sports" element={<News category="sports"/>}/>
      <Route path="/technology" element={<News category="technology"/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
