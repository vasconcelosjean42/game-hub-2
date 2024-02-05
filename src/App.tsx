import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./components/product";
import { Button } from "./components/ui/button";
import "./App.css";
import { Separator } from "@/components/ui/separator";
import { IoSearchOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import florDePapelLogo from "./assets/flor-de-papel-logo-transparente-03.png";
import colaBastaoHomemAranha from "./assets/produtos/cola-bastao-homem-aranha.webp";
import lapisStitchAzul from "./assets/produtos/lapis-stitch-azul.webp";
import lapisStitchRosa from "./assets/produtos/lapis-stitch-rosa.webp";
import lapisVingadores from "./assets/produtos/lapis-vingadores.webp";
import marcaTextoJoccar from "./assets/produtos/marca-texto-joccar.webp";
import marcaTextoPastelBRW from "./assets/produtos/marca-texto-pastel-brw.webp";
import postitAmararelo100 from "./assets/produtos/postit-amarelo-100.webp";
import postitNeon50 from "./assets/produtos/postit-neon-50.webp";
import postitPalta50 from "./assets/produtos/postit-palta-50.webp";
import postitPreto from "./assets/produtos/postit-preto.webp";

export interface ProductProps {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [types, setTypes] = useState([""]);
  const [catalog, setCatalog] = useState([""]);
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "Lapis Stich Azul",
        type: "lapis",
        image: lapisStitchAzul,
        price: 3,
      },
      {
        id: "2",
        name: "Lapis Stich Rosa",
        type: "lapis",
        image: lapisStitchRosa,
        price: 3,
      },
      {
        id: "3",
        name: "Lapis Vingadores",
        type: "lapis",
        image: lapisVingadores,
        price: 3,
      },
      {
        id: "4",
        name: "Marca Texto Joccar",
        type: "marca-texto",
        image: marcaTextoJoccar,
        price: 7,
      },
      {
        id: "5",
        name: "Marca Texto Pastel BRW",
        type: "marca-texto",
        image: marcaTextoPastelBRW,
        price: 4.2,
      },
      {
        id: "6",
        name: "Post-it Amarelo",
        type: "postit",
        image: postitAmararelo100,
        price: 7.5,
      },
      {
        id: "7",
        name: "Post-it Neon",
        type: "postit",
        image: postitNeon50,
        price: 7.4,
      },
      {
        id: "8",
        name: "Post-it Pautado",
        type: "postit",
        image: postitPalta50,
        price: 6.5,
      },
      {
        id: "9",
        name: "Post-it Preto",
        type: "postit",
        image: postitPreto,
        price: 8.5,
      },
      {
        id: "10",
        name: "Cola Bastao Homem Aranha",
        type: "cola-bastao",
        image: colaBastaoHomemAranha,
        price: 5.6,
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
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <div className="w-full bg-slate-300 p-4">
        <div className="flex justify-center items-center px-0 sm:px-28">
          <img className="w-24 mr-4" src={florDePapelLogo} />
          <div className="flex w-full sm:w-1/2 h-8 px-2 rounded-lg bg-slate-50 justify-center items-center">
            <IoSearchOutline />
            <input
              className={"w-full h-4 px-2 bg-transparent outline-0"}
              type="search"
              placeholder="Procurar produto..."
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
          {/* {catalog.map((c) => (
            <div className="flex flex-col justify-center items-center">
              <p key={c}>{c}</p>
              <Separator className="w-36"></Separator>
            </div>
          ))} */}
          <div className="flex items-center justify-center">
            {isCopied ? (
              <Button
                className="w-36 bg-green-700 disabled:opacity-100"
                onClick={() => handleCopyCatalog()}
                disabled
              >
                Items copiados ✓
              </Button>
            ) : (
              <Button className="w-36" onClick={() => handleCopyCatalog()}>
                Copiar catálogo
              </Button>
            )}
          </div>
        </div>
        <div className="absolute">
          <div className="w-16 h-16 bg-green-700 rounded-full flex justify-center items-center">
            <IoCopyOutline className="text-slate-100 font-extrabold text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
