import { useRouter } from "next/router"
import Link from "next/link";

const Subject = ({listTasks}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>
            Loading...
        </h1>
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {
                listTasks.map((item) => 
                <Link href={`/task/${item.id}`}
                    style={{fontSize: 22, fontWeight: 500, margin: 10}} 
                    key={`${item.subject_id}-${item.id}`}
                >
                    <a style={{padding: 8, color: 'green'}}>
                        {item.task_number}. {item.title}
                    </a>
                </Link>
                )
            }
        </div>
    )
}

export default Subject

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
        `http://localhost:8888/subject/getTasksInfo/?subject_id=${params.subjectId}`
    )
    const data = await response.json()

    return {
        props: {
            listTasks: data
        }
    }
}