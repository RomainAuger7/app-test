import React from 'react';
import './App.css';
import {Myform} from './MyForm';
import {Card, CardContent, Container, Typography} from '@material-ui/core';

const App = () => {
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
                    <Myform onSubmit={(values) => {
                        console.log(values)
                    }}/>
                </CardContent>
            </Card>
        </Container>
    );
};

export default App;
