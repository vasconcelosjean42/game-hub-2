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
import borrachaCapaPlasticaColorida from "./assets/produtos/borracha/borracha-capa-plastica-colorida.webp";
import borrachaCisMove from "./assets/produtos/borracha/borracha-cis-move.webp";
import borrachaFoods from "./assets/produtos/borracha/borracha-foods.webp";
import borrachaVingadores from "./assets/produtos/borracha/borracha-vingadores.webp";
import borrachaPool from "./assets/produtos/borracha/borracha-pool.webp";
import cadernoDisneyBabyYoda from "./assets/produtos/cadernos/caderno-disney-baby-yoda.webp";
import cadernoDisneyCininho from "./assets/produtos/cadernos/caderno-disney-cininho.webp";
import cadernoDisneyElza from "./assets/produtos/cadernos/caderno-disney-elza.webp";
import cadernoDisneyOlaf from "./assets/produtos/cadernos/caderno-disney-olaf.webp";
import cadernoHarryPotterBrasaoEscolas from "./assets/produtos/cadernos/caderno-harry-potter-brasao-escolas.webp";
import cadernoHarryPotterDefesaContraArtesDasTrevas from "./assets/produtos/cadernos/caderno-harry-potter-defesa-contra-artes-das-trevas.webp";
import cadernoHouseOfDragonBrasaoDoDragao from "./assets/produtos/cadernos/caderno-house-of-dragon-brasao-do-dragao.webp";
import cadernoHouseOfDragonDragaoEEspada from "./assets/produtos/cadernos/caderno-house-of-dragon-dragao-e-espada.webp";
import cadernoHouseOfDragonFireWillReign from "./assets/produtos/cadernos/caderno-house-of-dragon-fire-will-reign.webp";
import cadernoHouseOfDragonYouWinOrYouDie from "./assets/produtos/cadernos/caderno-house-of-dragon-you-win-or-you-die.webp";
import cadernoMarbleBeAuthentic from "./assets/produtos/cadernos/caderno-marble-be-authentic.webp";
import cadernoMarbleBeautifulBeYou from "./assets/produtos/cadernos/caderno-marble-beautiful-be-you.webp";
import cadernoMarbleDreamTheImpossible from "./assets/produtos/cadernos/caderno-marble-dream-the-impossible.webp";
import cadernoMarbleLovelyStrong from "./assets/produtos/cadernos/caderno-marble-lovely-strong.webp";
import cadernoRickAndMortyCabecaDoMorty from "./assets/produtos/cadernos/caderno-rick-and-morty-cabeca-do-morty.webp";
import cadernoRickAndMortyFocoNaCiencia from "./assets/produtos/cadernos/caderno-rick-and-morty-foco-na-ciencia.webp";
import cadernoRickAndMortyPortalRickAndMorty from "./assets/produtos/cadernos/caderno-rick-and-morty-portal-rick-and-morty.webp";
import apontadorComDepositoSpiroCis from "./assets/produtos/apontadores/apontador-com-deposito-spiro-cis.webp";
import apontadorMinnie from "./assets/produtos/apontadores/apontador-minnie.webp";
import apontadorSoulBrw from "./assets/produtos/apontadores/apontador-soul-brw.webp";
import apontadorVingadores from "./assets/produtos/apontadores/apontador-vingadores.webp";
import borrachaQuadraDaSpiroCis from "./assets/produtos/borracha/borracha-quadrada-spiro-cis.webp";
import canetaBorboletas from "./assets/produtos/canetas/caneta-borboletas.webp";
import canetaFofaDocinhoPerfumadaEmGel from "./assets/produtos/canetas/caneta-fofa-docinho-perfumada-em-gel.webp";
import canetaFofaNaruto from "./assets/produtos/canetas/caneta-fofa-naruto.webp";
import canetaGarfield from "./assets/produtos/canetas/caneta-garfield.webp";
import canetaSeringa02 from "./assets/produtos/canetas/caneta-seringa-02.webp";
import corretivoCanetaBrw4g from "./assets/produtos/corretivosFita/corretivo-caneta-brw-4g.webp";
import corretivoFitaNeonTransparente from "./assets/produtos/corretivosFita/corretivo-fita-neon-transparente.webp";
import corretivoFitaPastelSolido from "./assets/produtos/corretivosFita/corretivo-fita-pastel-solido.webp";
import corretivoFitaPastelTransparente12m from "./assets/produtos/corretivosFita/rretivo-fita-pastel-transparente-12m.webp";
import estojoEspampadoDreamBrw from "./assets/produtos/estojos/estojo-espampado-dream-brw.webp";
import estojoEscolarColorZipperWinPaper from "./assets/produtos/estojos/estojo-escolar-color-zipper-win-paper.webp";

