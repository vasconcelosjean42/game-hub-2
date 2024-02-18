import { ProductProps } from "@/App";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  product: ProductProps;
  isDisplay: boolean;
}

export function ProductDialog({ product }: Props) {
  return (
    <>
      <DialogContent className="w-[300px] rounded-xl sm:w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <img className="rounded-xl" src={product.image} />
      </DialogContent>
    </>
  );
}

export default ProductDialog;
