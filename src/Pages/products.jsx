import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
    reprehenderit omnis dolore, repudiandae recusandae minus deleniti
    eveniet beatae consequuntur? Iste error perferendis necessitatibus
    quia fugiat repudiandae soluta adipisci laborum dolores?`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 1500000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
    reprehenderit omnis dolore, repudiandae recusandae minus deleniti`,
  },
  {
    id: 3,
    name: "Sepatu Adadong",
    price: 2500000,
    image: "/img/shoes-1.jpg",
    description: `Ini adalah sepatu baru dari brand adadong wkwkw
    `,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = (event) => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }else{
      setCart([...cart, {id, qty: 1}])
    }
  };

  return (
    <>
      <div className="flex justify-end bg-blue-600 text-white items-center px-10 h-20">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="w-[90%] mx-auto text-left table-auto border-separate border-spacing-1">
            <thead>
              <tr className="border">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id} className="border">
                    <td>{product.name}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductsPage;
