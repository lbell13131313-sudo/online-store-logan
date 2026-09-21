import './App.css'
import ProductCard from './components/ProductCard' // allows us to use the Product Card function from ProductCard.jsx
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header
        store_name="Logan's Tech Shop"
      />

      <h3>Featured Products</h3>

      {/* supplies the props to the ProductCard function in ProductCard.jsx */}
      <ProductCard
        name="Xbox Series X|S Controller"
        description="Game controller usable for Xbox Series X|S, PC, and Phone"
        price="$53.99"
        image="https://placehold.co/300x200"
      />

      <ProductCard
        name="80 Minute CD-Rs"
        description="10 pack of writeable CD-R discs"
        price="$7.99"
        image="https://placehold.co/300x200"
      />

      <ProductCard
        name="Vinyl Player"
        description="Plays both fullsize vinyls and mini vinyls"
        price="$249.00"
        image="https://placehold.co/300x200"
      />
    </div>
  )
}

export default App;
