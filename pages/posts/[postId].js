import { useRouter } from "next/router"

const Post = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>
            Loading...
        </h1>
    }

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    )
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}