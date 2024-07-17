import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client/"
const client = new PrismaClient()

export function GET(){
    return Response.json({
        name: 'ap',
        email:"easf@gma.com"
    })
}
export async function POST(req: NextRequest){
    const body = await req.json()
    console.log(body)
    return Response.json({
       mes: 'you are login in '
    })
}