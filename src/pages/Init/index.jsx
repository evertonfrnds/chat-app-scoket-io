import React,{useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {
    Container,
    InputLink,
    Button,
    Label
} from './styles'

const Init = () =>{
    const [input, setInput] = useState('')
    const navigation = useNavigation()

    function handleButton(){        
        navigation.navigate('Home', {link: input})
    }

    return(
        <Container>
            <InputLink autoCapitalize="none" value={input} onChangeText={v=>setInput(v)} placeholder="Digite o link de acesso"/>
            <Button onPress={handleButton}>
                <Label>
                    Entrar no chat
                </Label>
            </Button>
        </Container>
    )
}

export default Init;