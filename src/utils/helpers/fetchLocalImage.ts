const fetchLocalImage = async (path: string, name): Promise<FileList> => {
  return fetch(path)
    .then((r) => r.blob())
    .then((imageBlob) => {
      const image = new File([imageBlob], name);
      const dt = new DataTransfer();
      dt.items.add(image);
      return dt.files;
    });
};

export default fetchLocalImage;
