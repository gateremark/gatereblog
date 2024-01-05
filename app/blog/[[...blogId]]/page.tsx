import { promises as fs } from "fs";
import { marked } from "marked";
import matter from "gray-matter";
import Image from "next/image";

type Props = {};

export default async function BlogPage(props: Props) {
    const text = await fs.readFile("./app/content/test.md", "utf-8");
    const htmlText = marked(text);
    const { content, data: {title, datePosted, dateUpdated, image}} = matter(text);
    return (
        <div className="px-6 lg:px-56 md:px-40 sm:px-20 xl:px-72 bg-gradient-to-b from-[#d6dbdc] to-[#ffffff]">
            <h1>{title}</h1>
            <h3>{datePosted}</h3>
            <h3>{dateUpdated}</h3>
            {/* <img src={image} alt="" /> */}
            <Image src={image} alt="Blog Image" width={775} height={325.5} />

            <article
                className="prose prose-slate max-w-none "
                dangerouslySetInnerHTML={{ __html: htmlText }}
            />
        </div>
    );
}
