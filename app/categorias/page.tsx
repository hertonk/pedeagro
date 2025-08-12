import Footer from "../_components/footer";
import Header from "../_components/header";
import ProductListItem from "../_components/product-list-item";

const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-[1200px] space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Categorias</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
