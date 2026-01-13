import type { NextRequest } from 'next/server';
import type { IRegister } from '@/interfaces/user'
import { MRegister } from '@/middleware/register'
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  
    const { firstname, lastname, email, password, confirmPassword } : IRegister = await req.json()

    const middle = MRegister ({firstname, lastname, email, password, confirmPassword })

    
    if (middle.length > 0) {
    return Response.json(middle)
    }



    try {
        await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            },
        })

    } catch(e){

    console.log(e)
    return {erro: true, message: 'error', code: "E02"}
    }

    return Response.json({message: 'Hello World'})
    
  }