import { makeStyles, Grid, Box } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { getUserConversations } from '../../Context/actions/messenger/conversation';
import { GlobalContext } from '../../Context/Provider';
import { CustomInput } from '../../controls/Input';
import Conversation from './Conversations/Conversation';
import Message from './Messages/Message';
import Text from './Messages/Text';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "82vh", background: "#fff2f1", paddingLeft: 52
    },
    grid2: {
        background: "#EEE5E9", marginBottom: 22,  overflowY: "scroll",
    },
    friends: {
        padding: 10, 
    },
    chat: {
        height: "76vh", padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative",
    },
    txtarea: {
        display: "flex", alignItems: "center", bottom: 4, position: "absolute", justifyContent: "space-between", backgroundColor: "inherit", width: "60%", height: 252,
    },
    Textarea: {
        width: 290, minHeight: "82px", fontFamily: "roboto"
    },
    "@media (max-width: 960px)": {
        root: {
            paddingLeft: 2
        },
        chat: {
            padding: 8,
        },
        container: {
            display: "flex", flexDirection: "column", justifyContent: "space-between",
        },
        grid2: {
            background: "#EEE5E9", height: "auto", marginBottom: 12
        },
    },
    "@media (max-width: 440px)": {
    },
}));
function Index() {
   const classes = useStyles();

const [friend, setFriend] = useState('')
const [tutor, setTutor] = useState('')
const [leaner, setLeaner] = useState('')
    const {
        loginState: {
            login: { isLoggin, logger, isPemmitted },
        },
        getFriendsDispatch,
        getFriendsState: {
            conversation: { isLoading, member, isAFriend, error, isError },
        },
    } = useContext(GlobalContext);
    const userID = logger?.userID
    // console.log(isLoading, member, isAFriend, error, isError);
    useEffect(() => {
        getUserConversations(userID)(getFriendsDispatch)
    }, [getFriendsDispatch]);

    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>

                <Grid item md='4' sm='12' className={classes.grid2}>
                    <Box style={{ margin: 16 }}>

                        <CustomInput
                            name="serch"
                            type="text"
                            placeholder="Search for friends"                           
                            style={{ fontFamily: "roboto" }}
                        />

                    </Box>
                    <hr />                 
                    <Box className={classes.friends}>
                        {isAFriend && (
                            <div>
                                {member?.data?.map((f) => (
                                    <div onClick={()=> setFriend(f)}>
                                        <Conversation key={f.id} friends={f}  setTutor={setTutor} setLeaner={setLeaner} />
                                    </div>
                                ))}
                            </div>
                        )}

                    </Box>
                </Grid>
                <Grid item md='8' sm='12'>
                    <Box className={classes.chat}>
                        <Message friend={friend} tutor={tutor} leaner={leaner} />
                        <Text  friend={friend} tutor={tutor} leaner={leaner} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Index
