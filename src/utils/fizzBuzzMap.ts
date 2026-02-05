import { PullRequest } from "@/lib/github";

// fizzBuzzMap is useful for situations where you want to map a PR's title to a FizzBuzz value.
// skipping index 0 to let the leading PR be the original title
export const fizzBuzzMap = (pr: PullRequest, index: number): PullRequest => {
  const num = index + 1;
  let suffix = "";
  if (num % 3 === 0) suffix += "🫧"; // fizz (bubbles) emoji
  if (num % 5 === 0) suffix += (suffix ? " " : "") + "🐝"; // buzz emoji

  const title = suffix ? `${pr.title} ${suffix}` : pr.title;
  return { ...pr, title };
}