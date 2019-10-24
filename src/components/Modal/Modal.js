import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Name from '../Name/Name';
import AppContext from '../../contexts/AppContext';
import { fade } from '@material-ui/core/styles';

const Modal = (props) => {
    const classes = useStyles();
    const context = useContext(AppContext);

    return (
        <>
            {context.showModal &&
                <div className={classes.modal}>
                    <div className={classes.body}>
                        <Name></Name>
                    </div>
                </div>
            }
        </>
    );
};

const useStyles = makeStyles(theme => ({
    modal: {
        width: '100%',
        height: '110%',
        margin: 0,
        padding: 0,
        position: 'absolute',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: fade(theme.palette.common.black, 0.4),
    },
    body: {
        padding: '1% 3%',
        borderRadius: 15,
        backgroundColor: 'white'
    }
}));

export default Modal;