import { CardContent, Container, Card, Typography, TextField, Button } from '@material-ui/core';
import * as React from 'react';
import {Formik, Form} from 'formik';

interface values {
    identifiant: String;
    motdepasse: String;
}

interface Props {
    onSubmit: () => void;
}
//Formulaire de connexion
export const Myform: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik initialValues={{identifiant: '', motdepasse: ''}} onSubmit={values => {
            onSubmit(values);
        }}
        >
            {({values, handleChange, handleBlur}) => (
            <Form>
                    <div><TextField name="identifiant" value={values.identifiant} onChange={handleChange} /></div>
                    <div><TextField name="mot de passe" value={values.motdepasse} type='password' onChange={handleChange} /></div>
                    <Button variant='outlined' color='secondary' type ='submit'>Valider</Button>
            </Form>
                
        )} </Formik>
            
                
                
        
    );
};