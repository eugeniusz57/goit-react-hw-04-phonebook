import styled from '@emotion/styled';

export const FormAddContact = styled.form`
display: flex;
flex-direction: column;
// border: 1px solid black;
padding: 10px;
width: 300px;
border-radius: 4px;
align-items: center;
background-color: #80808033;
box-shadow: 8px -7px 33px -6px rgba(66, 68, 90, 1);
`

export const Label = styled.label`
display: inline-flex;
font-size: 24px;
margin-bottom: 5px;
`

export const Input = styled.input`
width: 200px;
padding: 5px 10px;
height: 20px;
border: none;
border-radius: 4px;
outline: 1px solid;
:focus{
    outline: 2px solid #2be7bf;
}
`

export const ButtonSubmit = styled.button`
margin-top: 10px;
background-color: #2196f3;
color: white;
width: 100px;
height: 30px;
border:none;
border-radius: 4px;
cursor: pointer;
:hover,:focus{
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
}
`