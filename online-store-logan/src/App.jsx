import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="app">
      <h2>Featured Products</h2>

      <ProductCard
        name=""
        description=""
        price=""
        image="https://placehold.co/600x400"
      />

      <ProductCard
        name=""
        description=""
        price=""
        image="https://placehold.co/600x400"
      />

      <ProductCard
        name=""
        description=""
        price=""
        image="https://placehold.co/600x400"
      />
    </div>
  )
}

export default App;
