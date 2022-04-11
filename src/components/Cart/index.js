import { CartProduct } from "../Product";
import "./index.css";

export default function Cart({ currentSale, setValorTotal, setCurrentSale,valorTotal }) {
  function totalPrice() {
    let price = currentSale.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );

    setValorTotal(price);
  }

  function remove(event) {
    const idRemove = event.target.id - 11;

    let filtroCart = currentSale.filter((currentSale) => {
      return currentSale.id !== idRemove;
    });

    setCurrentSale(filtroCart);
  }

  function removeAll(){


    setCurrentSale([])
  }


  totalPrice();
  return (
    <>
      <header className="Cart-header">
        <h3 className="Cart-title">Carrinho de compras</h3>
      </header>

      <ul className="Cart-list">
        {currentSale.map((produtos) => (
          <CartProduct
            produtoCart={produtos}
            Remove={remove}
            key={produtos.id}
          />
        ))}
        <hr></hr>
      <div className="Cart-list-valorTotal">
          <h3>Total</h3>
          <h3>{'R$ ' +valorTotal.toFixed([2])}</h3>
      </div>
      <button onClick={removeAll} className='Cart-list-btnRemove'>Remover Todos</button>

      </ul>

    </>
  );
}
