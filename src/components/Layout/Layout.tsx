import React, { ReactNode } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
