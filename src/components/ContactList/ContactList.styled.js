import styled from '@emotion/styled';

export const List = styled.ol`
font-size: 16px;
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
border-radius: 4px;
align-items: flex-start;
justify-content: space-between;
background-color: #80808033;
box-shadow: 8px -7px 33px -6px rgba(66, 68, 90, 1);
`

export const ListItem = styled.li`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
margin: 8px 0;
`


export const ButtonDelete = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: auto;
background-color: #2196f3;
color: white;
min-width: 30px;
height: 25px;
border:none;
border-radius: 4px;
cursor: pointer;
:hover,:focus{
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
}
`