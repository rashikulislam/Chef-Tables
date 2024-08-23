import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>

      <Header></Header>
      <div className='mt-10'>
        <Main></Main>
      </div>

    </div>
  )
}

export default App
