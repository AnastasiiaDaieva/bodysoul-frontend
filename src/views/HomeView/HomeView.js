import Footer from "components/Footer/Footer";

import Hero from "components/Hero/Hero";

import Services from "components/Services/Services";

import ContentLoader from "components/ContentLoader/ContentLoader";

function HomeView() {
  return (
    <>
      <main>
        <Hero />
        <Services />

        {/* <ContentLoader /> */}
      </main>
    </>
  );
}

export default HomeView;
