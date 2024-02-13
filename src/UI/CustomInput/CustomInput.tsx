import styled from "@emotion/styled";
import { Input } from "antd";

const CustomInput = styled(Input)`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colorBorderSecondary};
  font-size: 16px;
  color: ${({ theme }) => theme.colorTextBase};
  font-weight: 400;
  border-radius: 48px;
  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colorTextBase};
    font-weight: 400;
    opacity: 1;
  }
  &.has-helper-text {
    margin-bottom: 0px !important;
  }
`;

export default CustomInput;
