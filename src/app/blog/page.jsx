import Link from "next/link";

export default function BlogPage() {
    return (
        <div>
            blog page
            <ul>
                <li>
                    <Link href={`/blog/1`}>Post 1</Link>
                </li>
            </ul>
        </div>
    );
}
