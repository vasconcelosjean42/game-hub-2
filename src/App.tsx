import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./components/product";
import { Button } from "./components/ui/button";
import "./App.css";
import { Separator } from "@/components/ui/separator";
import { IoSearchOutline } from "react-icons/io5";
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
import lapisCisMove from "./assets/produtos/lapis/cis-move.webp";
import lapisTilibraHappy from "./assets/produtos/lapis/tilibra-happy.webp";
import postitPastel50 from "./assets/produtos/postit/postit-pastel-50.webp";
import canetaAbacate from "./assets/produtos/canetas/caneta-abacate.webp";
import canetaBambuPanda from "./assets/produtos/canetas/caneta-bambu-panda.webp";
import canetaBobEsponja from "./assets/produtos/canetas/caneta-bob-esponja.webp";
import canetaBorboletas from "./assets/produtos/canetas/caneta-borboletas.webp";
import canetaCactuCute from "./assets/produtos/canetas/caneta-cactu-cute.webp";
import canetaCactu from "./assets/produtos/canetas/caneta-cactu.webp";

import { FaRegCopy } from "react-icons/fa";

export interface ProductProps {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  isInCatalog: boolean;
}

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState([""]);
  const [catalog, setCatalog] = useState([""]);
  const [isCopied, setIsCopied] = useState(false);

  const amountOfProducts = products.reduce((prev, cur) => {
    return cur.isInCatalog === true ? prev + 1 : prev;
  }, 0);
  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "Lapis Stich Azul",
        type: "lapis",
        image: lapisStitchAzul,
        price: 3,
        isInCatalog: false,
      },
      {
        id: "2",
        name: "Lapis Stich Rosa",
        type: "lapis",
        image: lapisStitchRosa,
        price: 3,
        isInCatalog: false,
      },
      {
        id: "3",
        name: "Lapis Vingadores",
        type: "lapis",
        image: lapisVingadores,
        price: 3,
        isInCatalog: false,
      },
      {
        id: "4",
        name: "Marca Texto Joccar",
        type: "marca-texto",
        image: marcaTextoJoccar,
        price: 7,
        isInCatalog: false,
      },
      {
        id: "5",
        name: "Marca Texto Pastel BRW",
        type: "marca-texto",
        image: marcaTextoPastelBRW,
        price: 4.2,
        isInCatalog: false,
      },
      {
        id: "6",
        name: "Post-it Amarelo",
        type: "postit",
        image: postitAmararelo100,
        price: 7.5,
        isInCatalog: false,
      },
      {
        id: "7",
        name: "Post-it Neon",
        type: "postit",
        image: postitNeon50,
        price: 7.4,
        isInCatalog: false,
      },
      {
        id: "8",
        name: "Post-it Pautado",
        type: "postit",
        image: postitPalta50,
        price: 6.5,
        isInCatalog: false,
      },
      {
        id: "9",
        name: "Post-it Preto",
        type: "postit",
        image: postitPreto,
        price: 8.5,
        isInCatalog: false,
      },
      {
        id: "10",
        name: "Cola Bastao Homem Aranha",
        type: "cola-bastao",
        image: colaBastaoHomemAranha,
        price: 5.6,
        isInCatalog: false,
      },
      {
        id: "11",
        name: "Lapis Tilibra Happy",
        type: "lapis",
        image: lapisTilibraHappy,
        price: 2.2,
        isInCatalog: false,
      },
      {
        id: "12",
        name: "Lapis Cis Move",
        type: "lapis",
        image: lapisCisMove,
        price: 1.9,
        isInCatalog: false,
      },
      {
        id: "13",
        name: "Post-it Tom Pastel",
        type: "postit",
        image: postitPastel50,
        price: 7,
        isInCatalog: false,
      },
      {
        id: "14",
        name: "Caneta Abacate",
        type: "caneta",
        image: canetaAbacate,
        price: 6,
        isInCatalog: false,
      },
      {
        id: "15",
        name: "Caneta Bambu Panda",
        type: "caneta",
        image: canetaBambuPanda,
        price: 5.5,
        isInCatalog: false,
      },
      {
        id: "16",
        name: "Caneta Bob Esponja",
        type: "caneta",
        image: canetaBobEsponja,
        price: 10,
        isInCatalog: false,
      },
      {
        id: "17",
        name: "Caneta Borboletas",
        type: "caneta",
        image: canetaBorboletas,
        price: 8.6,
        isInCatalog: false,
      },
      {
        id: "18",
        name: "Caneta Cactu Cute",
        type: "caneta",
        image: canetaCactuCute,
        price: 6,
        isInCatalog: false,
      },
      {
        id: "19",
        name: "Caneta Cactu",
        type: "caneta",
        image: canetaCactu,
        price: 9,
        isInCatalog: false,
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
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id ? { ...product, isInCatalog: true } : product
      )
    );
    if (theProduct) setCatalog((prevState) => [...prevState, theProduct.name]);
  };

  const handleRemoveProduct = (id: string) => {
    const theProduct = products.find((product) => product.id === id);
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id ? { ...product, isInCatalog: false } : product
      )
    );
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

  const searchProducts = (): ProductProps[] => {
    console.log(search.toLowerCase());
    if (search) {
      console.log(products);
      const newProducts = products.filter((product) => {
        console.log(
          product.name.toLowerCase() + " === " + search.toLowerCase()
        );

        return product.name.toLowerCase().includes(search.toLowerCase());
      });
      console.log(newProducts);
      return newProducts;
    }
    return products;
  };

  return (
    <>
      <div className="w-full min-h-dvh bg-slate-300 p-4">
        <div className="flex justify-center items-center px-0 sm:px-28">
          <img className="w-24 mr-4" src={florDePapelLogo} />
          <div className="flex w-full sm:w-1/2 h-8 px-2 rounded-lg bg-slate-50 justify-center items-center">
            <IoSearchOutline />
            <input
              className={"w-full h-4 px-2 bg-transparent outline-0"}
              type="search"
              placeholder="Procurar produto..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          {/* <div className="aside w-full hidden lg:block bg-blue-400">aside</div> */}
          <div className="main w-full ">
            <ul>
              {types.map((type) => (
                <div>
                  {searchProducts().length !== 0 && (
                    <>
                      {searchProducts().find(
                        (product) => product.type === type
                      ) && (
                        <>
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            {type}
                          </h4>
                          <Separator />
                        </>
                      )}
                      <div className="flex flex-wrap justify-center">
                        {searchProducts()
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
                    </>
                  )}
                </div>
              ))}
              {searchProducts().length === 0 && (
                <p>Nenhum produto encontrado</p>
              )}
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
          {/* <div className="flex items-center justify-center">
            {isCopied ? (
              <Button
                className="w-36 bg-green-700 disabled:opacity-100"
                onClick={() => handleCopyCatalog()}
                disabled
              >
                Items copiados ✓
              </Button>
            ) : (
              <Button
                className={`w-36 ${
                  searchProducts().length === 0 && "disabled:opacity-100"
                } disabled:opacity-80`}
                onClick={() => handleCopyCatalog()}
              >
                Copiar catálogo
              </Button>
            )}
          </div> */}
          <div className="flex items-center justify-center">
            <Button
              className={`w-36 ${isCopied && "bg-green-600"}`}
              onClick={() => handleCopyCatalog()}
              disabled={amountOfProducts === 0 && true}
            >
              {isCopied ? "Items copiados ✓" : "Copiar catálogo"}
            </Button>
          </div>
          {amountOfProducts !== 0 && (
            <button
              className="fixed bottom-5 right-3"
              onClick={() => handleCopyCatalog()}
            >
              <div className="w-5 h-5 bg-sky-600 rounded-full flex justify-center items-center relative top-5 left-10">
                <p className="text-xs font-extrabold text-slate-200">
                  {amountOfProducts}
                </p>
              </div>
              <div
                className={`w-16 h-16 t- bg-gray-900 transaction duration-300 active:bg-green-700 focus:bg-green-700 rounded-full flex justify-center items-center`}
              >
                <FaRegCopy className="text-2xl text-slate-200" />
              </div>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
