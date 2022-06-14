type Rule = {
  singular: string
  plural?: string
}

export const pluralize = (value: number, { singular, plural }: Rule) => {
  if (Boolean(singular) === true && Boolean(plural) === false) {
    plural = `${singular}s`
  }

  if (value > -2 && value < 2) {
    return singular
  }

  return plural
}
