import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Myform } from './MyForm';
import { Card, CardContent, Container, Typography } from '@material-ui/core';

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

                 </CardContent> 
          <Myform onSubmit={() => {}}/>

        </Card>
        </Container>
  );
};

export default App;
