import * as React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useTimeOutMessage from "../../utils/hooks/useTimeOutMessage";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Please enter your user name"),
  password: Yup.string().required("Please enter your password"),
});

interface ISignInFormProps {}

const SignInForm: React.FunctionComponent<ISignInFormProps> = (props) => {
  const {} = props;

  const [message, setMessage] = useTimeOutMessage();

  return null;
};

export default SignInForm;
