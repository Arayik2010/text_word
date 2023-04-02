import { NextResponse } from "next/server";


export function middleware(request) {
    console.log('Midelwere fail')
    return NextResponse.rewrite(req.nextUrl)

}
export const config ={
    matcher:"/post1/:path*"
}
