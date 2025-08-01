import { USER_URL } from "../constant";
import Axios from "./axios";

export const LoginApi = (data) => Axios.post(`${USER_URL}/signin`, data);

export const SignUpApi = (data) => Axios.post(`${USER_URL}/signup`, data);

export const EmailVarificationApi = (email) =>
  Axios.post(`${USER_URL}/send-verification-mail`, email);

export const VarifyUserEmailApi = (token) =>
  Axios.post(`${USER_URL}/verify-user-mail`, token);

export const ForgotPasswordApi = (email) => Axios.post(`${USER_URL}/forgot-password`, email);

export const VerifyForgotPasswordApi = (data) => Axios.post(`${USER_URL}/verify-forgot-mail`, data);