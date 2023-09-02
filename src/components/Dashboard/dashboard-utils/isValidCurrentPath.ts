import { TCurrentPath } from "../index.types";

/**
 * Checks if a given path is a valid value of the `TCurrentPath` type.
 *
 * @param path - The path to check for validity.
 * @returns `true` if the path is valid for `TCurrentPath`, `false` otherwise.
 */
export function isValidCurrentPath(path: string): path is TCurrentPath {
	return ["/dashboard/posts/home", "/dashboard/walkthroughs/home", "/dashboard/series/home"].includes(path);
}
