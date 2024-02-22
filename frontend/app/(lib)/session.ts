import { cookies } from "next/headers"

export async function getSessionData() {
    // TODO: decrypt session data
    const sessionData = cookies().get('session')?.value
    return sessionData ? JSON.parse(sessionData) : null
}