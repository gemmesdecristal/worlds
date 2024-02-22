"use server";


import { cookies } from "next/headers"

export async function disconnect() {
    cookies().delete('session')
}