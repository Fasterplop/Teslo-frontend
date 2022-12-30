import useTimeOutMessage from "@/utils/hooks/useTimeOutMessage";
import * as React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InputFormik } from "@/components/@forms";
import { LoginUserDto } from "@/services/auth-service/interfaces";
import { authService } from "@/services/auth-service";
import { useAuthContext } from "@/context/AuthProvider";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your user name"),
  password: Yup.string().required("Please enter your password"),
});

const INITIAL_VALUES: LoginUserDto = {
  username: "",
  password: "",
};

interface ISignInFormProps {}

const SignInForm: React.FunctionComponent<ISignInFormProps> = (props) => {
  const {} = props;

  const { initAuthenticate } = useAuthContext();

  const [message, setMessage] = useTimeOutMessage();

  const onSubmit = async (values: LoginUserDto) => {
    try {
      const req = await authService.LogIn(values);
      initAuthenticate(req.data);
      console.log(req.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <InputFormik
          name="username"
          label="Username"
          placeholder="Type your username"
          showSuccess={false}
        />
        <InputFormik
          name="password"
          type="password"
          label="Password"
          placeholder="Type your password"
          autoComplete="off"
          showSuccess={false}
        />

        <div className="form-group">
          <button type="submit" className="btn btn-primary w-full">
            Sign In
          </button>
        </div>
        {/* <FormContainer>
            <FormItem
              label="User Name"
              invalid={errors.userName && touched.userName}
              errorMessage={errors.userName}
            >
              <Field
                type="text"
                autoComplete="off"
                name="userName"
                placeholder="User Name"
                component={Input}
              />
            </FormItem>
            <FormItem
              label="Password"
              invalid={errors.password && touched.password}
              errorMessage={errors.password}
            >
              <Field
                autoComplete="off"
                name="password"
                placeholder="Password"
                component={PasswordInput}
              />
            </FormItem>
            <div className="flex justify-between mb-6">
              <ActionLink to={forgotPasswordUrl}>Forgot Password?</ActionLink>
            </div>
            <Button block loading={isSubmitting} variant="solid" type="submit">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
            <div className="mt-4 text-center">
              <span>Don't have an account yet? </span>
              <ActionLink to={signUpUrl}>Sign up</ActionLink>
            </div>
          </FormContainer> */}
      </Form>
    </Formik>
  );
};

export default SignInForm;
