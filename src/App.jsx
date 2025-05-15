import './App.css'
import ProductsStore from './components/ProductsStore'
import Form from './components/Form'
function App() {
  return (
    <div className="app-container">
      <ProductsStore />
      <Form/>
    </div>
  )
}

export default App