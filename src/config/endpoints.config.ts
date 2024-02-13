const endpoints = {
  auth: {
    login: "auth/login",
  },
  user: {
    profile: "profile/personal-info",
  },
  pharmacy: {
    getDetails: (id?: string) => `pharmacy/get/${id}`,
  },
};
export default endpoints;
