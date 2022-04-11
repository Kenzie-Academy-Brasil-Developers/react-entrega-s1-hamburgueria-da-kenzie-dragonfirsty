import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";
import logo from "./images/Burger_kenzie.svg";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  function ShowProducts(event) {
    event.preventDefault();

    const TargetValue = event.target.childNodes[0].value.toLowerCase();

    const filtroList = produtos.filter((produtos) => {
      return (
        produtos.name.toLowerCase() == TargetValue ||
        produtos.category.toLowerCase() == TargetValue
      );
    });

    setFilteredProducts(filtroList);
  }

  function HandleClick(event) {
    const productId = event.target.id;

    const product = produtos[productId];

    function isDiferent(teste1) {
      return teste1.id !== product.id;
    }

    if (currentSale.length > 0) {
      if (currentSale.every(isDiferent)) {
        setCurrentSale([...currentSale, product]);
      } else {
        return "futuro modal";
      }
    } else {
      setCurrentSale([...currentSale, product]);
    }
  }

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />

        <form onSubmit={ShowProducts} className="App-form">
          <input
            className="App-input"
            name="search"
            placeholder="Digitar Pesquisa"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button className="App-Form-Btn">Pesquisar</button>
        </form>
      </header>

      <section className="App-list">
        {filteredProducts.length > 0 ? (
          <>
            <ProductList
              produtos={filteredProducts}
              HandleClick={HandleClick}
            />
          </>
        ) : (
          <>
            <ProductList produtos={produtos} HandleClick={HandleClick} />
          </>
        )}
      </section>

      <section className="App-cart">
        <Cart
          currentSale={currentSale}
          setValorTotal={setValorTotal}
          setCurrentSale={setCurrentSale}
        />

        <div className="App-cart-total">
          <h3>{'R$ ' +valorTotal.toFixed([2])}</h3>
        </div>
      </section>
    </main>
  );
}

export default App;

