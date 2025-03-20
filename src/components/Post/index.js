'use client'
import { useParams } from 'next/navigation'
import Card from '../Card';

export default function Post() {

    // const params = useParams()
    const { post } = useParams()

    return (
        <div>
            Post Component {post}
            <Card large title={post} />
        </div>
    );
}
