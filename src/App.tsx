import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./components/product";
import { Button } from "./components/ui/button";
import "./App.css";
import { Separator } from "@/components/ui/separator";
import { IoSearchOutline } from "react-icons/io5";
import florDePapelLogo from "./assets/flor-de-papel-logo-transparente-03.png";
import colaBastaoHomemAranha from "./assets/produtos/cola-bastao-homem-aranha.webp";
import lapisStitchAzul from "./assets/produtos/lapis/lapis-stitch-azul.webp";
import lapisStitchRosa from "./assets/produtos/lapis/lapis-stitch-rosa.webp";
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
import canetaCactuNordeste from "./assets/produtos/canetas/caneta-cactu-nordeste.webp";
import canetaEsferograficaBrw from "./assets/produtos/canetas/caneta-esferografica-brw.webp";
import canetaFastFood from "./assets/produtos/canetas/caneta-fast-food.webp";
import canetaFeras from "./assets/produtos/canetas/caneta-feras.webp";
import canetaGamesApagavel from "./assets/produtos/canetas/caneta-games-apagavel.webp";
import canetaGroot from "./assets/produtos/canetas/caneta-groot.webp";
import canetaHidroPastelBrw from "./assets/produtos/canetas/caneta-hidro-pastel-brw.webp";
import canetaManga from "./assets/produtos/canetas/caneta-manga.webp";
import canetaOssinho from "./assets/produtos/canetas/caneta-ossinho.webp";
import canetaPatinhas from "./assets/produtos/canetas/caneta-patinhas.webp";
import canetaRetro from "./assets/produtos/canetas/caneta-retro.webp";
import canetaRetroUrsos from "./assets/produtos/canetas/caneta-retro-ursos.webp";
import canetaSaturno from "./assets/produtos/canetas/caneta-saturno.webp";
import canetaSeringa from "./assets/produtos/canetas/caneta-seringa.webp";
import canetaXadrez from "./assets/produtos/canetas/caneta-xadrez.webp";
import cadernoHarryPotterListaCasas from "./assets/produtos/cadernos/caderno-harry-potter-lista-casas.webp";
import cadernoHarryPotterBrasaoCasas from "./assets/produtos/cadernos/caderno-harry-potter-brasao-casas.webp";
import cadernoSemAdesivoJoaninhas from "./assets/produtos/cadernos/caderno-sem-adesivo-joaninhas.webp";
import cadernoSemAdesivoCachorrinhos from "./assets/produtos/cadernos/caderno-sem-adesivo-cachorrinhos.webp";
import cadernoSemAdesivoFlores from "./assets/produtos/cadernos/caderno-sem-adesivo-flores.webp";
import cadernoSemadesivocoracoesdoce from "./assets/produtos/cadernos/caderno-sem-adesivo-coracoes-doce.webp";
import cadernoFridaVermelho from "./assets/produtos/cadernos/caderno-frida-vermelho.webp";
import cadernoHardWork from "./assets/produtos/cadernos/caderno-hard-work.webp";
import cadernoCraftcolorPapelao from "./assets/produtos/cadernos/caderno-craftcolor-papelao.webp";
import cadernoStarWars from "./assets/produtos/cadernos/caderno-star-wars.webp";

import { FaRegCopy } from "react-icons/fa";

export interface ProductProps {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  description: string;
  models?: {
    text: string;
    isEnable: boolean;
  }[];
  isInCatalog: boolean;
}

