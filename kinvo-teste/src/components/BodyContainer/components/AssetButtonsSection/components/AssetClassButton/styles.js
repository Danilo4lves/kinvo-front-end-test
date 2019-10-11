import styled from 'styled-components';

export const Container = styled.div`
  display: table-cell;
  background-color: ${(props) => (props.active ? '#F8FAFB' : '#EEF2F4')};
  font-family: "helvetica-neue, arial";
  vertical-align: middle;
  h1 {
    font-size: 16px;
    text-align: left;
    margin-left: 10%;
    background-color: transparent;
  }
  color: #707b81;
  width: 250px;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    background-color: ${(props) => (props.active ? '#F8FAFB' : '#F8FAFB')};
    cursor: pointer;
  }
`;