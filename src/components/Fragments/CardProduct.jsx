import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-xs border shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-5 rounded-t-lg border-b h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="p-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight">
          {name.substring(0, 20)} ....
        </h5>
      </a>
      <p className="text-sm ">{children.substring(0, 100)}....</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold ">
        ${""}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => dispatch(addToCart({ id: id, qty: 1 }))}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
