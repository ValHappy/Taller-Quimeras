import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Chimera from '../../components/Chimera/Chimera';
import Categories from '../../components/Categories/Categories';
import Selection from '../../components/Selection/Selection';


function Create() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <div className={classes.container}>
            <Chimera />
            <Categories />
            <Selection />
            <Button onClick={handleOpen} variant="contained" className={classes.button}> done </Button>
{/* 
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
            </Modal> */}
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
        width: '8%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: '#4d888f',
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