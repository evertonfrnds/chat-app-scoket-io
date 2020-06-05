import React from 'react'

import {
    Container,
    Author,
    Message
} from './styles'


const MessageComponent = ({data}) => {
    return(
        <Container>
            <Message>
                <Author>{data.author}: </Author>{data.message}
            </Message>
        </Container>
    )
}

export default MessageComponent;