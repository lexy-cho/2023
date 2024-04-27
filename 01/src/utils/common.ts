export const getByte = (str: string) => {
  return str
    .split("")
    .map((s) => s.charCodeAt(0))
    .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
}

export const fileToBase64 = (file: any): Promise<{ fileName: string, fileExt: string, fileBase64: string | null }> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('File is not provided'));
    }

    const fileName = file.name;
    const fileExt = fileName.split('.').pop();
    let fileBase64: string | null = null;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e: any) => {
      const start = e.target.result.indexOf(',') + 1;
      const end = e.target.result.length;
      fileBase64 = e.target.result.substring(start, end);
      resolve({ fileName, fileExt, fileBase64 });
    };
  });
};