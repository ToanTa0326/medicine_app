import VIDEO_CALL_CONFIG from "../videoCall.config";
export const userRegisterCalls = async (data) => {
  return await fetch(`${VIDEO_CALL_CONFIG.serverUrl}/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const userLoginCalls = async (data) => {
  return await fetch(`${VIDEO_CALL_CONFIG.serverUrl}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
      return null;
    });
};
