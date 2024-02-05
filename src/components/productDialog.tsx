import { ProductProps } from "@/App";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
