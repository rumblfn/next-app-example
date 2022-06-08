import { useState, useEffect } from "react"
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        (async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setDashboardData(session.user)
                setLoading(false)
            }
        })()
    }, [])

    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }
    console.log(dashboardData)

    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, margin: 32}}>
                <h4>{dashboardData.name}</h4>
                <div style={{borderRadius: 8, width: 200, height: 100, overflow: 'hidden'}}>
                    <Image alt="profileImg"
                        objectFit="cover" width={200} height={100} 
                        src={dashboardData.image} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;