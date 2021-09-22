const user = { name: "Giang" };

export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};
