"use client";
import Cart from "./components/shared/cart-container";
import Header from "./components/shared/Header";
import NavBar from "./components/shared/NavBar";

export default function Home() {
  const Cards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 m-5 gap-3">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    );
  };
  return (
    <>
      <NavBar />
      <Header />
      <Cards />
    </>
  );
}
