function combine(...classNames: Array<string | boolean | undefined>): string {
  // concat all string items
  return classNames.filter((element) => typeof element === typeof "").join(" ");
}

export { combine };
