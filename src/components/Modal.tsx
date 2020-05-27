import React from 'react';
import { Dialog, Backdrop, CircularProgress, Button } from '@material-ui/core/';
import { height } from '@material-ui/system';
import styles from '../../assets/styles/index'

export default class Modal extends React.Component<any, any> {
    render() {
        return (
            <Backdrop open={this.props.isOpen} style={{
                zIndex: 999,
                color: '#fff',
            }}>
                {(() => {
                    if (!this.props.loading) {
                        return (
                            <div style={{ ...styles.p_md, backgroundColor: '#fff', color: '#3f3f3f', width: 250, height: 180, borderRadius: 5 }}>
                                <div style={{ height: "70%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    {this.props.message}
                                </div>
                                <div style={{ height: "30%", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                                    <Button
                                        variant="contained"
                                        style={{height:40}}
                                        color="primary"
                                        onClick={this.props.handleCloseModal}
                                    >OK</Button>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <CircularProgress color="inherit" />
                        )
                    }
                })()}

            </Backdrop>
        )
    }
}