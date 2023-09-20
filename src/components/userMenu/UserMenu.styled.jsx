import styled from 'styled-components';

export const WrapperUserMenu = styled.div`
  background-color: #edf3fb;

  display: flex;
  align-items: center;
  gap: 44px;
`;

export const Text = styled.p`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: fit-content;
  border-radius: 5px;
  border: none;
  // border: 1 px solid #879cb7;
  box-shadow: 0px 0px 10px rgba(46, 47, 66, 0.4),
  0px 1px 4px rgba(46, 47, 66, 0.16), 2px 2px 3px rgba(46, 47, 66, 0.08);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #edf3fb;
  outline: none;
  &:hover {
    background-color: #879cb7;
    color: #edf3fb;
  }
`;
