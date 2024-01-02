import React from "react";

type Props = {
    title: string;
    description: string;
    date: string;
};

const BlogCard = ({ title, description, date }: Props) => {
    return (
        <div className="md:px-8 px-4 flex flex-col items-center col-span-1 border border-solid border-slate-400 rounded-xl hover:border-slate-600 w-96 transition-all duration-200 ease-in-out">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm text-gray-600">{date}</p>
        </div>
    );
};

export default BlogCard;