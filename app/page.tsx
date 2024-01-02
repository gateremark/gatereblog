import Nav from "./components/Nav";
import BlogCard from "./components/BlogCard";

export default function Home() {
    const blogData = [
        {
            title: "Blog 1",
            description: "Blog 1 description",
            date: "2021-07-01",
            slug: "blog-1",
        },
        {
            title: "Blog 2",
            description: "Blog 2 description",
            date: "2021-07-02",
            slug: "blog-2",
        },
        {
            title: "Blog 3",
            description: "Blog 3 description",
            date: "2021-07-03",
            slug: "blog-3",
        },
        {
            title: "Blog 4",
            description: "Blog 4 description",
            date: "2021-07-04",
            slug: "blog-4",
        },
        {
            title: "Blog 5",
            description: "Blog 5 description",
            date: "2021-07-05",
            slug: "blog-5",
        },
        {
            title: "Blog 6",
            description: "Blog 6 description",
            date: "2021-07-06",
            slug: "blog-6",
        },
        {
            title: "Blog 7",
            description: "Blog 7 description",
            date: "2021-07-07",
            slug: "blog-7",
        },
        {
            title: "Blog 8",
            description: "Blog 8 description",
            date: "2021-07-08",
            slug: "blog-8",
        },
    ];
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
                <div className=" flex flex-col w-full items-center gap-4 pt-5 pb-6">
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
