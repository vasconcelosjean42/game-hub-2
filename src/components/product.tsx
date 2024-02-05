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

interface Props {
  product: ProductProps;
  handleAddProduct: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
}

const Product = ({ product, handleAddProduct, handleRemoveProduct }: Props) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <Dialog>
      <Card className={`inline-block m-4 ${isAdd && "border-green-500"}`}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>R$ {product.price.toFixed(2)}</CardDescription>
        </CardHeader>
        <DialogTrigger asChild>
          <CardContent
            className="flex justify-center"
            onClick={() => setIsDisplay(true)}
          >
            <img
              className="w-32 h-32 object-cover rounded-sm"
              src={product.image}
            />
          </CardContent>
        </DialogTrigger>
        <CardFooter className="flex items-center justify-center">
          <Button
            onClick={() => {
              setIsAdd((prevState) => !prevState);
              isAdd
                ? handleRemoveProduct(product.id)
                : handleAddProduct(product.id);
            }}
            variant={isAdd ? "destructive" : "default"}
            size={"lg"}
          >
            {isAdd ? "Remover do catálogo" : "Add ao catálogo"}
          </Button>
        </CardFooter>
      </Card>
      {isDisplay && <ProductDialog product={product} isDisplay={isDisplay} />}
    </Dialog>
  );
};

export default Product;
