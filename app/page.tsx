import Categories from "./_components/categories";
import Footer from "./_components/footer";
import Header from "./_components/header";
import OtherProducts from "./_components/other-products";
import TrendingProducts from "./_components/trending-products";

export default function Home() {
  return (
    <div>
      <Header />
      <TrendingProducts />
      <Categories />
      <OtherProducts />
      <Footer />
    </div>
  );
}
