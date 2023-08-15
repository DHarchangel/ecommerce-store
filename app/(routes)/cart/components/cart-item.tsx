"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className=" relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className=" object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col relative ml-4 justify-between sm:ml-6">
        <div className=" absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">{data.name}</p>
          </div>
          <div className="flex mt-1 text-sm">
            <p className=" text-gray-500">{data.color.name}</p>
            <p className=" text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
          {/* Product Details */}
        </div>
      </div>
    </li>
  );
};
export default CartItem;
