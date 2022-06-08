import useSWR from "swr";

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard');
    const data = await res.json();

    return data;
}

function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return 'Some errors'
    if (!data) return 'Loading...'

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Followers - {data.followers}</p>
            <p>Following - {data.following}</p>
        </div>
    )
}

export default DashboardSWR;