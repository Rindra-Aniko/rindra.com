import { headers } from "next/headers";

/**
 * Memverifikasi Header Origin untuk mencegah serangan CSRF
 * @returns {Promise<boolean>} True jika origin valid, False jika tidak
 */
export async function verifyCsrf() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const host = headersList.get("x-forwarded-host") || headersList.get("host");

    // Jika tidak ada origin (misal dari script non-browser), tolak
    if (!origin) {
      console.warn("CSRF Check Failed: Missing Origin header");
      return false;
    }

    if (!host) {
      return false;
    }

    const originUrl = new URL(origin);
    
    // Verifikasi bahwa hostname dari origin sama dengan host server kita
    if (originUrl.host !== host) {
      console.warn(`CSRF Check Failed: Origin (${originUrl.host}) does not match Host (${host})`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("CSRF Check Error:", error);
    return false;
  }
}
