import React from "react"
import {Button} from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";


const LoginPage = () => {
    return (
        <Container fixed>
            <Card >
            
                <form >
                    <TextField id="identifiant" label="identifiant" />
                    
                </form>
            
            </Card>
        </Container>
    )

}

export default LoginPage