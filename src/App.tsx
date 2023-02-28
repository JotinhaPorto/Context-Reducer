import {Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { ShowData } from './pages/ShowData'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/show' element={<ShowData/>} />
    </Routes>
    </div>
  )
}

export default App
