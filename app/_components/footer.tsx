import Image from "next/image";
import logo from "../../public/images/logorodape.png";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto flex flex-col md:flex-row max-w-[1200px] items-center space-y-10 md:space-y-0 justify-between p-6">
        <div className="flex-1">
          <Image src={logo} alt="Pedeagro logo" />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-xl font-bold text-white">Pedeagro</h2>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Quem somos
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Temos de uso
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Política de cancelamento
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Política de privacidade
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Política de cookies
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Trabalhe conosco
            </a>
          </p>
          <p>
            <a href="#" className="text-white text-opacity-60">
              Central de ajuda
            </a>
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">Pague com</h2>
          <div></div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] flex-col md:flex-row justify-between space-y-5 p-6">
        <div className="flex items-center justify-center md:justify-end space-x-5">
          <h2 className="text-xl font-bold text-white">
            Fique por dentro de tudo
          </h2>
          <Instagram color="white" /> <Facebook color="white" />
        </div>
        <div className="border-t border-t-white border-opacity-20 py-5 text-center">
          <p className="text-white">
            PEDEAGRO LTDA | Av. Paulista, 7753 - Bela Vista, São Paulo - SP -
            CEP 09090-090 | CNPJ: 52.525.252/0001-55
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
