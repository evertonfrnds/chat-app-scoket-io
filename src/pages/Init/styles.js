import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items:center;
    background-color: #282b30;

`;
export const InputLink = styled.TextInput`
    background-color: #fff;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
`;
export const Button = styled.TouchableOpacity`
    width:80%;
    background-color: #7289da;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;
export const Label = styled.Text`
    font-weight:bold;
    color: #FFF;
    font-size: 16px;
`;