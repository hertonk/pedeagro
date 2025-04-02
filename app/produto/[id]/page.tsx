import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Image from "next/image";
import racao from "../../../public/images/pedigree.png";
import nutrivale from "../../../public/images/nutrivale.png";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const baseUrl = process.env.APP_BASE_URL;

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-[1200px] space-y-3 p-6">
        <div className="flex items-start justify-between">
          <div className="mr-5 flex-1 space-y-5">
            <h1 className="text-2xl font-bold">Ração Pedegree {params.id}</h1>
            <Image src={racao} alt="" className="w-full border" />
          </div>
          <div className="mt-12 flex-1 space-y-5">
            <h2 className="text-2xl text-cinza">R$ 120,00</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <div>
              <p className="text-cinza">
                Quantidade:{" "}
                <input
                  type="number"
                  min={0}
                  placeholder="1"
                  className="w-[70px] rounded-md border border-primary px-3 py-2"
                />
              </p>
            </div>
            <Link
              href={`${baseUrl}/produto/10`}
              className="text flex w-full items-center justify-center rounded-md bg-primary py-3 text-center font-bold text-white"
            >
              <ShoppingBag size={16} className="mr-2" />
              <span>Compre agora</span>
            </Link>
            <div className="space-y-5">
              <p>Vendido e entregue por:</p>
              <div className="flex items-center justify-between">
                <div className="mr-4">
                  <Image
                    src={nutrivale}
                    width={300}
                    height={200}
                    alt="Nutrivale"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    Nutrivale Rações
                  </h3>
                  <p className="text-xs">
                    Av. Dr. Ulisses Guimarães, 12 - d - Portal da Cidade,
                    Petrolina - PE, 56313-295
                  </p>
                  <div>
                    <Link href={""} className="font-bold">
                      Visite a loja Nutrivale Rações
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
