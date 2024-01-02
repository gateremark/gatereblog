type Props = {};

const Nav = (props: Props) => {
    return (
        <div className="h-32 sm:h-fit md:h-40 lg:h-44 xl:h-48 bg-black text-white flex justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <h1 className="p-4 font-light flex flex-col gap-2 items-center md:block">
                {" "}
                <span>
                    Software{" "}
                    <span className=" bg-white text-black p-2 font-semibold">
                        Engineering
                    </span>{" "}
                </span>
                +{" "}
                <span>
                    <span className=" bg-white text-black p-2 font-semibold">
                        Machine
                    </span>{" "}
                    Learning 🤖
                </span>
            </h1>
        </div>
    );
};

export default Nav;
