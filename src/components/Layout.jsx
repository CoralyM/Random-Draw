import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <section className="flex flex-col h-screen w-screen bg-gray text-center">
            <Header />
            {children}
            <Footer name={"Coraly"} />
        </section>
    )
}