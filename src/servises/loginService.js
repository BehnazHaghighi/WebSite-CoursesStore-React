import interLogin from "./apiLogin";

export const loginPost = async (body) => {
  try {
    const url = "auth/user/login";
    const response = await interLogin.post(url, body);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const registerPost = async (body) => {
  try {
    const url = "auth/user/register";
    const response = await interLogin.post(url, body);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const forgetPost = async (body) => {
  try {
    const url = "auth/user/forgot";
    const response = await interLogin.post(url, body);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
