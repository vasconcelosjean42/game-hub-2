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
// import marcaTextoJoccar from "./assets/produtos/marca-texto-joccar.webp";
import marcaTextoPastelBRW from "./assets/produtos/marcaTexto/marca-texto-pastel-brw-02.webp";
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
//import canetaHidroPastelBrw from "./assets/produtos/canetas/caneta-hidro-pastel-brw.webp";
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
import borrachaCapaPlasticaColorida from "./assets/produtos/borrachas/borracha-capa-plastica-colorida.webp";
import borrachaCisMove from "./assets/produtos/borrachas/borracha-cis-move.webp";
import borrachaFoods from "./assets/produtos/borrachas/borracha-foods.webp";
import borrachaVingadores from "./assets/produtos/borrachas/borracha-vingadores.webp";
import borrachaPool from "./assets/produtos/borrachas/borracha-pool.webp";
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
import borrachaQuadraDaSpiroCis from "./assets/produtos/borrachas/borracha-quadrada-spiro-cis.webp";
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
import lapisHbSpiroCis from "./assets/produtos/lapis/lapis-hb-spiro-cis.webp";
import lapisWestVillage from "./assets/produtos/lapis/lapis-west-village.webp";
import marcaTextoComGlitter from "./assets/produtos/marcaTexto/marca-texto-com-glitter.webp";
import marcaTextoEmGel from "./assets/produtos/marcaTexto/marca-texto-em-gel.webp";
import marcaTextoPontaDupla from "./assets/produtos/marcaTexto/marca-texto-ponta-dupla.webp";
import marcaTextoUrsinhos from "./assets/produtos/marcaTexto/marca-texto-ursinhos.webp";
import marcaTextoApagavel from "./assets/produtos/marcaTexto/marca-texto-apagavel.webp";
import canetaApagavelAstronautas from "./assets/produtos/canetas/caneta-apagavel-astronautas.webp";
import canetaApagavelBichinhos from "./assets/produtos/canetas/caneta-apagavel-bichinhos.webp";
import canetaApagavelCoracaoEPompom from "./assets/produtos/canetas/caneta-apagavel-coracao-e-pompom.webp";
import canetaApagavelCriaturasDoMar from "./assets/produtos/canetas/caneta-apagavel-criaturas-do-mar.webp";
import canetaApagavelPandas from "./assets/produtos/canetas/caneta-apagavel-pandas.webp";
import canetaCisScript from "./assets/produtos/canetas/caneta-cis-script.webp";
import canetaEsferograficaCisLolipop from "./assets/produtos/canetas/caneta-esferografica-cis-lolipop.webp";
import canetaEsferograficaCisMinus04 from "./assets/produtos/canetas/caneta-esferografica-cis-minus-04.webp";
import canetaEsferograficaClicacelSuperColorida from "./assets/produtos/canetas/caneta-esferografica-clicacel-super-colorida.webp";
import canetaEsferograficaColorida from "./assets/produtos/canetas/caneta-esferografica-colorida.webp";
import canetaGatinhos from "./assets/produtos/canetas/caneta-gatinhos.webp";
import canetaSpiroCis from "./assets/produtos/canetas/caneta-spiro-cis.webp";
import apontadorRapitores from "./assets/produtos/apontadores/apontador-rapitores.webp";
import grafiteAnimaisFofos07 from "./assets/produtos/grafites/grafite-animais-fofos-07.webp";
import grafiteLapiseiraTrocaPontaBrw from "./assets/produtos/grafites/grafite-lapiseira-troca-ponta-brw.webp";
import grafiteTonsLeves05 from "./assets/produtos/grafites/grafite-tons-leves-05.webp";
import grafiteTonsLeves07 from "./assets/produtos/grafites/grafite-tons-leves-07.webp";
import grafiteTrasparenteStyleOriginal07 from "./assets/produtos/grafites/grafite-trasparente-style-original-07.webp";
import tesouraComunColoridaWinPaper from "./assets/produtos/tesouras/tesoura-comun-colorida-win-paper.webp";
import tesouraDePicotar from "./assets/produtos/tesouras/tesoura-de-picotar.webp";
import borrachaTurmaDaMonica from "./assets/produtos/borrachas/borracha-turma-da-monica.webp";
import marcaTextoGoodVibesJoccarOffice from "./assets/produtos/marcaTexto/marca-texto-good-vibes-joccar-office.webp";
import marcaTextoPastelJoccarOffice from "./assets/produtos/marcaTexto/marca-texto-pastel-joccar-office.webp";
import postitTransparente50 from "./assets/produtos/postit/postit-transparente-50.webp";
import postitMiniJoccarOffice from "./assets/produtos/postit/postit-mini-joccar-office.webp";
import postitMarcaPagina from "./assets/produtos/postit/post-it-marca-pagina.webp";
import colaBastaoBRW9G from "./assets/produtos/colasBastao/cola-bastao-brw-9g.webp";
import canetaFofa10CoresBRW from "./assets/produtos/canetas/caneta-fofa-10-cores-brw.webp";
import canetaCisCristal16MM from "./assets/produtos/canetas/caneta-cis-cristal-16-mm.webp";
import canetaHidrograficaGraphPepsMaped04 from "./assets/produtos/canetas/caneta-hidrografica-graph-peps-maped.webp";
import canetaSpiroCisColorida from "./assets/produtos/canetas/caneta-spiro-cis-colorida.webp";

