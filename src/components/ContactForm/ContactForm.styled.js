import styled from 'styled-components';

import Button from '@mui/material/Button';

export const FormSubmit = styled.form`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 170px;
  padding: 20px;
  border: 2px solid rgb(137, 160, 72);
  box-shadow: 0px 2px 8px 0px rgba(227, 102, 212, 0.2);
  background-color: pink;
  border-radius: 10px;
`;

const LabelForm = styled.label`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px 0 20px;
  border: 1px solid rgb(155, 191, 49);
  border-radius: 5px;
  padding: 10px;
  :focus {
    border: 2px solid rgb(212, 52, 212);
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px rgba(227, 102, 212, 0.2);
  }
`;
export const LabelName = styled(LabelForm)``;
export const LabelNumber = styled(LabelForm)``;

export const Input = styled.input``;
export const ButtonSubmit = styled(Button)`
  :hover {
    background-color: #89a048;
    color: white;
  }
  color: black;
  padding: 10px;
`;
