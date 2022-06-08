import { useRouter } from "next/router"
import Link from "next/link";

const Task = ({subjects}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>
            Loading...
        </h1>
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {subjects.map(subject => 
                <Link href={`/subject/${subject.id}`} key={subject.id}>
                    <a style={{padding: 8, color: 'green'}}>
                        {subject.title}
                    </a>
                </Link>)
            }
        </div>
    )
}

export default Task

export async function getStaticPaths() {
    return {
        paths: [
            
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
        `http://localhost:8888/subject/getSubjects`
    )
    const data = await response.json()

    return {
        props: {
            subjects: data,
        }
    }
}