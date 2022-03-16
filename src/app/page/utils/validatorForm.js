import _ from "lodash";
import { getParent } from "./getParent";

// Hàm xử lý Validator Form
export function Validator(formSelector, message) {
  const _this = this;

  const formElement = document.querySelector(formSelector);

  const validateRules = {
    required: function (value, message) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
    email: function (value, message) {
      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return isValidEmail.test(value)
        ? undefined
        : message || "Vui lòng nhập Email hợp lệ";
    },
    min: function (min) {
      return function (value, message) {
        return value.length >= min
          ? undefined
          : message || `Nhập tối thiểu ${min} ký tự`;
      };
    },
    confirmed: function (value, message) {
      const currentPass = document.querySelector(
        `${formSelector} #password`
      ).value;
      return value === currentPass
        ? undefined
        : message || "Mật khẩu nhập lại không chính xác";
    },
  };

  const formRules = {};

  if (formElement) {
    const inputs = formElement.querySelectorAll("[name][rule]");
    for (let input of inputs) {
      const rules = _(input.getAttribute("rule")).split("|");
      for (let rule of rules) {
        var rulesInfo;
        var isRulesHasValue = rule.includes(":");
        var funcRules = validateRules[rule];

        if (isRulesHasValue) {
          rulesInfo = rule.split(":");
          rule = rulesInfo[0];
          funcRules = validateRules[rule](rulesInfo[1]);
        }

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(funcRules);
        } else {
          formRules[input.name] = [funcRules];
        }
      }
    }
  }

  // Xử lý Validate khi thao tác với EventListener
  _this.HandleValidate = (e) => {
    const input = e.target;
    const rules = formRules[input.name];
    const formGroup = ".form__group";
    const errorElement = getParent(input, formGroup).querySelector(
      ".form__message"
    );
    let errorMessage;
    let index = 0;
    for (let rule of rules) {
      switch (input.type) {
        case "radio":
        case "checkbox":
          errorMessage = rule(
            getParent(input, "#form-login").querySelector(
              `input[type="${input.type}"]:checked`
            ),
            message[input.name]
          );
          break;
        default:
          errorMessage = rule(input.value, message[input.name][index]);
      }
      index++;
      if (errorMessage) break;
    }

    // Kiểm tra và hiện errorMessage
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(input, formGroup).classList.add("invalid");
    } else {
      errorElement.innerText = "";
      getParent(input, formGroup).classList.remove("invalid");
    }

    return !errorMessage;
  };

  // Xử lý xóa lỗi Message khi thao tác với EventListener
  _this.HandleClearError = (e) => {
    const input = e.target;
    const formGroup = ".form__group";
    const errorElement = getParent(input, formGroup).querySelector(
      ".form__message"
    );
    if (getParent(input, formGroup).matches(".invalid")) {
      getParent(input, formGroup).classList.remove("invalid");
    }
    errorElement.innerText = "";
  };

  // Xử lý logic khi submit Form
  _this.HandleOnSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const inputs = formElement.querySelectorAll("[name][rule]");

    for (let input of inputs) {
      const isValid = _this.HandleValidate({ target: input });
      if (!isValid) {
        formIsValid = false;
      }
    }

    if (formIsValid) {
      if (typeof _this.getFormValues === "function") {
        const formValue = Array.from(inputs).reduce((values, input) => {
          switch (input.type) {
            case "radio":
              values[input.name] = formElement.querySelector(
                'input[name="' + input.name + '"]:checked'
              ).value;
              break;
            case "checkbox":
              if (!input.matches(":checked")) {
                return values;
              }
              if (!Array.isArray(values[input.name])) {
                values[input.name] = [];
              }
              values[input.name].push(input.value);
              break;
            case "file":
              values[input.name] = input.files;
              break;
            default:
              values[input.name] = input.value;
          }
          return values;
        }, {});
        _this.getFormValues(formValue);
      }
    }
  };
}
