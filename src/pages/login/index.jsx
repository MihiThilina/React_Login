
import { Component } from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";


class LoginPage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return(
            
           <div>

            <div>

            </div>

            <div>
            <div className={classes.mainName}><Typography variant="h4" gutterBottom component="div">  Lovebirds </Typography></div>
            <div className={classes.secondTitel}><Typography variant="h6" gutterBottom component="div"> Welcome to Lovebirds</Typography></div>
        
            </div>

            <div className={classes.container}>
                <TextField  margin="normal" id="standard-basic" label="User name or Email" variant="standard" />
                   <br />
                <TextField margin="normal" id="standard-basic" label="Password" variant="standard" />
                   <br />
            <Button style={{backgroundColor: 'gray',width:'300px',position:'relative',left:'119px',top:'20px',borderRadius:'30px'}} variant="contained" color="success">Sign in</Button>
            </div>
          
             <div className={classes.line}>
             <Divider style={{width:'400px',position:'relative',right:'160px',top:'20px'}}>or</Divider>
             </div>
           </div>
        )
    }
}


export default withStyles(styleSheet) (LoginPage);
