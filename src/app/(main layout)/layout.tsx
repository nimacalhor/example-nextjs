 
import Header from "@global/components/Header";
import Footer from "@global/components/Footer";

type layoutProps = { children: React.ReactNode };

function layout({ children }: layoutProps) {
  return (
    <>
      <Header />
      <div className=""></div>
      {children}
      <Footer />
    </>
  );
}

export default layout;
