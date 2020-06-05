import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #282b30;
    padding-bottom: 10px;
`;
export const ChatContainer = styled.View`
    background-color: white;
    width: 90%;
    flex: 1;
    border-radius: 5px;
`;
export const Header = styled.Text`
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 19px;
    font-weight: bold;
`;
export const NameInput = styled.TextInput`
    background-color: white;
    width: 90%;
    margin: 10px 0;
    border-radius:5px;
    padding:10px;
`;
export const MessageInput = styled.TextInput`
    background-color: white;
    flex: 1;
    margin-top: 10px;
    border-radius:5px;
    padding:10px;
`;
export const Row = styled.View`
    flex-direction: row;
    width: 90%;
`;
export const SendButton = styled.TouchableOpacity`
    background-color: #7289da;
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(Ionicons).attrs({
    name:"md-send",
    size: 19,
    color: '#fff'
})``;