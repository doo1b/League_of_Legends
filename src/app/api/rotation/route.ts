import { NextResponse } from "next/server";

const API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
const API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
  try {
    if (!API_KEY) {
      throw new Error("api key undefind");
    }

    const res = await fetch(API_URL, {
      headers: {
        "X-Riot-Token": API_KEY,
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    throw error;
  }
}
