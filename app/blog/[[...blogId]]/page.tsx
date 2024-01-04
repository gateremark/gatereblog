import { promises as fs } from "fs";
import Markdown from "react-markdown";

type Props = {};

export default async function BlogPage(props: Props) {
    const data = await fs.readFile("./app/content/test.md", "utf-8");
    return (
        <Markdown className="prose max-w-none px-6 lg:px-56 md:px-40 sm:px-20 xl:px-72 text-slate-600 bg-gradient-to-b from-[#d6dbdc] to-[#ffffff]">
            {data}
        </Markdown>
    );
}
