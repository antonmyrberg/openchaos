import { PullRequest } from "@/lib/github";

// fizzBuzzMap is useful for situations where you want to map a PR's title to a FizzBuzz value.
// skipping index 0 to let the leading PR be the original title
export const fizzBuzzMap = (pr: PullRequest, index: number): PullRequest => {
  let title = pr.title;
  const num = index + 1;
    if (num % 3 === 0 && num % 5 === 0) {
      title = "FizzBuzz";
    } else if (num % 3 === 0) {
      title = "Fizz";
    } else if (num % 5 === 0) {
      title = "Buzz";
    }
  return { ...pr, title };
}