interface ICatalog {
  name: string;
  price: string;
  model?: string;
}

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState([""]);
  const [catalog, setCatalog] = useState<ICatalog[]>([
    {
      name: "",
      price: "",
      model: "",
    },
  ]);
  const [isCopied, setIsCopied] = useState(false);

  const total = products
    .filter((product) => product.isInCatalog === true)
    .reduce((prev, cur) => prev + cur.price, 0)
    .toFixed(2);

  const amountOfProducts = products.reduce((prev, cur) => {
    return cur.isInCatalog === true ? prev + 1 : prev;
  }, 0);
  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "Lápis Stich Azul Molin",
        type: "lapis",
        image: lapisStitchAzul,
        price: 3,
        description: "",
        isInCatalog: false,
      },
      {
        id: "2",
        name: "Lápis Stich Rosa Molin",
        type: "lapis",
        image: lapisStitchRosa,
        price: 3,
        description: "",
        isInCatalog: false,
      },
      {
        id: "3",
        name: "Lápis Vingadores Molin",
        type: "lapis",
        image: lapisVingadores,
        price: 3,
        description: "",
        models: [
          {
            text: "Capitão América",
            isEnable: true,
          },
          {
            text: "Hulk",
            isEnable: true,
          },
          {
            text: "Thor",
            isEnable: true,
          },
          {
            text: "Homem de Ferro",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "4",
        name: "Marca Texto Joccar",
        type: "marca-texto",
        image: marcaTextoJoccar,
        price: 7,
        description: "",
        isInCatalog: false,
      },
      {
        id: "5",
        name: "Marca Texto Pastel BRW",
        type: "marca-texto",
        image: marcaTextoPastelBRW,
        price: 4.2,
        description: "",
        isInCatalog: false,
      },
      {
        id: "6",
        name: "Post-it Amarelo",
        type: "postit",
        image: postitAmararelo100,
        price: 7.5,
        description: "100 folhas",
        isInCatalog: false,
      },
      {
        id: "7",
        name: "Post-it Neon",
        type: "postit",
        image: postitNeon50,
        price: 7.4,
        description: "50 folhas",
        models: [
          {
            text: "Laranja",
            isEnable: true,
          },
          {
            text: "Amarelo",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Roxo",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "8",
        name: "Post-it Pautado",
        type: "postit",
        image: postitPalta50,
        price: 6.5,
        description: "50 folhas",
        isInCatalog: false,
      },
      {
        id: "9",
        name: "Post-it Preto",
        type: "postit",
        image: postitPreto,
        price: 8.5,
        description: "50 folhas",
        isInCatalog: false,
      },
      {
        id: "10",
        name: "Cola Bastao Homem Aranha",
        type: "cola-bastao",
        image: colaBastaoHomemAranha,
        price: 5.6,
        description: "Cola bastão Molin, 9g",
        isInCatalog: false,
      },
      {
        id: "11",
        name: "Lápis Tilibra Happy",
        type: "lapis",
        image: lapisTilibraHappy,
        price: 2.2,
        description: "",
        models: [
          {
            text: "Lavanda",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "12",
        name: "Lápis Cis Move",
        type: "lapis",
        image: lapisCisMove,
        price: 1.9,
        description: "[Item sortido]",
        isInCatalog: false,
      },
      {
        id: "13",
        name: "Post-it Tom Pastel",
        type: "postit",
        image: postitPastel50,
        price: 7,
        description: "50 folhas",
        models: [
          {
            text: "Lavanda",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "14",
        name: "Caneta Abacate",
        type: "caneta",
        image: canetaAbacate,
        price: 6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "15",
        name: "Caneta Bambu Panda",
        type: "caneta",
        image: canetaBambuPanda,
        price: 5.5,
        description: "Caneta em gel, clicável e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "16",
        name: "Caneta Bob Esponja",
        type: "caneta",
        image: canetaBobEsponja,
        price: 10,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "17",
        name: "Caneta Borboletas",
        type: "caneta",
        image: canetaBorboletas,
        price: 8.6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Branco",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Lilás",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "18",
        name: "Caneta Cactu Cute",
        type: "caneta",
        image: canetaCactuCute,
        price: 6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "19",
        name: "Caneta Cactu",
        type: "caneta",
        image: canetaCactu,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "20",
        name: "Caneta Cactu Nordeste",
        type: "caneta",
        image: canetaCactuNordeste,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "21",
        name: "Caneta Esferografica Brw",
        type: "caneta",
        image: canetaEsferograficaBrw,
        price: 9,
        description: "Caneta esferográfica, ponta fina, na escrita azul",
        models: [
          {
            text: "Branca com poá colorido",
            isEnable: true,
          },
          {
            text: "Rosa com corações dourados",
            isEnable: true,
          },
          {
            text: "Preta de bolinhas",
            isEnable: true,
          },
          {
            text: "Branca quandriculada",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "22",
        name: "Caneta FastFood",
        type: "caneta",
        image: canetaFastFood,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Pipoca",
            isEnable: true,
          },
          {
            text: "Sanduíche",
            isEnable: true,
          },
          {
            text: "Pizza",
            isEnable: true,
          },
          {
            text: "Batata Frita",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "23",
        name: "Caneta Feras",
        type: "caneta",
        image: canetaFeras,
        price: 9,
        description:
          "[item sortido] Caneta em gel, clicável e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "24",
        name: "Caneta Games Apagável",
        type: "caneta",
        image: canetaGamesApagavel,
        price: 9,
        description: "Caneta apagável, cor azul, brw",
        models: [
          {
            text: "Controle",
            isEnable: true,
          },
          {
            text: "Minigame",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "25",
        name: "Caneta Groot",
        type: "caneta",
        image: canetaGroot,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      // {
      //   id: "26",
      //   name: "Caneta Hidrográfica Pastel Brw",
      //   type: "caneta",
      //   image: canetaHidroPastelBrw,
      //   price: 9,
      //   description: "Caneta hidrográfica, ponta 0.4mm, tom pastel",
      //   isInCatalog: false,
      // },
      {
        id: "27",
        name: "Caneta Manga",
        type: "caneta",
        image: canetaManga,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "28",
        name: "Caneta Ossinho",
        type: "caneta",
        image: canetaOssinho,
        price: 9,
        description:
          "[consultar modelo disponível] Caneta esferográfica, escrita em cor azul",
        models: [
          {
            text: "1. Osso do Dedo",
            isEnable: true,
          },
          {
            text: "2. Fêmur",
            isEnable: true,
          },
          {
            text: "3. Coluna Vertebral",
            isEnable: true,
          },
          {
            text: "4. Fêmur, Fíbula e Tíbia",
            isEnable: true,
          },
          {
            text: "5. Úmero",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "29",
        name: "Caneta Patinhas",
        type: "caneta",
        image: canetaPatinhas,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "30",
        name: "Caneta Retro",
        type: "caneta",
        image: canetaRetro,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "31",
        name: "Caneta Retro Ursos",
        type: "caneta",
        image: canetaRetroUrsos,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "32",
        name: "Caneta Saturno",
        type: "caneta",
        image: canetaSaturno,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "33",
        name: "Caneta Seringa",
        type: "caneta",
        image: canetaSeringa,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "34",
        name: "Caderno Harry Potter Listras das Casas",
        type: "caderno",
        image: cadernoHarryPotterListaCasas,
        price: 49.9,
        description:
          "Caderno College, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "35",
        name: "Caderno Harry Potter Brasao das Casas",
        type: "caderno",
        image: cadernoHarryPotterBrasaoCasas,
        price: 49.9,
        description:
          "Caderno College, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "36",
        name: "Caderno Joaninhas",
        type: "caderno",
        image: cadernoSemAdesivoJoaninhas,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "37",
        name: "Caderno Cachorrinhos",
        type: "caderno",
        image: cadernoSemAdesivoCachorrinhos,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "38",
        name: "Caderno Flores",
        type: "caderno",
        image: cadernoSemAdesivoFlores,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "39",
        name: "Caderno Coracões Doce",
        type: "caderno",
        image: cadernoSemadesivocoracoesdoce,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "40",
        name: "Caderno Frida Kahlo Vermelho",
        type: "caderno",
        image: cadernoFridaVermelho,
        price: 45,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "41",
        name: "Caderno Hard Work",
        type: "caderno",
        image: cadernoHardWork,
        price: 35,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "42",
        name: "Caderno Craftcolor Papelão",
        type: "caderno",
        image: cadernoCraftcolorPapelao,
        price: 40,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "43",
        name: "Caderno Star Wars",
        type: "caderno",
        image: cadernoStarWars,
        price: 38,
        description:
          "Caderno Universitário, Capa Dura, 1 Matérias, 80 Folhas, Culturama, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "44",
        name: "Caneta Xadrez",
        type: "caneta",
        image: canetaXadrez,
        price: 5.8,
        description:
          "Caneta esferográfica, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Número 1",
            isEnable: true,
          },
          {
            text: "Número 2",
            isEnable: true,
          },
          {
            text: "Número 3",
            isEnable: true,
          },
          {
            text: "Número 4",
            isEnable: true,
          },
          {
            text: "Número 5",
            isEnable: true,
          },
          {
            text: "Número 6",
            isEnable: true,
          },
        ],
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

  const handleAddProduct = (id: string, model: string) => {
    const theProduct = products.find((product) => product.id === id);
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id ? { ...product, isInCatalog: true } : product
      )
    );
    if (theProduct)
      setCatalog((prevState) => [
        ...prevState,
        {
          name: theProduct.name,
          price: theProduct.price.toString(),
          model: model ? model : "",
        },
      ]);
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
        prevState.filter((product) => product.name !== theProduct.name)
      );
  };

  const handleCopyCatalog = () => {
    const pedido =
      "Olá flor de papel gostaria de fazer um pedido!\n" +
      "Esses são os produtos:\n" +
      catalog
        .map((c) => {
          if (c.name.length !== 0)
            return (
              c.name +
              "[" +
              c.model +
              "]" +
              " (R$ " +
              Number(c.price).toFixed(2) +
              ")" +
              "\n"
            );
        })
        .join("") +
      `\n Valor Total: R$ ${total}`;
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
            <>
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
              <div className="w-20 h-16 fixed bottom-5 left-3 bg-sky-600 rounded-xl flex justify-center items-center">
                <div className="text-sm font-semibold text-slate-50">
                  <p>Total</p>
                  <p>R$ {total}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
