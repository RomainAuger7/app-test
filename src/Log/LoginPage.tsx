import React from "react"
import {Button, makeStyles} from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";


  
const LoginPage = () => {
    return (
        <Container fixed>
            <Card>
                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Connexion
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Connectez-vous avec l'utilisateur admin et le mot de passe admin.
                    </Typography>

                 </CardContent> 
            
                <form >
                    <div><TextField id="identifiant" label="identifiant" /></div>
                    <div><TextField id="mot de passe" label="mot de passe"/></div>
                    <Button variant="outlined" color="secondary">
                    Valider
                    </Button>
                    
                </form>
            </Card>
        </Container>
    )

}

export default LoginPage