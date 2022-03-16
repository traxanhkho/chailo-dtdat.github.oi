export const getFormControlsAdmin = [
  {
    name: "userName",
    type: "text",
    placeholder: "Tên tài khoản",
    rule: "required",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Mật khẩu",
    rule: "required",
  },
];

export const messageError = {
  userName: ["Vui lòng nhập tên đầy đủ!"],
  password : ["Vui lòng nhập mật khẩu!"],
};
