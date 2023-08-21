export const imagePreview = (file:File) => {
  if(!file) return;

  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.addEventListener('load', () => resolve(reader.result))
    reader.readAsDataURL(file);
  })
}