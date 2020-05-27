import React from 'react';
import { Box, Container, TextField, FormControl, Button, InputAdornment } from '@material-ui/core';
import { getWindowSize } from '../helper/index'
import { ExitToApp, MailOutline, VpnKeyOutlined } from '@material-ui/icons/'
import { instance } from '../../plugins/axios'
import { Login } from '../services/index'
import Modal from '../components/Modal'

var size = getWindowSize()
console.log(size)
type state = {
    email: string,
    password: string,
    isShowModal: boolean,
    modalLoading: boolean,
    modalMessage: string
}
export default class LoginPage extends React.Component<any, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowModal: false,
            modalMessage: '',
            modalLoading: true
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    handleChangeEmail(event: any) {
        let value = event.target.value
        this.setState({ email: value });
    }
    handleChangePassword(event: any) {
        let value = event.target.value
        this.setState({ password: value });
    }

    doLogin() {
        this.setState({ isShowModal: true, modalLoading: true })

        Login(this.state.email, this.state.password)
            .then(response => {
                this.setState({ isShowModal: false, modalLoading: false })
                console.log('success')
            })
            .catch(error => {
                this.setState({ modalLoading: false, modalMessage: 'Login gagal pastikan email dan password yang anda masukan benar'})
                console.log('failed')
                console.log(error)
            })
    }
    closeModal() {
        this.setState({ isShowModal: false, modalMessage: '' })
    }

    render() {
        return (
            <Box width="100%" height="100%" style={{ backgroundColor: "#18A4E0", color: "#FAF8F0", fontFamily: 'Roboto', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box width={400} height={300} style={{ backgroundColor: "#FAF8F0", color: "#18A4E0", borderRadius: 5 }}>
                    <Container style={{ padding: 30 }}>
                        <div style={{ marginBottom: 10 }}>Silahkan Masukan Email dan Password</div>
                        <TextField id="outlined-basic" style={{ width: "100%", marginTop: 5, marginBottom: 5 }} label="E-Mail" value={this.state.email} onChange={this.handleChangeEmail} variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutline />
                                </InputAdornment>
                            ),
                        }} />
                        <TextField id="outlined-basic" style={{ width: "100%", marginTop: 5, marginBottom: 5 }} value={this.state.password} onChange={this.handleChangePassword} label="Password" type="password" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyOutlined />
                                </InputAdornment>
                            ),
                        }} />
                        <div style={{ width: "100%", padding: 0, display: "flex", flexDirection: "row-reverse" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ExitToApp />}
                                onClick={this.doLogin}
                            >Login</Button>
                        </div>
                    </Container>
                    <Modal isOpen={this.state.isShowModal} message={this.state.modalMessage} loading={this.state.modalLoading} handleCloseModal={() => this.closeModal()}/>
                </Box>
            </Box>
        )
    }
}