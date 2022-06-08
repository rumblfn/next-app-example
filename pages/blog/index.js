import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Blog = ({data}) => {
    const router = useRouter();

    const handleClick = () => {
        console.log('placing your order')
        router.push('/about')
    }

    return (
        <div>
            Blogs Page
            <Link href="/blog/1">
                <a style={{marginLeft: 8, color: 'green'}}>
                    1.js
                </a>
            </Link>
            <Link href="/blog/first">
                <a style={{marginLeft: 8, color: 'green'}}>
                    first.js
                </a>
            </Link>
            <Link href="/blog/123/123/123ffdgdfg">
                <a style={{marginLeft: 8, color: 'green'}}>
                    Trash
                </a>
            </Link>
            <button onClick={handleClick}>
                Place order
            </button>
            <h2>{data}</h2>
        </div>
    )
}

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.CLIENT_URL}/blog`,
                permanent: false
            }
        }
    }

    return {
        props: {
            data: session ? 'List of 100 personalized blogs' : 'List of 3 blogs'
        }
    }
}