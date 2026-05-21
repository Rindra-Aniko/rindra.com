import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { jwtKey } from "@/lib/auth-config";

const key = jwtKey;

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("admin_session")?.value;

  // Rute admin login
  const isLoginPage = pathname === "/admin/login";

  // Rute admin yang dilindungi (selain login)
  const isAdminPath = pathname.startsWith("/admin") && !isLoginPage;

  if (isAdminPath) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Verifikasi token JWT
      await jwtVerify(token, key);
      return NextResponse.next();
    } catch (error) {
      console.error("Middleware JWT verification failed:", error);
      // Jika token tidak valid/expire, hapus session dan redirect ke login
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  // Jika sudah login dan mencoba ke halaman login, arahkan langsung ke admin dashboard
  if (isLoginPage && token) {
    try {
      await jwtVerify(token, key);
      return NextResponse.redirect(new URL("/admin", request.url));
    } catch (error) {
      // Token invalid, biarkan akses halaman login
    }
  }

  return NextResponse.next();
}

// Konfigurasi Matcher agar middleware hanya berjalan pada rute admin
export const config = {
  matcher: ["/admin/:path*"],
};
