/**
 * This file contains constants related to authentication routes and public routes.
 */

/**
 * Array of public routes
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * Array of authentication routes
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * Prefix for authentication API routes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * Default login redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
