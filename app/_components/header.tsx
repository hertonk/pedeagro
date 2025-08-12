import Image from "next/image";
import logo from "../../public/images/logo.png";
import { MapPin, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../_components/ui/select";
import Link from "next/link";

const Header = () => {
  const baseUrl = process.env.APP_BASE_URL;

  return (
   <div className="border-b">
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 p-4">
      
      <div className="flex flex-1 items-center justify-start gap-4">
        {/* Logo */}
        <Link href={baseUrl ?? ""}>
          <Image src={logo} width={43.8} height={55.05} alt="Logo Pedeagro" />
        </Link>

        {/* Search */}
        <div className="flex items-center rounded-lg border px-3 py-2 flex-1">
          <Search className="mr-2" />
          <input
            type="text"
            name="search"
            className="flex-1 border-none outline-none"
            placeholder="Pesquise por produto, serviço ou loja"
          />
        </div>
      </div>

     <div className="flex flex-1 flex-col space-y-5 md:space-y-0 sm:flex-row">
       
       <div className="flex flex-1 items-center justify-start gap-4 md:mr-5">
        {/* Localização */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[160px] outline-none">
              <MapPin />
              <SelectValue placeholder="Local" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="dark">Floresta-PE</SelectItem>
              <SelectItem value="system">Petrolina-PE</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Menu */}
        <nav className="flex flex-1 flex-row items-center gap-2">
          <a href={baseUrl} className="font-bold">
            Início
          </a>
          <a href={baseUrl + "/categorias/1"} className="font-bold">
            Categorias
          </a>
        </nav> 
      </div>

      <div className="flex flex-1 items-center justify-center">
        {/* Botões */}
        <div className="flex flex-1 flex-row gap-2">
          <button className="rounded-md border border-primary px-4 py-3 text-sm  flex-1">
            Cadastrar
          </button>
          <button className="rounded-md bg-primary px-4 py-3 text-white text-sm flex-1">
            Fazer Login
          </button>
        </div>
      </div>

     </div>

    </div>
  </div>
  );
};

export default Header;
