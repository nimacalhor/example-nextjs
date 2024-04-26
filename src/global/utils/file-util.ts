export async function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        resolve(event.target.result as string);
      } else {
        reject(new Error("Error reading file"));
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}
