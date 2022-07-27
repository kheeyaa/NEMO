interface Validations {
  regExp: RegExp;
  warnningMessage: string;
}

// https://hee-kkk.tistory.com/22
export const email: Validations = {
  regExp: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
  warnningMessage: '유효한 이메일 형식이 아닙니다.',
};

export const password: Validations = {
  regExp:
    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/,
  warnningMessage: '문자, 숫자, 특수문자 포함 8~20자를 입력해주세요.',
};
