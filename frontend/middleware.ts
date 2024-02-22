import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionData } from './app/(lib)/session'

export async function middleware(request: NextRequest) {
    const sessionData = await getSessionData()

    if (request.nextUrl.pathname === "/login") {
        if (sessionData) {
            return NextResponse.redirect(new URL(`/game/${sessionData.gameId}/character/${sessionData.characterId}/profile`, request.url))
        }
        return NextResponse.next();
    }
    if (!sessionData) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next();
}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png|map$).*)'],
}