import borrachaMickeyMolin from "./assets/produtos/borrachas/borracha-mickey-molin.webp";
import borrachaCapaPlasticaTomPastel from "./assets/produtos/borrachas/borracha-capa-plastica-tom-pastel.webp";
import borrachaConjuntoCenoura from "./assets/produtos/borrachas/borracha-conjunto-cenouras.webp";
import grampeadoresCaixaDeGrampo from "./assets/produtos/grampeadores/grampeador-caixa-de-grampos.webp";
import grafitePontaDeGrafite05 from "./assets/produtos/grafites/grafite-ponta-de-grafite-05.webp";
import grafitePontaDeGrafite07 from "./assets/produtos/grafites/grafite-ponta-de-grafite-07.webp";

import corretivoCanetaCorretivaCis2ml from "./assets/produtos/corretivosFita/corretivo-caneta-cis-2ml.webp";

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

let prevScrollPoss = 0;

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
        name: "Lápis Stitch Azul - Molin",
        type: "Lápis",
        image: lapisStitchAzul,
        price: 3,
        description: "",
        isInCatalog: false,
      },
      {
        id: "2",
        name: "Lápis Stitch Rosa - Molin",
        type: "Lápis",
        image: lapisStitchRosa,
        price: 3,
        description: "",
        isInCatalog: false,
      },
      {
        id: "3",
        name: "Lápis Vingadores - Molin",
        type: "Lápis",
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
        id: "5",
        name: "Marca Texto Tom Pastel - BRW",
        type: "Marca Texto",
        image: marcaTextoPastelBRW,
        price: 4.2,
        description: "",
        models: [
          {
            text: "Lilás",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Laranja",
            isEnable: true,
          },
          {
            text: "Amarelo",
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
        id: "6",
        name: "Post-it Amarelo - Stickote",
        type: "Post-it",
        image: postitAmararelo100,
        price: 7.5,
        description: "100 folhas - 76x76mm",
        isInCatalog: false,
      },
      {
        id: "7",
        name: "Post-it Neon - Importado",
        type: "Post-it",
        image: postitNeon50,
        price: 7.4,
        description: "50 folhas - 76x76mm",
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
            isEnable: false,
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
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "8",
        name: "Post-it Pautado - Smart Note",
        type: "Post-it",
        image: postitPalta50,
        price: 6.5,
        description: "50 folhas - 76x76mm",
        isInCatalog: false,
      },
      {
        id: "9",
        name: "Post-it Preto",
        type: "Post-it",
        image: postitPreto,
        price: 8.5,
        description: "50 folhas",
        isInCatalog: false,
      },
      {
        id: "10",
        name: "Cola Bastao Homem Aranha - Molin",
        type: "Colas Bastão",
        image: colaBastaoHomemAranha,
        price: 5.6,
        description: "Cola bastão Molin, 9g",
        isInCatalog: false,
      },
      {
        id: "11",
        name: "Lápis Happy - Tilibra",
        type: "Lápis",
        image: lapisTilibraHappy,
        price: 2.2,
        description: "",
        models: [
          {
            text: "Lavanda",
            isEnable: false,
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
        type: "Lápis",
        image: lapisCisMove,
        price: 1.9,
        description: "[Item sortido]",
        models: [
          {
            text: "Verde - Azul",
            isEnable: true,
          },
          {
            text: "Azul - Roxo",
            isEnable: false,
          },
          {
            text: "Rosa - Roxo",
            isEnable: true,
          },
          {
            text: "Laranja - Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "13",
        name: "Post-it Tom Pastel - Importado",
        type: "Post-it",
        image: postitPastel50,
        price: 7,
        description: "50 folhas - 76x76mm",
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
            isEnable: false,
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
        type: "Canetas",
        image: canetaAbacate,
        price: 6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "15",
        name: "Caneta Bambu Pandinha",
        type: "Canetas",
        image: canetaBambuPanda,
        price: 5.5,
        description: "Caneta em gel, clicável e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "16",
        name: "Caneta Bob Esponja",
        type: "Canetas",
        image: canetaBobEsponja,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "17",
        name: "Caneta Borboletas",
        type: "Canetas",
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
        name: "Caneta Cacto Cute",
        type: "Canetas",
        image: canetaCactuCute,
        price: 6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "19",
        name: "Caneta Cacto",
        type: "Canetas",
        image: canetaCactu,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "20",
        name: "Caneta Cacto Mandacaru",
        type: "Canetas",
        image: canetaCactuNordeste,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "21",
        name: "Caneta Esferografica - BRW",
        type: "Canetas",
        image: canetaEsferograficaBrw,
        price: 6,
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
        type: "Canetas",
        image: canetaFastFood,
        price: 8.6,
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
        name: "Caneta Feras Chinesas",
        type: "Canetas",
        image: canetaFeras,
        price: 5.8,
        description: "Caneta em gel, clicável e com a escrita na cor preta",
        models: [
          {
            text: "Modelo 1",
            isEnable: true,
          },
          {
            text: "Modelo 2",
            isEnable: true,
          },
          {
            text: "Modelo 3",
            isEnable: true,
          },
          {
            text: "Modelo 4",
            isEnable: true,
          },
          {
            text: "Modelo 5",
            isEnable: true,
          },
          {
            text: "Modelo 6",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "24",
        name: "Caneta Games Apagável - BRW",
        type: "Canetas",
        image: canetaGamesApagavel,
        price: 9,
        description: "Caneta apagável, ponta fina, cor azul",
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
        type: "Canetas",
        image: canetaGroot,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      // {
      //   id: "26",
      //   name: "Caneta Hidrográfica Pastel Brw",
      //   type: "Canetas",
      //   image: canetaHidroPastelBrw,
      //   price: 9,
      //   description: "Caneta hidrográfica, ponta 0.4mm, tom pastel",
      //   isInCatalog: false,
      // },
      {
        id: "27",
        name: "Caneta Mangá - Hanako-kun",
        type: "Canetas",
        image: canetaManga,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "28",
        name: "Caneta Ossinho",
        type: "Canetas",
        image: canetaOssinho,
        price: 9,
        description: "Caneta esferográfica, escrita em cor azul",
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
        type: "Canetas",
        image: canetaPatinhas,
        price: 9,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Preto com Patinha Azul",
            isEnable: true,
          },
          {
            text: "Branco com Patinha Preta",
            isEnable: true,
          },
          {
            text: "Preto com Patinha Branca",
            isEnable: false,
          },
          {
            text: "Branco com Patinha Rosa",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "30",
        name: "Caneta Retrô",
        type: "Canetas",
        image: canetaRetro,
        price: 5.8,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Preto",
            isEnable: true,
          },
          {
            text: "Vermelho",
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
            text: "Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "31",
        name: "Caneta Retrô Ursos",
        type: "Canetas",
        image: canetaRetroUrsos,
        price: 5.8,
        description:
          "[Toque a imagem para consultar os modelos] Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Modelo 1",
            isEnable: false,
          },
          {
            text: "Modelo 2",
            isEnable: false,
          },
          {
            text: "Modelo 3",
            isEnable: true,
          },
          {
            text: "Modelo 4",
            isEnable: false,
          },
          {
            text: "Modelo 5",
            isEnable: false,
          },
          {
            text: "Modelo 6",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "32",
        name: "Caneta Anel de Saturno",
        type: "Canetas",
        image: canetaSaturno,
        price: 8.6,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Azul Claro",
            isEnable: true,
          },
          {
            text: "Azul Escuro",
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
        name: "Caneta Seringa Tom Pastel",
        type: "Canetas",
        image: canetaSeringa,
        price: 8,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        models: [
          {
            text: "Roxo",
            isEnable: false,
          },
          {
            text: "Branco",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "44",
        name: "Caneta Xadrez",
        type: "Canetas",
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
        name: "Borracha Capa Plastica Neon - BRW",
        type: "Borrachas",
        image: borrachaCapaPlasticaColorida,
        price: 2.4,
        description: "",
        models: [
          {
            text: "Amarelo",
            isEnable: true,
          },
          {
            text: "Laranja",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "46",
        name: "Borracha Cis Move",
        type: "Borrachas",
        image: borrachaCisMove,
        price: 3.6,
        description: "",
        models: [
          {
            text: "Azul - Lilás",
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
        name: "Borracha Foods - Leo&Leo",
        type: "Borrachas",
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
            text: "Rosquinha",
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
        name: "Borracha Vingadores - Molin",
        type: "Borrachas",
        image: borrachaVingadores,
        price: 4.5,
        description: "",
        models: [
          {
            text: "Cinza",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Preto",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "49",
        name: "Borracha Ursinho Pool - Leo&Leo",
        type: "Borrachas",
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
        id: "67",
        name: "Apontador Com Deposito Spiro Cis",
        type: "Apontadores",
        image: apontadorComDepositoSpiroCis,
        price: 4,
        description: "",
        models: [
          {
            text: "Azul",
            isEnable: false,
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
        name: "Apontador Minnie - Molin",
        type: "Apontadores",
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
        name: "Apontador com Depósito Soul - BRW",
        type: "Apontadores",
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
        name: "Apontador Vingadores - Molin",
        type: "Apontadores",
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
        name: "Borracha Cis Spiro",
        type: "Borrachas",
        image: borrachaQuadraDaSpiroCis,
        price: 3.5,
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
            isEnable: false,
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
        name: "Caneta Fofa Docinho Perfumada",
        type: "Canetas",
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
        type: "Canetas",
        image: canetaFofaNaruto,
        price: 9,
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
        type: "Canetas",
        image: canetaGarfield,
        price: 7,
        description: "Caneta em gel, ponta fina e com a escrita na cor preta",
        isInCatalog: false,
      },
      {
        id: "75",
        name: "Caneta Seringa com Líquido Colorido",
        type: "Canetas",
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
            isEnable: true,
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
        name: "Corretivo Caneta - BRW",
        type: "Corretivos",
        image: corretivoCanetaBrw4g,
        price: 5,
        description: "contém 4ml",
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
        type: "Corretivos",
        image: corretivoFitaNeonTransparente,
        price: 5.5,
        description: "",
        models: [
          {
            text: "Lilás",
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
        name: "Corretivo Fita Tom Pastel",
        type: "Corretivos",
        image: corretivoFitaPastelSolido,
        price: 6.2,
        description: "",
        models: [
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Bege",
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
          {
            text: "Nude",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "79",
        name: "Corretivo Fita Pastel Transparente - Importado",
        type: "Corretivos",
        image: corretivoFitaPastelTransparente12m,
        price: 9,
        description: "Tamanho 12m",
        models: [
          {
            text: "Beje",
            isEnable: true,
          },
          {
            text: "Lavanda",
            isEnable: false,
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
            isEnable: false,
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
            text: "Laranja",
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
        type: "Grampeadores",
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
            isEnable: false,
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
      {
        id: "83",
        name: "Lápis Spiro Cis",
        type: "Lápis",
        image: lapisHbSpiroCis,
        price: 1.9,
        description: "",
        models: [
          {
            text: "Roxo",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Vermeho",
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
            text: "Cinza",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "84",
        name: "Lapis West Village - Tilibra",
        type: "Lápis",
        image: lapisWestVillage,
        price: 2.2,
        description: "",
        isInCatalog: false,
      },
      {
        id: "85",
        name: "Marca Texto Com Glitter - Importado",
        type: "Marca Texto",
        image: marcaTextoComGlitter,
        price: 8,
        description: "",
        models: [
          {
            text: "Rosa",
            isEnable: false,
          },
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
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "86",
        name: "Marca Texto Em Gel Neon - BRW",
        type: "Marca Texto",
        image: marcaTextoEmGel,
        price: 6.2,
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
            text: "Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "87",
        name: "Marca Texto Ponta Dupla Neon - BRW",
        type: "Marca Texto",
        image: marcaTextoPontaDupla,
        price: 5,
        description: "",
        models: [
          {
            text: "Amarelo",
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
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Laranja",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "88",
        name: "Marca Texto Ursinhos - Importado",
        type: "Marca Texto",
        image: marcaTextoUrsinhos,
        price: 4.15,
        description: "",
        models: [
          {
            text: "Amarelo",
            isEnable: true,
          },
          {
            text: "Lilás",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: false,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Laranja",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "89",
        name: "Marca Texto Apagável Tom Pastel - BRW",
        type: "Marca Texto",
        image: marcaTextoApagavel,
        price: 9,
        description: "",
        models: [
          {
            text: "Amarelo",
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
          {
            text: "Rosa",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "90",
        name: "Caneta Apagável Astronautas",
        type: "Canetas",
        image: canetaApagavelAstronautas,
        price: 6.0,
        description: "",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Branco",
            isEnable: true,
          },
          {
            text: "Preto",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "91",
        name: "Caneta Apagavel Bichinhos",
        type: "Canetas",
        image: canetaApagavelBichinhos,
        price: 6.0,
        description: "",
        models: [
          {
            text: "Pandinha",
            isEnable: true,
          },
          {
            text: "Porquinho",
            isEnable: true,
          },
          {
            text: "Gatinho",
            isEnable: true,
          },
          {
            text: "Ursinho",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "92",
        name: "Caneta Apagável Coração e Pompom - BRW",
        type: "Canetas",
        image: canetaApagavelCoracaoEPompom,
        price: 12.0,
        description: "",
        models: [
          {
            text: "Pompom",
            isEnable: true,
          },
          {
            text: "Coração",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "93",
        name: "Caneta Apagável Criaturas do Mar",
        type: "Canetas",
        image: canetaApagavelCriaturasDoMar,
        price: 9.0,
        description: "",
        models: [
          {
            text: "Azul Escuro",
            isEnable: false,
          },
          {
            text: "Azul Claro",
            isEnable: false,
          },
          {
            text: "Azul Bebê",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "94",
        name: "Caneta Apagável Fofa Coelhinhos",
        type: "Canetas",
        image: canetaApagavelPandas,
        price: 6.0,
        description: "",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Branco",
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
        id: "95",
        name: "Caneta Cis Script",
        type: "Canetas",
        image: canetaCisScript,
        price: 2.5,
        description: "ponta 0.7mm",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Preto",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "96",
        name: "Caneta Esferográfica Cis Lollipop",
        type: "Canetas",
        image: canetaEsferograficaCisLolipop,
        price: 2.2,
        description: "",
        models: [
          {
            text: "Azul claro",
            isEnable: false,
          },
          {
            text: "Azul Escuro",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
          {
            text: "Preto",
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
        id: "97",
        name: "Caneta Esferográfica Cis Minus",
        type: "Canetas",
        image: canetaEsferograficaCisMinus04,
        price: 3.3,
        description: "Ponta 0.4mm",
        models: [
          {
            text: "Vermelho",
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
          {
            text: "Prata",
            isEnable: false,
          },
          {
            text: "Azul Claro",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "98",
        name: "Caneta Esferográfica Clicável Super Colorida",
        type: "Canetas",
        image: canetaEsferograficaClicacelSuperColorida,
        price: 3.0,
        description: "",
        models: [
          {
            text: "Roxo com Verde",
            isEnable: false,
          },
          {
            text: "Azul com Rosa",
            isEnable: false,
          },
          {
            text: "Amarelo com Azul",
            isEnable: false,
          },
          {
            text: "Verde com Roxo",
            isEnable: false,
          },
          {
            text: "Rosa com Laranja",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "99",
        name: "Caneta Esferográfica Clicável Colorida",
        type: "Canetas",
        image: canetaEsferograficaColorida,
        price: 3.0,
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
            text: "Amarelo",
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
        id: "100",
        name: "Caneta Gatinhos",
        type: "Canetas",
        image: canetaGatinhos,
        price: 8.6,
        description: "",
        models: [
          {
            text: "Amarelo",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Verde",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "101",
        name: "Caneta Cis Spiro",
        type: "Canetas",
        image: canetaSpiroCis,
        price: 4.0,
        description: "Ponta 0.7mm",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Preto",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "102",
        name: "Apontador Rapitores - BRW",
        type: "Apontadores",
        image: apontadorRapitores,
        price: 11.9,
        description: "",
        models: [
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Verde",
            isEnable: false,
          },
          {
            text: "Lilás",
            isEnable: false,
          },
          {
            text: "Azul",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "103",
        name: "Grafite Animais Fofos",
        type: "Grafites",
        image: grafiteAnimaisFofos07,
        price: 7,
        description: "ponta 0.7mm",
        models: [
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Verde",
            isEnable: true,
          },
          {
            text: "Laranja",
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
        id: "104",
        name: "Grafite Lapiseira Troca Ponta - BRW",
        type: "Grafites",
        image: grafiteLapiseiraTrocaPontaBrw,
        price: 4.5,
        description: "ponta 1.6mm",
        models: [
          {
            text: "Verde",
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
            text: "Amarelo",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "105",
        name: "Grafite Tom Pastel",
        type: "Grafites",
        image: grafiteTonsLeves05,
        price: 5.2,
        description: "ponta 0.5mm",
        models: [
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
          {
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "106",
        name: "Grafite Tom Pastel",
        type: "Grafites",
        image: grafiteTonsLeves07,
        price: 6,
        description: "ponta 0.7mm",
        models: [
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Lilás",
            isEnable: true,
          },
          {
            text: "Azul Escuro",
            isEnable: false,
          },
          {
            text: "Ciano",
            isEnable: true,
          },
          {
            text: "Azul Bebê",
            isEnable: false,
          },
          {
            text: "Nude",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "107",
        name: "Grafite Trasparente - Style Original",
        type: "Grafites",
        image: grafiteTrasparenteStyleOriginal07,
        price: 6.5,
        description: "ponta 0.7mm",
        models: [
          {
            text: "Branco",
            isEnable: false,
          },
          {
            text: "Amarelo",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: false,
          },
          {
            text: "Verde",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "108",
        name: "Tesoura Tradicional - Win Paper",
        type: "Tesouras",
        image: tesouraComunColoridaWinPaper,
        price: 6,
        description: "",
        models: [
          {
            text: "Amarelo",
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
        id: "109",
        name: "Tesoura de Picotar",
        type: "Tesouras",
        image: tesouraDePicotar,
        price: 8.5,
        description: "",
        models: [
          {
            text: "Modelo 1",
            isEnable: false,
          },
          {
            text: "Modelo 2",
            isEnable: true,
          },
          {
            text: "Modelo 3",
            isEnable: true,
          },
          {
            text: "Modelo 4",
            isEnable: false,
          },
          {
            text: "Modelo 5",
            isEnable: false,
          },
          {
            text: "Modelo 6",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "110",
        name: "Borracha Turma Da Mônica",
        type: "Borrachas",
        image: borrachaTurmaDaMonica,
        price: 2.5,
        description: "",
        models: [
          {
            text: "Cascão",
            isEnable: true,
          },
          {
            text: "Magali",
            isEnable: false,
          },
          {
            text: "Cebolinha",
            isEnable: false,
          },
          {
            text: "Mônica",
            isEnable: true,
          },
          {
            text: "Milena",
            isEnable: true,
          },
          {
            text: "Jeremias",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "111",
        name: "Marca Texto Good Vibes Joccar Office",
        type: "Marca Texto",
        image: marcaTextoGoodVibesJoccarOffice,
        price: 7,
        description: "",
        models: [
          {
            text: "Vermelho",
            isEnable: false,
          },
          {
            text: "Verde Ciano",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: true,
          },
          {
            text: "Rosa Nude",
            isEnable: true,
          },
          {
            text: "Salmão",
            isEnable: true,
          },
          {
            text: "Cinza",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "112",
        name: "Marca Texto Pastel Joccar Office",
        type: "Marca Texto",
        image: marcaTextoPastelJoccarOffice,
        price: 7,
        description: "",
        models: [
          {
            text: "Lilás",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
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
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "113",
        name: "Post-it Transparente - Importado",
        type: "Post-it",
        image: postitTransparente50,
        price: 8,
        description: "50 folhas, 76x76mm",
        isInCatalog: false,
      },
      {
        id: "114",
        name: "Post-it Mini - Joccar Office",
        type: "Post-it",
        image: postitMiniJoccarOffice,
        price: 3,
        description: "100 folhas, 38x50mm",
        isInCatalog: false,
      },
      {
        id: "115",
        name: "Post-it Marca Página - Importado",
        type: "Post-it",
        image: postitMarcaPagina,
        price: 3,
        description: "",
        models: [
          {
            text: "Modelo 01",
            isEnable: true,
          },
          {
            text: "Modelo 02",
            isEnable: true,
          },
          {
            text: "Modelo 03",
            isEnable: true,
          },
          {
            text: "Modelo 04",
            isEnable: true,
          },
          {
            text: "Modelo 05",
            isEnable: true,
          },
          {
            text: "Modelo 06",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "116",
        name: "Cola Bastao 9g - BRW",
        type: "Colas Bastão",
        image: colaBastaoBRW9G,
        price: 2.7,
        description: "",
        isInCatalog: false,
      },
      {
        id: "117",
        name: "Caneta Fofa 10 Cores - BRW",
        type: "Canetas",
        image: canetaFofa10CoresBRW,
        price: 19,
        description: "Caneta Esferográfica - ponta 0.7mm",
        models: [
          {
            text: "Borboleta lilás",
            isEnable: true,
          },
          {
            text: "Borboleta Azul",
            isEnable: true,
          },
          {
            text: "Corpo Azul com Arco-íris",
            isEnable: true,
          },
          {
            text: "Corpo Rosa com Arco-íris",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "118",
        name: "Caneta Cis Cristal",
        type: "Canetas",
        image: canetaCisCristal16MM,
        price: 2.5,
        description: "ponta 1.6mm",
        isInCatalog: false,
      },
      {
        id: "119",
        name: "Caneta Hidrografica Graph' Peps - Maped",
        type: "Canetas",
        image: canetaHidrograficaGraphPepsMaped04,
        price: 5,
        description: "",
        models: [
          {
            text: "Preto",
            isEnable: true,
          },
          {
            text: "Azul Escuro",
            isEnable: false,
          },
          {
            text: "Verde Escuro",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: true,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Laranja",
            isEnable: false,
          },
          {
            text: "Verde Claro",
            isEnable: true,
          },
          {
            text: "Azul Claro",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "120",
        name: "Caneta Spiro Cis Colorida",
        type: "Canetas",
        image: canetaSpiroCisColorida,
        price: 3.2,
        description: "",
        models: [
          {
            text: "Azul Claro",
            isEnable: true,
          },
          {
            text: "Azul Escuro",
            isEnable: false,
          },
          {
            text: "Laranja",
            isEnable: true,
          },
          {
            text: "Vermelho",
            isEnable: false,
          },
          {
            text: "Verde",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: false,
          },
          {
            text: "Roxo",
            isEnable: false,
          },
          {
            text: "Preto",
            isEnable: false,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "121",
        name: "Borracha Mickey - Molin",
        type: "Borrachas",
        image: borrachaMickeyMolin,
        price: 4.5,
        description: "",
        models: [
          {
            text: "Modelo 1",
            isEnable: true,
          },
          {
            text: "Modelo 2",
            isEnable: true,
          },
          {
            text: "Modelo 3",
            isEnable: true,
          },
          {
            text: "Modelo 4",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "122",
        name: "Borracha Capa Plastica Tom Pastel - BRW",
        type: "Borrachas",
        image: borrachaCapaPlasticaTomPastel,
        price: 2.5,
        description: "",
        models: [
          {
            text: "Lilás",
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
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "123",
        name: "Conjunto de Borrachas Cenoura Fofa",
        type: "Borrachas",
        image: borrachaConjuntoCenoura,
        price: 9,
        description: "",
        isInCatalog: false,
      },
      {
        id: "124",
        name: "Caixa de Grampos Coloridos - BRW",
        type: "Grampeadores",
        image: grampeadoresCaixaDeGrampo,
        price: 8,
        description: "Contem 1000 unidades - Tamanho dos grampos: 26/6 e 26/4",
        models: [
          {
            text: "Lilás",
            isEnable: true,
          },
          {
            text: "Azul",
            isEnable: false,
          },
          {
            text: "Rosa",
            isEnable: true,
          },
        ],
        isInCatalog: false,
      },
      {
        id: "125",
        name: "Ponta de Grafite 0.5mm",
        type: "Grafites",
        image: grafitePontaDeGrafite05,
        price: 2.5,
        description: "",
        isInCatalog: false,
      },
      {
        id: "126",
        name: "Ponta de Grafite 0.7mm",
        type: "Grafites",
        image: grafitePontaDeGrafite07,
        price: 2.5,
        description: "",
        isInCatalog: false,
      },
      //Contagem Certa - Verdadeira Contagem - Contagem Correta
      {
        id: "126",
        name: "Caneta Coretiva Cis",
        type: "Corretivos",
        image: corretivoCanetaCorretivaCis2ml,
        price: 4.2,
        description: "contém 2ml",
        models: [
          {
            text: "Azul",
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
        id: "34",
        name: "Caderno Harry Potter Listras das Casas",
        type: "Cadernos",
        image: cadernoHarryPotterListaCasas,
        price: 49.9,
        description:
          "Caderno College, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "35",
        name: "Caderno Harry Potter Brasao das Casas",
        type: "Cadernos",
        image: cadernoHarryPotterBrasaoCasas,
        price: 49.9,
        description:
          "Caderno College, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "36",
        name: "Caderno Joaninhas",
        type: "Cadernos",
        image: cadernoSemAdesivoJoaninhas,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "37",
        name: "Caderno Cachorrinhos",
        type: "Cadernos",
        image: cadernoSemAdesivoCachorrinhos,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "38",
        name: "Caderno Flores",
        type: "Cadernos",
        image: cadernoSemAdesivoFlores,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "39",
        name: "Caderno Coracões Doce",
        type: "Cadernos",
        image: cadernoSemadesivocoracoesdoce,
        price: 25,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, não possui adesivo",
        isInCatalog: false,
      },
      {
        id: "40",
        name: "Caderno Frida Kahlo Vermelho",
        type: "Cadernos",
        image: cadernoFridaVermelho,
        price: 45,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "41",
        name: "Caderno Hard Work",
        type: "Cadernos",
        image: cadernoHardWork,
        price: 35,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "42",
        name: "Caderno Craftcolor Papelão",
        type: "Cadernos",
        image: cadernoCraftcolorPapelao,
        price: 40,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas off white, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "43",
        name: "Caderno Star Wars",
        type: "Cadernos",
        image: cadernoStarWars,
        price: 38,
        description:
          "Caderno Universitário, Capa Dura, 1 Matérias, 80 Folhas, Culturama, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "50",
        name: "Caderno Disney Baby Yoda",
        type: "Cadernos",
        image: cadernoDisneyBabyYoda,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "51",
        name: "Caderno Disney Cininho",
        type: "Cadernos",
        image: cadernoDisneyCininho,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "52",
        name: "Caderno Disney Elza",
        type: "Cadernos",
        image: cadernoDisneyElza,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "53",
        name: "Caderno Disney Olaf",
        type: "Cadernos",
        image: cadernoDisneyOlaf,
        price: 41.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "54",
        name: "Caderno Harry Potter Brasao Escolas",
        type: "Cadernos",
        image: cadernoHarryPotterBrasaoEscolas,
        price: 39.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "55",
        name: "Caderno Harry Potter Defesa Contra Artes Das Trevas",
        type: "Cadernos",
        image: cadernoHarryPotterDefesaContraArtesDasTrevas,
        price: 39.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "56",
        name: "Caderno House Of Dragon Brasao Do Dragao",
        type: "Cadernos",
        image: cadernoHouseOfDragonBrasaoDoDragao,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "57",
        name: "Caderno House Of Dragon Dragao E Espada",
        type: "Cadernos",
        image: cadernoHouseOfDragonDragaoEEspada,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "58",
        name: "Caderno House Of Dragon Fire Will Reign",
        type: "Cadernos",
        image: cadernoHouseOfDragonFireWillReign,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "59",
        name: "Caderno House Of Dragon You Win Or You Die",
        type: "Cadernos",
        image: cadernoHouseOfDragonYouWinOrYouDie,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "60",
        name: "Caderno Marmorizado Be Authentic",
        type: "Cadernos",
        image: cadernoMarbleBeAuthentic,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "61",
        name: "Caderno Marmorizado Beautiful Be You",
        type: "Cadernos",
        image: cadernoMarbleBeautifulBeYou,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "62",
        name: "Caderno Marmorizado Dream The Impossible",
        type: "Cadernos",
        image: cadernoMarbleDreamTheImpossible,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "63",
        name: "Caderno Marmorizado Lovely Strong",
        type: "Cadernos",
        image: cadernoMarbleLovelyStrong,
        price: 35.9,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "64",
        name: "Caderno Rick And Morty Cabeca Do Morty",
        type: "Cadernos",
        image: cadernoRickAndMortyCabecaDoMorty,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "65",
        name: "Caderno Rick And Morty Foco Na Ciencia",
        type: "Cadernos",
        image: cadernoRickAndMortyFocoNaCiencia,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
      {
        id: "66",
        name: "Caderno Rick And Morty Portal Rick And Morty",
        type: "Cadernos",
        image: cadernoRickAndMortyPortalRickAndMorty,
        price: 41.2,
        description:
          "Caderno Universitário, Capa Dura, 10 Matérias, 160 Folhas, possui adesivos",
        isInCatalog: false,
      },
    ]);
  }, []);

  useEffect(() => {
    console.log("teste");

    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (navbar) {
        if (prevScrollPoss < currentScrollPos && currentScrollPos > 50) {
          navbar.style.top = "-80px";
        } else {
          navbar.style.top = "0";
        }
      }
      prevScrollPoss = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

        return product.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(search.toLowerCase());
      });
      console.log(newProducts);
      return newProducts;
    }
    return products;
  };

  return (
    <>
      <div className="w-full min-h-dvh bg-slate-200 p-4">
        <div
          id="navbar"
          className="flex fixed w-[100%] transition-[top] ease-in-out delay-50 duration-500 bg-slate-300 justify-center items-center py-2  px-5 sm:px-28 right-0 top-0"
        >
          <img className="w-24 mr-4" src={florDePapelLogo} />
          <div className="flex w-full sm:w-1/2 h-8 px-2 rounded-lg bg-slate-50 justify-center items-center">
            <IoSearchOutline />
            <input
              className={
                "w-full h-8 px-2 bg-transparent outline-0 focus:outline-none"
              }
              type="search"
              placeholder="Procurar produto..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mt-16">
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
