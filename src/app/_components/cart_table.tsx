import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartItem } from "@/types";

interface Props {
  cartItems: CartItem[];
}
const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
const CartTable = (props: Props) => {
  return (
    <div className="">
      <ScrollArea className="mb-4 rounded-md border">
        <div className="relative max-h-[350px] overflow-scroll md:max-h-[500px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.cartItems.map((product: CartItem) => (
                <TableRow key={product.id}>
                  <TableCell className="table-cell">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>AED {product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    {(product.quantity * product.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <div className="flex justify-between">
        <p className="">Subtotal </p>
        <p className="text-lg">
          {" "}
          {calculateTotalAmount(props.cartItems).toFixed(2) + " AED"}
        </p>
      </div>
    </div>
  );
};

export default CartTable;
