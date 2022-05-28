import Footer from "components/Footer/Footer";

import Hero from "components/Hero/Hero";

import Services from "components/Services/Services";

import ContentLoader from "components/ContentLoader/ContentLoader";
import Contacts from "components/Contacts/Contacts";

function HomeView() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Contacts />
        {/* <ContentLoader /> */}
      </main>
    </>
  );
}

export default HomeView;
