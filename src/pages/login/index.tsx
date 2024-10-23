import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers/Auth";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
