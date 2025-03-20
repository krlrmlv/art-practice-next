import Post from "@/components/Post";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Post Page",
    description: "Single post page",
};

export default function PostPage({ params }) {
    // return  new Error ('www');

    if (!params) notFound()
    return (
        <div>
            Post {params?.post}
            <Post />
        </div>
    );
}