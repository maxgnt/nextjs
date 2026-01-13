import type { NextRequest } from 'next/server'


export async function GET(request: NextRequest, { params }: { params: Promise<{ url: string }> }) {
    
    console.log((await params).url)

    return Response.json({message: 'Hello World'})
    
  }