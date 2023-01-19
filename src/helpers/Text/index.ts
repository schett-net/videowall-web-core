export const capitalize = (s: string) =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

function toCamelCase(str: string) {
  return (
    str.toString() &&
    str
      .split(" ")
      .map((word, index) => {
        return (
          (index === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) +
          word.slice(1).toLowerCase()
        );
      })
      .join("")
  );
}

export function translateText(text: string): object {
  const lines = text.split("\n");
  const obj: any = {};

  let currentListKey: string | undefined;
  let currentList: string[] | undefined;

  for (const line of lines) {
    if (!line) {
      continue;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) {
      if (currentListKey && currentList) {
        // Add item to the current list
        currentList.push(
          line.trim().replace("• ", "").replace("* ", "").replace("- ", "")
        );
      }
      continue;
    }

    if (currentListKey && currentList) {
      // Save the current list to the object and reset the list variables
      obj[currentListKey] = currentList;
      currentListKey = undefined;
      currentList = undefined;
    }

    const key = toCamelCase(line.substring(0, colonIndex).trim().toLowerCase());
    // Check next line for list
    const nextLine = lines[lines.indexOf(line) + 1];
    const value = line.substring(colonIndex + 1).trim();

    // Check if the value is a list
    if (
      nextLine &&
      (nextLine?.startsWith("•") ||
        nextLine?.startsWith("*") ||
        nextLine?.startsWith("-"))
    ) {
      currentListKey = key;
      currentList = [];
    } else {
      obj[key] = value;
    }
  }

  if (currentListKey && currentList) {
    // Save the final list to the object
    obj[currentListKey] = currentList;
  }

  return obj;
}
