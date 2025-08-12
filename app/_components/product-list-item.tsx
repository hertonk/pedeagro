import Image from "next/image";
import racao from "../../public/images/pedigree.png";
import { ShoppingBag } from "lucide-react";

const ProductListItem = () => {
  const baseUrl = process.env.APP_BASE_URL;

  return (
    <div className="flex-1">
        <div className="flex items-center justify-center rounded-t-xl border-x border-t">
          <Image src={racao} alt="" />
        </div>

        <div className="rounded-b-xl border p-4">
          <div className="flex items-center justify-between">
              <span className="text-primary text-base font-bold">
              Loja Vet São Miguel
              </span>
          </div>
          <h2 className="text-2xl font-bold">Ração Bovina</h2>
          <div className="my-3 text-base">
              <span>R$ 85,00</span>
          </div>
          <a href={`${baseUrl}/produto/10`} className="bg-primary flex w-full items-center justify-center rounded-md py-2 text-center text-xs font-bold text-white">
              <ShoppingBag size={16} className="mr-2" />
              <span>Compre agora</span>
          </a>
        </div>
    </div>
  );
};

export default ProductListItem;
