import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border: none;
  background: none;
  margin-top: 5px;
`;

export const Counter = styled.h4<{ active: boolean }>`
  font-size: 1.3em;
  color: ${(props) => (props.active ? '#e2254d' : '#939393')};
  transition: 1.2s;
`;
