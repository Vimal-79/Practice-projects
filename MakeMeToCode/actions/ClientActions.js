"use client"

import { useSession } from 'next-auth/react'

export const ClientEmail = async () => {
    const { data: session, status } = useSession()
    return session.user.email;
}
