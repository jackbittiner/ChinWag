interface LastUpdatedObject {
  last_updated: string;
}

export function sortByLastUpdated<Type extends LastUpdatedObject[]>(
  objectToSort: Type
): Type {
  return objectToSort.sort(compare);
}

function compare(a: LastUpdatedObject, b: LastUpdatedObject) {
  if (a.last_updated < b.last_updated) {
    return 1;
  }
  if (a.last_updated > b.last_updated) {
    return -1;
  }
  return 0;
}
