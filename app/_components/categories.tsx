import Image from "next/image";
import racao from "../../public/images/pedigree.png";
import { Box } from "lucide-react";

const Categories = () => {
  return (
    <div className="mx-auto max-w-[1200px] space-y-3 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categorias em Alta</h1>
        <a href="./categorias" className="text-sm text-cinza underline">
          Ver todos
        </a>
      </div>
      <div className="flex justify-between space-x-3">
        <div className="flex-1">
          <div className="flex items-center justify-center rounded-t-xl border-x border-t">
            <Image src={racao} alt="" />
          </div>

          <div className="rounded-b-xl border p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-primary">
                Rações para
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold">Gato</h2>
            <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
              <Box size={16} className="mr-2" />
              <span>Ver produtos</span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-center rounded-t-xl border-x border-t">
            <Image src={racao} alt="" />
          </div>

          <div className="rounded-b-xl border p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-primary">
                Rações para
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold">Gato</h2>
            <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
              <Box size={16} className="mr-2" />
              <span>Ver produtos</span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-center rounded-t-xl border-x border-t">
            <Image src={racao} alt="" />
          </div>

          <div className="rounded-b-xl border p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-primary">
                Rações para
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold">Gato</h2>
            <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
              <Box size={16} className="mr-2" />
              <span>Ver produtos</span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-center rounded-t-xl border-x border-t">
            <Image src={racao} alt="" />
          </div>

          <div className="rounded-b-xl border p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-primary">
                Rações para
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold">Gato</h2>
            <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
              <Box size={16} className="mr-2" />
              <span>Ver produtos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
