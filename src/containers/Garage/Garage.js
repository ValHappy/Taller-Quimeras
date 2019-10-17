import React from 'react';
import { makeStyles } from '@material-ui/core';

function Garage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your chimeras</h1>

            <div className={classes.content}>
                {/* uno */}
                <section className={classes.element}>
                    <div className={classes.img}>
                        <img className={classes.quimera} src="https://images.vexels.com/media/users/3/159515/isolated/preview/0e10d84e6c002f8a468d0dd6c9c6081b-ilustraci--n-de-oreja-de-conejo-conejo-bozal-by-vexels.png" alt="Your chimera" />
                    </div>
                    <p className={classes.info}>Asigned name :3</p>
                </section>

                {/* dos */}
                <section className={classes.element}>
                    <div className={classes.img}>
                        <img className={classes.quimera} src="https://images.vexels.com/media/users/3/159515/isolated/preview/0e10d84e6c002f8a468d0dd6c9c6081b-ilustraci--n-de-oreja-de-conejo-conejo-bozal-by-vexels.png" alt="Your chimera" />
                    </div>
                    <p className={classes.info}>Asigned name :3</p>
                </section>

                {/* tres */}
                <section className={classes.element}>
                    <div className={classes.img}>
                        <img className={classes.quimera} src="https://images.vexels.com/media/users/3/159515/isolated/preview/0e10d84e6c002f8a468d0dd6c9c6081b-ilustraci--n-de-oreja-de-conejo-conejo-bozal-by-vexels.png" alt="Your chimera" />
                    </div>
                    <p className={classes.info}>Asigned name :3</p>
                </section>

                {/* cuatro */}
                <section className={classes.element}>
                    <div className={classes.img}>
                        <img className={classes.quimera} src="https://images.vexels.com/media/users/3/159515/isolated/preview/0e10d84e6c002f8a468d0dd6c9c6081b-ilustraci--n-de-oreja-de-conejo-conejo-bozal-by-vexels.png" alt="Your chimera" />
                    </div>
                    <p className={classes.info}>assigned name :3</p>
                </section>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        // height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 50,
    },
    img: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)',
        transition: 'all .3s ease-in-out',
        borderRadius: 20,

        "&:hover": {
            cursor: 'pointer',
        }
    },
    quimera: {
        width: 200,
        height: 200,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    info: {
        fontWeight: 'bolder',
        color: '#4d888f',
    }
}));

export default Garage;