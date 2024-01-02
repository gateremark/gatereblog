import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    weight: ["400", "100"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GatereBlog",
    description: "Mark Gatere's Blog.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1704210975/BLOG_mfne4e.webp",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
