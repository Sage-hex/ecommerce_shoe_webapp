import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Categories from "./components/Categories/Categories"
import ShowProducts from "./ShowProducts"
import SingleProduct from "./components/SingleProductPage/SingleProduct"
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <ShowProducts/>
      <SingleProduct/>
    </div>
  )
}

export default App
