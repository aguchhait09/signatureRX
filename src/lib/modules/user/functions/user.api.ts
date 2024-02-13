import endpoints from "config/endpoints.config";
import request from "request";
import { UserData } from "../types/user";

export type CurrentUserProfileResponse = BaseApiResponseType<UserData>;
export const getCurrentUserProfile = () => {
  return request.get<CurrentUserProfileResponse>(endpoints.user.profile);
};

export type LogInMutationParams = {
  email: string;
  password: string;
};
export type LogInMutationResponse = BaseApiResponseType<
  UserData & {
    access: string;
    refresh: string;
    success: boolean;
  }
>;
export const loginMutation = (params: LogInMutationParams) => {
  return request.post<LogInMutationResponse>(endpoints.auth.login, params);
};
