import Link from "next/link"

const PostList = ({posts}) => {
    return (
        <>
            <h1>List of posts</h1>
            {posts.map(post => 
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            )}
        </>
    )
}

export default PostList

export async function getStaticProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}