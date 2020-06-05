import React, { useEffect, useState } from 'react'
import { StatusBar, FlatList } from 'react-native'
import socketIo from 'socket.io-client'
import {useRoute} from '@react-navigation/native'

import MessageComponent from '../../components/MessageComponent'

import {
    Container,
    ChatContainer,
    Header,
    MessageInput,
    NameInput,
    Row,
    SendButton,
    Icon
} from './styles'

let socket;

export default function Home() {
    const link = useRoute().params.link;
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState({
        author: '',
        message: ''
    })

    useEffect(()=>{
        socket = socketIo(link)
        socket.on('previousMessages', (data) => {
            setMessages(data)
            console.log('Did Mount executado')
        })
        socket.on('receivedMessage', (data) => {
            setMessages(old => [...old, data])
            console.log('Received Message executado')
        })
    }, [])


    function handleMessage() {
        setMessages(old => [...old, message])
        socket.emit('sendMessage', message)        
        console.log('Send Message executado')
        setMessage({...message, message: ''})
    }
    return (
        <Container>
            <StatusBar backgroundColor="#282b30" />
            <Header>
                Chat On-line
            </Header>
            <NameInput value={message.author} onChangeText={value => setMessage({ ...message, author: value })} placeholder="Digite seu nick" />
            <ChatContainer>
                <FlatList
                    data={messages}
                    renderItem={item => <MessageComponent data={item.item} />}
                    key={Date.now()}
                />
            </ChatContainer>
            <Row>
                <MessageInput value={message.message} onChangeText={value => setMessage({ ...message, message: value })} placeholder="Digite sua mensagem" />
                <SendButton disabled={message.author.length<1} onPress={handleMessage}>
                    <Icon />
                </SendButton>
            </Row>
        </Container>
    )
}