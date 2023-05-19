/**
 * Capitalizes the first letter of each word in the given text.
 *
 * @param {string} text - The text to be capitalized.
 * @return {string} The capitalized text.
 */
export function capitalize(text: string): string {
  // Not using /(^|\s)\S/g regex because regular expressions by itself are slower
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
