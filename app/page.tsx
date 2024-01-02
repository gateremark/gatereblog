import Nav from "./components/Nav";

export default function Home() {
    return (
        <main className="bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] h-screen">
            <Nav />
            <div className="md:px-8 px-4 pt-5 flex flex-col items-center">
                {" "}
                Blog 1
            </div>
            <div className="md:px-8 px-4 pt-5 flex flex-col items-center">
                {" "}
                Blog 2
            </div>
        </main>
    );
}
