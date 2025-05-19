import client from "../client";

export const tryCatch = async (func) => {
  try {
    return await func();
  } catch (e) {
    console.log(e, "error from tryCatch");
  }
};

const getHeaders = (contentType = "application/json") => ({
  Accept: "application/json",
  "Content-Type": contentType,
});

const buildConfig = (contentType, config = {}) => {
  const { signal, ...restConfig } = config;
  return {
    headers: getHeaders(contentType),
    signal,
    ...restConfig,
  };
};

export const apiPost = async (url, data, contentType, config = {}) => {
  console.log(data, "data from api post");

  const response = await client.post(
    url,
    data,
    buildConfig(contentType, config)
  );
  return response.data;
};
