import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;

    span {
      font-weight: normal;
      color: #999;
      font-size: 12px;
    }
  }

  input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }
`;
