import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Image from "next/image";
import racao from "../../../public/images/pedigree.png";
import nutrivale from "../../../public/images/nutrivale.png";
import { ShoppingBag } from "lucide-react";

const CompanyPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-[1200px] space-y-3 p-6">
        <div className="my-12 text-center">
          <div className="space-y-3">
            <Image
              src={nutrivale}
              width={300}
              height={200}
              className="mx-auto"
              alt="Nutrivale"
            />
            <h3 className="text-xl font-bold text-primary">
              Nutrivale Rações {params.id}
            </h3>
            <p className="text-xs">
              Av. Dr. Ulisses Guimarães, 12 - d - Portal da Cidade, Petrolina -
              PE, 56313-295
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Todos os produtos</h1>
        </div>
        <div className="flex justify-between space-x-3">
          <div className="flex-1">
            <div className="flex items-center justify-center rounded-t-xl border-x border-t">
              <Image src={racao} alt="" />
            </div>

            <div className="rounded-b-xl border p-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-primary">
                  Loja Vet São Miguel
                </span>
              </div>
              <h2 className="text-2xl font-bold">Ração Bovina</h2>
              <div className="my-3 text-base">
                <span>R$ 85,00</span>
              </div>
              <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
                <ShoppingBag size={16} className="mr-2" />
                <span>Compre agora</span>
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
                  Loja Vet São Miguel
                </span>
              </div>
              <h2 className="text-2xl font-bold">Ração Bovina</h2>
              <div className="my-3 text-base">
                <span>R$ 85,00</span>
              </div>
              <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
                <ShoppingBag size={16} className="mr-2" />
                <span>Compre agora</span>
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
                  Loja Vet São Miguel
                </span>
              </div>
              <h2 className="text-2xl font-bold">Ração Bovina</h2>
              <div className="my-3 text-base">
                <span>R$ 85,00</span>
              </div>
              <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
                <ShoppingBag size={16} className="mr-2" />
                <span>Compre agora</span>
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
                  Loja Vet São Miguel
                </span>
              </div>
              <h2 className="text-2xl font-bold">Ração Bovina</h2>
              <div className="my-3 text-base">
                <span>R$ 85,00</span>
              </div>
              <button className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white">
                <ShoppingBag size={16} className="mr-2" />
                <span>Compre agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyPage;
