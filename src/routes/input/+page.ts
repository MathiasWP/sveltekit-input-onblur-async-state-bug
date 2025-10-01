const state = {
  message: "Hello from the input page",
};

export const load = async () => {
  // Fetching data from an API (really goddamn fast)
  await new Promise((resolve) => setTimeout(resolve, 0));

  return {
    state,
  };
};
