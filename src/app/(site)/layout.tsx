import { redirect } from "next/navigation";

import Footer from "@/app/(site)/_components/_partial/Footer";
import Header from "@/app/(site)/_components/_partial/Header";
import { auth } from "@/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) return redirect("/login");
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </>
  );
}
