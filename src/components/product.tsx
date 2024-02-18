import { ProductProps } from "@/App";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import ProductDialog from "./productDialog";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { SelecUI } from "./SelectUI";

interface Props {
  product: ProductProps;
  handleAddProduct: (id: string, model: string) => void;
  handleRemoveProduct: (id: string) => void;
}

const Product = ({ product, handleAddProduct, handleRemoveProduct }: Props) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [model, setModel] = useState("");

  const handleChooseModel = (value: string) => {
    setModel(value);
  };

  return (
    <Dialog>
      <Card
        className={`inline-block
        m-4 ${product.isInCatalog && "border-green-500"} p-4`}
      >
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <p>R$ {product.price.toFixed(2)}</p>
          <CardDescription className="text-left mb-5 max-w-60">
            {product.description}
          </CardDescription>
        </CardHeader>
        {/* <div className="flex text-left w-72 flex-wrap">
          <p className="flex h-6 p-1 items-center mx-1 bg-yellow-500 rounded-full text-xs flex-shrink-0">
            Caderno Universitário
          </p>
          <p className="flex h-6 p-1 items-center mx-1 bg-yellow-500 rounded-full text-xs flex-shrink-0">
            Capa Dura
          </p>
          <p className="flex h-6 p-1 items-center mx-1 bg-yellow-500 rounded-full text-xs flex-shrink-0">
            10 Matérias
          </p>
          <p className="flex h-6 p-1 items-center mx-1 bg-yellow-500 rounded-full text-xs flex-shrink-0">
            200 folhas
          </p>
          <p className="flex h-6 p-1 items-center mx-1 bg-yellow-500 rounded-full text-xs flex-shrink-0">
            Jandaia
          </p>
        </div> */}
        <DialogTrigger asChild>
          <CardContent
            className="flex justify-center mt-3"
            onClick={() => setIsDisplay(true)}
          >
            <img
              className="w-48 h-48 min-[325px]:w-56 min-[325px]:h-56 object-cover rounded-xl mb-5"
              src={product.image}
            />
          </CardContent>
        </DialogTrigger>

        <CardFooter className="flex items-center justify-center flex-col gap-5">
          {product.models ? (
            <SelecUI
              models={product.models}
              setModel={handleChooseModel}
              disabled={product.isInCatalog}
            />
          ) : null}
          <Button
            className="w-48"
            onClick={() => {
              product.isInCatalog
                ? handleRemoveProduct(product.id)
                : handleAddProduct(product.id, model);
            }}
            variant={product.isInCatalog ? "destructive" : "default"}
            size={"lg"}
          >
            {product.isInCatalog ? "Remover do catálogo" : "Add ao catálogo"}
          </Button>
        </CardFooter>
      </Card>
      {isDisplay && <ProductDialog product={product} isDisplay={isDisplay} />}
    </Dialog>
  );
};

export default Product;
