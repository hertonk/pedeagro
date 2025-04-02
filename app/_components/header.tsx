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
      <div className="mx-auto flex max-w-[1200px] justify-between p-6">
        <Link href={baseUrl ?? ""}>
          <Image src={logo} width={43.8} height={55.05} alt="Logo Pedeagro" />
        </Link>
        <div className="flex items-center justify-between rounded-lg border px-3 py-2">
          <Search className="mr-2" />
          <input
            type="text"
            name="search"
            className="w-[358px] border-none outline-none"
            placeholder="Pesquise por produto, serviço ou loja"
          />
        </div>
        <div className="flex items-center justify-center">
          <Select>
            <SelectTrigger className="w-[160px] outline-none">
              <MapPin />
              <SelectValue placeholder="Local" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Floresta-PE</SelectItem>
              <SelectItem value="system">Petrolina-PE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <nav className="flex items-center justify-between">
          <a href={baseUrl} className="mr-3 font-bold">
            Início
          </a>
          <a href={baseUrl + "/categorias"} className="font-bold">
            Categorias
          </a>
        </nav>
        <button className="rounded-md border border-primary px-4 py-3 text-primary">
          Cadastre-se
        </button>
        <button className="rounded-md bg-primary px-4 py-3 text-white">
          Fazer Login
        </button>
      </div>
    </div>
  );
};

export default Header;
