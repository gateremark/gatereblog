import Nav from "./components/Nav";
import BlogCard from "./components/BlogCard";
import { blogData } from "./components/BlogData";

export default function Home() {
    return (
        <main className="bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] h-full ">
            <Nav />
            <div className="px-4 py-4">
                <div className="mx-auto grid grid-cols-1 gap-8 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:px-10 xl:py-10 2xl:px-24 2xl:py-10">
                    <div className="md:px-8 px-4 flex flex-col items-center col-span-1 md:row-span-2 xl:col-span-2 border border-solid border-slate-400 hover:border-slate-600 rounded-xl transition-all duration-200 ease-in-out">
                        {" "}
                        <h1 className="text-2xl font-semibold">
                            Featured Blog 1
                        </h1>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, totam? Cum quidem sunt facilis illo
                            dolorem in, voluptates doloremque dolores?
                        </p>
                        <p className="text-sm text-gray-600">2021-07-04</p>
                    </div>
                    <div className="md:px-8 px-4 flex flex-col items-center col-span-1 border border-solid border-slate-400 hover:border-slate-600 rounded-xl transition-all duration-200 ease-in-out">
                        {" "}
                        <h1 className="text-2xl font-semibold">
                            Featured Blog 2
                        </h1>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, totam? Cum quidem sunt facilis illo
                            dolorem in, voluptates doloremque dolores?
                        </p>
                        <p className="text-sm text-gray-600">2021-07-04</p>
                    </div>
                    <div className="md:px-8 px-4 flex flex-col items-center col-span-1 border border-solid border-slate-400 hover:border-slate-600 rounded-xl transition-all duration-200 ease-in-out">
                        {" "}
                        <h1 className="text-2xl font-semibold">
                            Featured Blog 3
                        </h1>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, totam? Cum quidem sunt facilis illo
                            dolorem in, voluptates doloremque dolores?
                        </p>
                        <p className="text-sm text-gray-600">2021-07-04</p>
                    </div>
                </div>
                <hr className=" border border-solid border-[#000000] my-5" />
                <div className=" flex flex-col w-full items-center gap-4 md:pt-2 pb-6 px-0 lg:px-56 md:px-40 sm:px-20 xl:px-72">
                    {blogData.map((blog) => (
                        <BlogCard
                            key={blog.slug}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