import grampeadorBrwTonsPastel from "./assets/produtos/grampeadores/grampeador-brw-tons-pastel.webp";

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
            isEnable: false,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Lilás",
            isEnable: false,
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
      {
        id: "45",
        name: "Borracha Capa Plastica Colorida",
        type: "borracha",
        image: borrachaCapaPlasticaColorida,
        price: 2.4,
        description: "",
        isInCatalog: false,
      },
      {
        id: "46",
        name: "Borracha Cis Move",
        type: "borracha",
        image: borrachaCisMove,
        price: 3.6,
        description: "",
        models: [
          {
            text: "Azul - Roxo",
            isEnable: true,
          },
          {
            text: "Verde - Azul",
            isEnable: true,
          },
          {
            text: "Rosa - Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "47",
        name: "Borracha Foods",
        type: "borracha",
        image: borrachaFoods,
        price: 3.2,
        description: "",
        models: [
          {
            text: "Melância",
            isEnable: true,
          },
          {
            text: "Picolé",
            isEnable: true,
          },
          {
            text: "Biscoito",
            isEnable: true,
          },
          {
            text: "Limão",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "48",
        name: "Borracha Vingadores",
        type: "borracha",
        image: borrachaVingadores,
        price: 4.5,
        description: "",
        isInCatalog: false,
      },
      {
        id: "49",
        name: "Borracha Ursinho Pool",
        type: "borracha",
        image: borrachaPool,
        price: 2.9,
        description: "",
        models: [
          {
            text: "Tigrão",
            isEnable: true,
          },
          {
            text: "Leitão",
            isEnable: true,
          },
          {
            text: "Ursinho pool e sua turma",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "50",
        name: "Caderno Disney Baby Yoda",
        type: "caderno",
        image: cadernoDisneyBabyYoda,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "51",
        name: "Caderno Disney Cininho",
        type: "caderno",
        image: cadernoDisneyCininho,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "52",
        name: "Caderno Disney Elza",
        type: "caderno",
        image: cadernoDisneyElza,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "53",
        name: "Caderno Disney Olaf",
        type: "caderno",
        image: cadernoDisneyOlaf,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "54",
        name: "Caderno Harry Potter Brasao Escolas",
        type: "caderno",
        image: cadernoHarryPotterBrasaoEscolas,
        price: 39.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "55",
        name: "Caderno Harry Potter Defesa Contra Artes Das Trevas",
        type: "caderno",
        image: cadernoHarryPotterDefesaContraArtesDasTrevas,
        price: 39.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "56",
        name: "Caderno House Of Dragon Brasao Do Dragao",
        type: "caderno",
        image: cadernoHouseOfDragonBrasaoDoDragao,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "57",
        name: "Caderno House Of Dragon Dragao E Espada",
        type: "caderno",
        image: cadernoHouseOfDragonDragaoEEspada,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "58",
        name: "Caderno House Of Dragon Fire Will Reign",
        type: "caderno",
        image: cadernoHouseOfDragonFireWillReign,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "59",
        name: "Caderno House Of Dragon You Win Or You Die",
        type: "caderno",
        image: cadernoHouseOfDragonYouWinOrYouDie,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "60",
        name: "Caderno Marmorizado Be Authentic",
        type: "caderno",
        image: cadernoMarbleBeAuthentic,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "61",
        name: "Caderno Marmorizado Beautiful Be You",
        type: "caderno",
        image: cadernoMarbleBeautifulBeYou,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "62",
        name: "Caderno Marmorizado Dream The Impossible",
        type: "caderno",
        image: cadernoMarbleDreamTheImpossible,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "63",
        name: "Caderno Marmorizado Lovely Strong",
        type: "caderno",
        image: cadernoMarbleLovelyStrong,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "64",
        name: "Caderno Rick And Morty Cabeca Do Morty",
        type: "caderno",
        image: cadernoRickAndMortyCabecaDoMorty,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "65",
        name: "Caderno Rick And Morty Foco Na Ciencia",
        type: "caderno",
        image: cadernoRickAndMortyFocoNaCiencia,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "66",
        name: "Caderno Rick And Morty Portal Rick And Morty",
        type: "caderno",
        image: cadernoRickAndMortyPortalRickAndMorty,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "67",
        name: "Apontador Com Deposito Spiro Cis",
        type: "apontador",
        image: apontadorComDepositoSpiroCis,
        price: 4,
        description: "",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Cinza",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: true,
          },
          {
            text: "Ciano",
            isEnable: true,
          },
          {
            text: "Roxo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "68",
        name: "Apontador Minnie",
        type: "apontador",
        image: apontadorMinnie,
        price: 4.2,
        description: "",
        models: [
          {
            text: "Vermeho",
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
        id: "69",
        name: "Apontador Soul Brw",
        type: "apontador",
        image: apontadorSoulBrw,
        price: 3.15,
        description: "",
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
            text: "Roxo",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "70",
        name: "Apontador Vingadores",
        type: "apontador",
        image: apontadorVingadores,
        price: 4.2,
        description: "",
        models: [
          {
            text: "Thor",
            isEnable: true,
          },
          {
            text: "Homem de ferro",
            isEnable: true,
          },
          {
            text: "Pantera Negra",
            isEnable: true,
          },
          {
            text: "Capitão América",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "71",
        name: "Borracha Quadra da Spiro Cis",
        type: "borracha",
        image: borrachaQuadraDaSpiroCis,
        price: 4,
        description: "",
        models: [
          {
            text: "Vermelho",
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
            text: "Ciano",
            isEnable: true,
          },
          {
            text: "Roxa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "72",
        name: "Caneta Fofa Docinho Perfumada Em Gel",
        type: "caneta",
        image: canetaFofaDocinhoPerfumadaEmGel,
        price: 9.5,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Marrom",
            isEnable: true,
          },
          {
            text: "Branco",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "73",
        name: "Caneta Fofa Naruto",
        type: "caneta",
        image: canetaFofaNaruto,
        price: 8.6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Sasuke",
            isEnable: true,
          },
          {
            text: "Sakura",
            isEnable: true,
          },
          {
            text: "Naruto",
            isEnable: true,
          },
          {
            text: "Kakashi",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "74",
        name: "Caneta Garfield",
        type: "caneta",
        image: canetaGarfield,
        price: 7,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "75",
        name: "Caneta Seringa com Líquido Colorido",
        type: "caneta",
        image: canetaSeringa02,
        price: 7.5,
        description:
          "Caneta esferográfica, ponta fina e com a escrita na cor azul",
        models: [
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: false,
          },
          {
            text: "Amarela",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "76",
        name: "Corretivo Caneta Brw 4ml",
        type: "corretivos fita",
        image: corretivoCanetaBrw4g,
        price: 5,
        description: "",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Lilás",
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
        ],
        isInCatalog: false,
      },
      {
        id: "77",
        name: "Corretivo Fita Neon Transparente",
        type: "corretivos fita",
        image: corretivoFitaNeonTransparente,
        price: 5.5,
        description: "",
        models: [
          {
            text: "Rosa",
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
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "78",
        name: "Corretivo Fita Pastel Solido",
        type: "corretivos fita",
        image: corretivoFitaPastelSolido,
        price: 6.2,
        description: "",
        models: [
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Nude",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Lilás",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "79",
        name: "Corretivo Fita Pastel Transparente 12m",
        type: "corretivos fita",
        image: corretivoFitaPastelTransparente12m,
        price: 9,
        description: "",
        models: [
          {
            text: "Branco",
            isEnable: true,
          },
          {
            text: "Lavanda",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Nude",
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
        ],
        isInCatalog: false,
      },
      {
        id: "80",
        name: "Estojo Espampado Dream Brw",
        type: "estojo",
        image: estojoEspampadoDreamBrw,
        price: 28,
        description: "",
        isInCatalog: false,
      },
      {
        id: "81",
        name: "Estojo Escolar Color Zipper Win Paper",
        type: "estojo",
        image: estojoEscolarColorZipperWinPaper,
        price: 18,
        description: "",
        models: [
          {
            text: "Ciano",
            isEnable: true,
          },
          {
            text: "Lavanda",
            isEnable: true,
          },
          {
            text: "Roxo",
            isEnable: false,
          },
          {
            text: "laranja",
            isEnable: false,
          },
          {
            text: "Vermelho",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "82",
        name: "Grampeador Brw Tons Pastel",
        type: "grampeadores",
        image: grampeadorBrwTonsPastel,
        price: 14,
        description: "",
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
            text: "Lavanda",
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
