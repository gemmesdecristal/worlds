'use server'

import { cookies } from 'next/headers'



export async function authenticate(gameName: string, characterId: string) {
  // let sessionData = null
  // try {
  //   const body = {
  //     "game_name": gameName,
  //     "character_id": characterId
  //   }
  //   const response = await fetch(BASE_URL + "/authenticate", {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     cache: "no-store"
  //   })
  //   if (!response.ok) {
  //     throw new Error("Failed to authenticate")
  //   }
  //   const resposneSessionData = await response.json()
  //   sessionData = {
  //     "gameId": resposneSessionData.game_id,
  //     "characterId": resposneSessionData.character_id
  //   }
  // } catch (error) {
  //   console.log("Yeah Yeah, we should handle this better.")
  //   console.log(error)
  //   return
  // }

  let sessionData = {
    gameId: "65d6760f1a35868db0bad977",
    characterId: "65d3e5daf7d045e318a8cf19"
  }

  // TODO: encrypt session data
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  return sessionData
}