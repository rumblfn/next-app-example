import { useRouter } from "next/router";

const BlogCurrent = () => {
    const router = useRouter();
    const blogId = router.query.blogId;

    return (
        <div>
            {blogId}
        </div>
    )
}

export default BlogCurrent;