"use client"

import { useSession } from "next-auth/react"

export default function Page() {
    const { status, data } = useSession()

    console.log("user data", data)
    return (
        <div>
            <h1>Hello</h1>
            {status === 'unauthenticated' && <p>You are not logged in</p>}
            {status === 'authenticated' && <p>You are logged in now!</p>}
        </div>
    )
}
