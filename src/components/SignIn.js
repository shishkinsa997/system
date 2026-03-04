import { el } from "../utils.js";

export function initSignIn() {
  const page = el("div", {
    className: "h-full w-full flex justify-center items-center",
  });
  const modal = el("div", {
    className: "py-12 px-12 rounded-2xl shadow-xl z-20 border border-gray-200",
  });
  const textWrapper = el("div");
  const textTitle = el("h1", {
    className: "text-3xl font-bold text-center mb-4",
    text: "Create An Account",
  });
  const textDesc = el("p", {
    className:
      "w-80 text-center text-sm mb-8 font-semibold text-[var(--color-primary)] tracking-wide",
    text: "Create an account to enjoy all the services without any ads for free!",
  });
  const inputWrapper = el("div", {
    className: "flex flex-col gap-4 space-y-4",
  });
  const inputEmail = el("input", {
    className:
      "block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500",
    attrs: {
      type: "text",
      placeholder: "Email Addres",
    },
  });
  const inputPassword = el("input", {
    className:
      "block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500",
    attrs: {
      type: "text",
      placeholder: "Password",
    },
  });
  const buttonWrapper = el("div", {
    className: "text-center mt-6",
  });
  const button = el("button", {
    className:
      "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg",
    text: "Sign In",
  });
  const linkWrapper = el("p", {
    className: "mt-4 text-sm",
  });
  const linkSpan = el("span", {
    className: "underline cursor-pointer",
    text: "Sign In",
  });
  page.append(modal);
  modal.append(textWrapper, inputWrapper, buttonWrapper);
  textWrapper.append(textTitle, textDesc);
  inputWrapper.append(inputEmail, inputPassword);
  buttonWrapper.append(button, linkWrapper);
  linkWrapper.append("Already Have An Account? ", linkSpan);

  return page;
}
