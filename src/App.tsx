import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home, About } from './pages'

const App = () => {
  return (
    <Layout
      links={[
        { link: '/', label: 'Home' },
        { link: '/about', label: 'About' },
      ]}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
