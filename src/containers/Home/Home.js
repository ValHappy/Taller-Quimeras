import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

function Home(props) {
    const classes = useStyles();

    function handleClick() {
        props.history.push('/create');
    }

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.title}>Magical Chimeras Maker</h1>
                <p className={classes.desc}>You can create a great creature now, you will choose its head, the type of ears or tail that it will have, you will have a sweet and adorable pet for life.</p>
                <Button onClick={handleClick} variant="contained" className={classes.button}> Start now</Button>
            </div>
            <div>
                <img src="../../../assets/img/rec.png" alt="aqui esta"/>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '40%',
        height: 400,
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        margin: 0,
        marginTop: 100,
        padding: 15,
        color: theme.palette.primary.main,
        fontSize: 40,
        fontWeight: 'bolder'
    },
    desc: {
        margin: 0,
        marginTop: 1,
        padding: 15,
        color: theme.palette.primary.contrastText,
        fontSize: 20,
        textAlign: 'justify'
    },
    button: {
        width: '20%',
        margin: 8,
        padding: 7,
        color: 'white',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)'
    },
}));

export default Home;