import type { NextRequest } from 'next/server'

interface IExemple {
  params: Promise<{url: string }>
  }


export async function GET(request: NextRequest, { params }: IExemple) {
    
    console.log((await params).url)

    return Response.json({message: 'Hello World'})
    
  }