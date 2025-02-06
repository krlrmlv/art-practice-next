import Post from "@/components/Post";

export const metadata = {
    title: "Post Page",
    description: "Single post page",
};

export default function PostPage({ params }) {
    // return  new Error ('www');
    return (
        <div>
            Post {params?.post}

            <Post />
        </div>
    );
}