"use client";

import { ShoppingBag, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <a
        className="flex items-center rounded-full bg-black px-2 py-2"
        href=" https://wa.me/+201279288814"
        target="_blank"
      >
        <MessageCircle size={21.8} color="#0bf933" />
      </a>

      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-2 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="">
          {/* {cart.items.length}  ml-2 text-sm font-medium text-white */}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
