import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-xs border shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-5 rounded-t-lg border-b" />
    </a>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="p-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight">{name}</h5>
      </a>
      <p className="text-sm ">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold ">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
