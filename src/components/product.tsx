import { ProductProps } from "@/App";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  product: ProductProps;
  handleAddProduct: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
}

const Product = ({ product, handleAddProduct, handleRemoveProduct }: Props) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  return (
    <div>
      <Card className={`inline-block m-4 ${isAdd && "border-green-500"}`}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img
            className="w-32 h-32 object-cover"
            src="https://picsum.photos/id/237/200/300"
          />
        </CardContent>
        <CardFooter>
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
    </div>
  );
};

export default Product;
