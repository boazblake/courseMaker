export function authorsFormattedForDropDown(authors) {
  console.log(authors);
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}