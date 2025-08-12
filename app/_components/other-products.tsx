import ProductListItem from "./product-list-item";

const OtherProducts = () => {
  return (
    <div className="mx-auto max-w-[1200px] space-y-3 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Outros Produtos</h1>
        <a href="#" className="text-cinza text-sm underline">
          Ver todos
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  );
};

export default OtherProducts;
