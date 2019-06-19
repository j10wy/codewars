function deleteNth(arr, n) {
  const counts = {};
  var final = [];

  arr.forEach(x => {
    const count = final.filter(y => y === x);
    if (count.length < n) {
      final.push(x);
    }
  });
  return final;
}
``;
