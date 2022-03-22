import logo from './logo.svg';
import React from "react";
import './App.css';
import styled from "styled-components";
import {auth, match} from "./utils/auth";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #CCFF99;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  height: 50%;
  background: white;
  padding: 20px;
  border-radius: 40px;

  color: #66CCCC;

  input {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  Button {
    margin-bottom: 2vh;
  }
`

const Title = styled.div`
  font-size: 27px;
  height: 3vh;
  margin-bottom: auto;
  margin-top: 20px;
`

const CustomInput = styled.input`
  height: 25px;
  width: 96%;
`

const Button = styled.button`
  width: 100%;
  font-size: 15px;
  background: #99CCFF;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 10px 0;
`


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false
        }
        this.sendVerification = this.sendVerification.bind(this)
    }

    sendVerification() {
        const phone = document.getElementById('phone-input').value
        auth(phone)
        const sendButton = document.getElementById('send-btn')
        sendButton.disabled = true
        this.setState({
            sending: true
        })
        setTimeout(() => {
            sendButton.disabled = false
            this.setState({
                sending: false
            })
        }, 10000)
    }

    checkInput() {
        const phone = document.getElementById('phone-input').value
        const verify = document.getElementById('verify-input').value
        const message = match(phone, verify) ? "Login Success" : "Login Fail"
        alert(message)
    }

    render() {
        return (
            <RootContainer>
                <InputContainer>
                    <Title>Ruizhao Yu's Demo</Title>
                    <div>Your Phone Number</div>
                    <CustomInput type='text' id='phone-input'/>
                    <Button onClick={this.sendVerification}
                            id='send-btn'>{this.state.sending ? "Sending..." : "Sending Verification"}</Button>
                    <div>Your Verification Code</div>
                    <CustomInput type='text' id='verify-input'/>
                    <Button onClick={this.checkInput}>Login</Button>
                </InputContainer>
            </RootContainer>
        );
    }
}

export default App;
