import React, { Component } from 'react'
import { ChatContext } from '../../ChatContext';
import Index from './Index';


class Entry extends Component {
    render() {
        return (
            <ChatContext>
               <Index /> 
            </ChatContext>
        );
    }
}

export default Entry;