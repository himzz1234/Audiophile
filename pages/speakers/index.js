import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCategory from "../../components/ProductCategory";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";

const speakers = () => {
  return (
    <Layout>
      <Header />

      <article className="bg-[#191919] h-[150px] lg:h-[300px] w-full text-white grid place-items-center font-manrope">
        <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold">
          Speakers
        </h1>
      </article>

      <main className="mt-20 font-manrope max-w-xl px-5 lg:px-0 md:max-w-4xl lg:max-w-6xl mx-auto">
        <ProductList category="speakers" />

        <ProductCategory />
      </main>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="footer" className="bg-[#191919]">
        <Footer />
      </section>
    </Layout>
  );
};

export default speakers;
