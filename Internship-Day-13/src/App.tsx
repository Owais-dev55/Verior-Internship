import './App.css'
import Products from './components/Products/Products'
import Header from './components/SideBar/Header'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <>
   <Header />
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        <p>Welcome to the VogueAura Dashboard!</p>
        <Products />
      </main>
    </div>
    <footer className="bg-white shadow-md p-4 text-center">
      <p className="text-gray-600">© 2023 Trendify. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
