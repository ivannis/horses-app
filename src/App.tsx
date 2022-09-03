import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home, About, Profile, Edit } from './pages'

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
        <Route path='profile/:horseId' element={<Profile />} />
        <Route path='profile/:horseId/edit' element={<Edit />} />
      </Routes>
    </Layout>
  )
}

export default App
