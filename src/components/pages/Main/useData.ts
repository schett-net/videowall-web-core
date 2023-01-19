export const getIdFromURL = () => {
  const url = window.location.href;
  const id = url.split("/").pop();

  return id;
};

export const getData = async () => {
  const id = getIdFromURL();

  return id;
};
