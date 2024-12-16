export const validatePassword = (password) => {
    const rules = [
      { regex: /[A-Z]/, message: "At least one uppercase letter" },
      { regex: /[!@#$%^&*(),.?":{}|<>]/, message: "At least one special character" },
      { regex: /.{6,}/, message: "At least 6 characters long" },
    ];
    return rules.filter((rule) => !rule.regex.test(password)).map((rule) => rule.message);
  };
  