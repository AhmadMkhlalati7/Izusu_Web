import Footer from "@/app/(guest)/_components/_partial/Footer";
import Header from "@/app/(guest)/_components/_partial/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </>
  );
}
