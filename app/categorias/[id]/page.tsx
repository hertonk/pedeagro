import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Image from "next/image";
import racao from "../../../public/images/pedigree.png";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CategoriesDetailPage = ({ params }: { params: { id: string } }) => {
  const baseUrl = process.env.APP_BASE_URL;

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-[1200px] space-y-3 p-6">
        <div className="items-center justify-between">
          <p className="text-sm text-cinza">Produtos em</p>
          <h1 className="text-2xl font-bold">Ração</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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
              <Link
                href={`${baseUrl}/produto/10`}
                className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-center text-xs font-bold text-white"
              >
                <ShoppingBag size={16} className="mr-2" />
                <span>Compre agora</span>
              </Link>
            </div>
          </div>
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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
          <div className="w-[277px]">
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

export default CategoriesDetailPage;
