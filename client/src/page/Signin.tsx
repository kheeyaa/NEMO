import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ReactComponent as LogoSvg } from 'assets/svg/logo/logo2.svg';
import { pxToRem } from 'utils/style/pxToRem';
import Input from 'components/Form/Input';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import { colors } from 'const/style/colors';

function Signin() {
  const [isShowWarn, setIsShowWarn] = useState(false);

  return (
    <form css={formStyle}>
      <LogoSvg
        className="logo"
        css={css`
          width: ${pxToRem(100)};
        `}
      />
      <Input
        className="email"
        width="100%"
        placeholder="이메일"
        inputName="이메일"
        inputId="email"
        type="email"
      />
      <Input
        className="password"
        width="100%"
        placeholder="비밀번호"
        inputName="비밀번호"
        inputId="password"
        type="password"
      />

      <div className="warnning">
        {isShowWarn && (
          <>
            이메일 또는 비밀번호를 잘못 입력했습니다. <br />
            입력하신 내용을 다시 확인해주세요.
          </>
        )}
      </div>
      <Button className="login" width="100%" buttonType="Fill" type="submit">
        로그인
      </Button>
      <Button className="google" width="100%" type="submit">
        구글로 로그인하기
      </Button>
      <Link className="signupLink" to="/signup">
        아직 회원이 아니신가요?
      </Link>
    </form>
  );
}

const formStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    position: relative;
    bottom: ${pxToRem(50)};
  }

  .email,
  .password,
  .login,
  .google {
    margin: ${pxToRem(15)} 0;
  }

  .warnning {
    width: 100%;
    min-height: ${pxToRem(35)};
    margin-top: ${pxToRem(15)};

    color: ${colors.red[100]};
    font-size: ${pxToRem(14)};
  }

  .signupLink {
    color: ${colors.yellow[100]};
    text-decoration-line: none;
    display: inline-block;
    padding: ${pxToRem(10)} 0;
    border-bottom: 1px solid ${colors.yellow[100]};
  }
`;

export default Signin;
