import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session, status: loading} = useSession()
    console.log(session, loading)

    return <div className="layout-header">
        <div>
            <Link href="/">
                <a>
                    Main
                </a>
            </Link>
        </div>
        <div>
        {session && (
            <Link href="/dashboard">
                <a>
                    Dashboard
                </a>
            </Link>
        )}
        {loading !== 'loading' && !session && (
            <Link href="/api/auth/signin">
                <a onClick={e => {
                    e.preventDefault()
                    signIn()
                }}>
                    sign in
                </a>
            </Link>
        )}
        {session && (
            <Link href="/api/auth/signout">
                <a onClick={e => {
                    e.preventDefault()
                    signOut()
                }}>
                    sign out
                </a>
            </Link>
        )}
        </div>
    </div>
}

export default Header