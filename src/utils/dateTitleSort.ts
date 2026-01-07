type Element = {
  title: string;
}

// if you ever need to sort by if the current date is longer than the title length, use this function.
export const dateTitleSort = (a: Element, b: Element) => {
  const today = new Date().getDate();
  const aScore = today > a.title.length ? 1 : (today < a.title.length ? -1 : 0);
  const bScore = today > b.title.length ? 1 : (today < b.title.length ? -1 : 0);
  return aScore - bScore;
}