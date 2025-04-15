import Navbar from "@/components/navbar/navbar";
import MainPage from "@/app/pages/main/main"
import Footer from "@/components/footer/footer";
import "./globals.css";


export default function Home() {
  return (
    <>
      <Navbar/>
      <MainPage/>
      <Footer />
    </>
  );
}
