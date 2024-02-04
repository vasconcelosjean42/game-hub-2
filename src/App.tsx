import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./components/product";
import { Button } from "./components/ui/button";
import "./App.css";
import { Separator } from "@/components/ui/separator";
import { IoSearchOutline } from "react-icons/io5";
import florDePapelLogo from "./assets/flor-de-papel-logo-transparente-03.png";

export interface ProductProps {
  id: string;
  name: string;
  type: string;
}

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [types, setTypes] = useState([""]);
  const [catalog, setCatalog] = useState([""]);
  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "caneta A",
        type: "canetas",
      },
      {
        id: "2",
        name: "lapis",
        type: "lapis",
      },
      {
        id: "3",
        name: "caneta B",
        type: "canetas",
      },
    ]);
  }, []);

  useLayoutEffect(() => {
    setTypes(
      products
        .map((product) => product.type)
        .filter(
          (product, i) =>
            products.map((product) => product.type).indexOf(product) === i
        )
        .map((type) => type)
    );
  }, [products]);

  const handleAddProduct = (id: string) => {
    const theProduct = products.find((product) => product.id === id);
    if (theProduct) setCatalog((prevState) => [...prevState, theProduct.name]);
  };

  const handleRemoveProduct = (id: string) => {
    const theProduct = products.find((product) => product.id === id);
    if (theProduct)
      setCatalog((prevState) =>
        prevState.filter((product) => product !== theProduct.name)
      );
  };

  const handleCopyCatalog = () => {
    const pedido =
      "Olá flor de papel gostaria de fazer um pedido!\n" +
      "Esses são os produtos:\n" +
      catalog.map((c) => c + "\n").join("");
    navigator.clipboard.writeText(pedido);
  };

  return (
    <>
      <div className="w-full bg-slate-200 p-4">
        <div className="flex justify-center items-center">
          <img className="w-24 mr-4" src={florDePapelLogo} />
          <div className="flex h-8 px-2 rounded-lg flex-1 bg-slate-50 justify-center items-center">
            <IoSearchOutline />
            <input
              className={"w-full h-4 px-2 bg-transparent outline-0"}
              type="search"
              placeholder="Search games..."
            />
          </div>
        </div>
        <div className="flex">
          {/* <div className="aside w-full hidden lg:block bg-blue-400">aside</div> */}
          <div className="main w-full ">
            <ul>
              {types.map((type) => (
                <div>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {type}
                  </h4>
                  <Separator />
                  <div className="flex flex-wrap justify-center">
                    {products
                      .filter((product) => product.type === type)
                      .map((product) => (
                        <Product
                          key={product.id}
                          product={product}
                          handleAddProduct={handleAddProduct}
                          handleRemoveProduct={handleRemoveProduct}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {catalog.map((c) => (
            <p key={c}>{c}</p>
          ))}
          <div className="flex items-center justify-center">
            <Button onClick={() => handleCopyCatalog()}>Copiar catálogo</Button>
            {/* <p className="ml-2 text-green-600">copiado ✓</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
