import Link from "next/link";

const Home = ({subjects}) => {

    return (
        <div>
            <div>
                <h1>
                    Home Page
                </h1>
                <Link href="/blog">
                    <a style={{marginLeft: 8, color: 'green'}}>
                        blog
                    </a>
                </Link>
                <Link href="/users">
                    <a style={{marginLeft: 8, color: 'green'}}>
                        users
                    </a>
                </Link>
                <Link href="/posts">
                    <a style={{marginLeft: 8, color: 'green'}}>
                        posts
                    </a>
                </Link>
                <Link href="/news">
                    <a style={{marginLeft: 8, color: 'green'}}>
                        News
                    </a>
                </Link>
                <br/>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 32}}>
                    <h2>Availiable modules</h2>
                    {/* {subjects.map(subject => 
                        <Link href={`/subject/${subject.id}`} key={subject.id}>
                            <a style={{padding: 8, color: 'green'}}>
                                {subject.title}
                            </a>
                        </Link>)
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Home;

// export async function getStaticProps() {
//     const response = await fetch('http://localhost:8888/subject/getSubjects')
//     const data = await response.json()

//     return {
//         props: {
//             subjects: data,
//         },
//         revalidate: 30
//     }
// }