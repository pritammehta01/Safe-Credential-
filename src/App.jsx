import './App.css'
import Navbar from './components/navbar';
import Manager from './components/Manager';
import Footer from './components/footer';

function App() {

  return (
    <>
    <div>
    <Navbar/>
     <div className="bg-sky-200 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Manager />
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
