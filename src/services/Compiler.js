import axios from "axios";
import qs from "qs";

function getDataPost(code) {
  const data = qs.stringify({
    code: code,
    language: "java",
    input: 7,
  });

  return {
    method: "POST",
    url: "https://api.codex.jaagrav.in",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
}

async function getOutput(code) {
  const config = getDataPost(code);

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { getOutput };
