import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getFormControlsAdmin as formControls,
  messageError as message,
} from "./listFormControl/FormsControlAdmin";
import { Validator } from "../utils/validatorForm";
import "./login.scss";

// import { KEY_TOKEN } from "app/const/App";
// import { loginAction } from "core/redux/actions/userActions";

function LoginPage() {
  // const { logging } = useSelector((state) => state.user);
  // const token = localStorage.getItem(KEY_TOKEN);
  // const dispatch = useDispatch();

  // const handleFakeLogin = () => {
  //   dispatch(loginAction());
  // };

  const [validator, setValidator] = useState(null);

  useEffect(() => {
    const getValidator = new Validator("#form-login", message);
    setValidator(getValidator);
  }, []);

  return (
    <div className="form-wrapper">
      <form action="" className="form" id="form-login">
        {/* {token ? (
        <Redirect to="/" />
      ) : ( */}
        <h1 className="form__heading">Đăng nhập</h1>
        <p className="form__desc">Đăng nhập với tư cách quản trị viên</p>

        {formControls.map((input, index) => (
          <div key={index} className="form__group">
            <input
              id={input.name}
              type={input.type}
              name={input.name}
              className="form__control"
              placeholder={input.placeholder}
              rule={input.rule}
              onBlur={(e) => validator.HandleValidate(e)}
              onInput={(e) => validator.HandleClearError(e)}
            />
            <small className="line-focus"></small>
            <span className="form__message"></span>
          </div>
        ))}

        <button
          className="btn form__submit"
          onClick={(e) => {
            validator.HandleOnSubmit(e);
            validator.getFormValues = (formValues) => {
              console.log(formValues)
            }
          }}
        >
          Login
        </button>

        {/* {logging && (
            <div className="d-flex justify-content-center mt-3">
              <span className="spinner-border text-primary"></span>
            </div>
          )} */}
        {/* )} */}
      </form>
    </div>
  );
}

export default LoginPage;
