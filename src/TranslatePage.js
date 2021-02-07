import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './TranslatePage.css';
import axios from 'axios';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      paddingTop: "50px"
    },
    column: {
      height: '50vw'
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

  const height1 = 150;
  const height2 = 300;

  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
const TranslatePage = () => {
  const post = useSelector(state => state.currentNews.post)
  const [title, setTitle] = useState(0);
  const [content, setContent] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [postreq, setPostreq] = React.useState("");

  useEffect(() => {
    axios.get('/api/article', {
        params: {
            key: post.url,
            language: "sp"
        }
    }).then(response => {
        console.log(response);
        setTitle(response.data.express.title);
        setContent(response.data.express.content);
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
  }, [])

  const postTranslation = () => {
    axios.post('/api/submit-translation', {
        params: {
            post: "aquí está la traducción",
            title: "aquí está el título",
            key: post.url,
            language: "es"
        }
    }).then(res => {
    setPostreq(res.data);
       setOpen(true);
    });
 };

 

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
    
  return (
   <>
        <br/>
            <Grid className={classes.root} spacing={2}>
                <Grid item xs={4} spacing={2} className={classes.column}>
                    <Box m={2}>
                        <h2 className="left">Original English Title</h2>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            defaultValue={post.title}
                            variant="outlined"
                            className="mainText"
                            inputProps={{
                                style: {
                                height1,                            },
                            }}
                            InputLabelProps={{shrink: false}}
                        />
                    </Box>
                    <Box m={2}>
                        <h2 className="left">Original English Content</h2>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            defaultValue={post.content}
                            variant="outlined"
                            className="mainText"
                            style={{height2}}
                            inputProps={{
                                style: {
                                height2,                            },
                            }}
                            InputLabelProps={{  style: {
                                height2,                            },}}
                        />
                    </Box>
                </Grid>

                <Grid item xs={4} spacing={2}  className={classes.column}>
                    <Box m={2}>
                        <h2 className="left">Google Translate Title</h2>
                    <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            defaultValue={title}
                            variant="outlined"
                            className="mainText"
                          
                            inputProps={{
                                style: {
                                height1,                            },
                            }}
                            InputLabelProps={{shrink: false}}
                        />
                  </Box>
                  <Box m={2}>
                    <h2 className="left">Google Translate Content</h2>
                    <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            defaultValue={content}
                            variant="outlined"
                            className="mainText"
                            style={{height2}}
                            inputProps={{
                                style: {
                                height2,                            },
                            }}
                            InputLabelProps={{  style: {
                                height2,                            },}}
                        />
                  </Box>
                </Grid>

                <Grid item xs={4} spacing={2}  className={classes.column}>
                <Box m={2}>
                   <h2 className="left">Custom Edited Title</h2>
                   <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={4}
                        defaultValue="Your Translation..."
                        variant="outlined"
                        className="mainText"
                        
                        inputProps={{
                            style: {
                            height1,                            },
                        }}
                        InputLabelProps={{shrink: false}}
                    />
                  </Box>
                  <Box m={2}>
                    <h2 className="left">Custom Edited Content</h2>
                   <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={4}
                        defaultValue="Your Translation..."
                        variant="outlined"
                        className="mainText"
                        style={{height2}}
                        inputProps={{
                            style: {
                            height2,                            },
                        }}
                        InputLabelProps={{  style: {
                            height2,                            },}}
                    />
                  </Box>
                </Grid>
            </Grid>
            <Button variant="contained" onClick={postTranslation}>
                Submit Translation
            </Button>
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
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">{postreq}</h2>
                </div>
                </Fade>
            </Modal>
    </>
  )
}

export default TranslatePage