export {default} from "next-auth/middleware";

export const config = {
    matcher: [
        "/pages/add_category/:path*",
        "/pages/dashboard/:path*",
        "/pages/post/:path*",
        "/profile",
        "/settings"
    ]
}