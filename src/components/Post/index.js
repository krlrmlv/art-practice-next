'use client'
import { useParams } from 'next/navigation'

export default function Post() {

    // const params = useParams()
    const { post } = useParams()

    return (
        <div>
            Post Component {post}
        </div>
    );
}
