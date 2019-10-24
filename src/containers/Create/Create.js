import React, { useContext } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Chimera from '../../components/Chimera/Chimera';
import Categories from '../../components/Categories/Categories';
import Selection from '../../components/Selection/Selection';
import AppContext from '../../contexts/AppContext';
import Modal from '../../components/Modal/Modal';

function Create() {
    const classes = useStyles();
    const context = useContext(AppContext);

    const handleOpen = () => {
        context.setShowModal(true);
    };

    return (
        <div className={classes.container}>
            <Chimera head={context.selectedHead} ear={context.selectedEar} body={context.selectedBody} tail={context.selectedTail} />
            <Categories />
            <Selection />
            <Button onClick={handleOpen} variant="contained" className={classes.button}> done </Button>
            <Modal />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 655,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '10%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: 'linear-gradient(45deg, #4d888f 40%, #59ef66 90%)',
        '&:hover': {
            background: '#355f64',
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default Create;