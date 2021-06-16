import {Button, TextField} from '@material-ui/core';
import * as React from 'react';
import {Form, Formik} from 'formik';

interface values {
    identifiant: string;
    motdepasse: string;
}

interface Props {
    onSubmit: (values: any) => void;
}

//Formulaire de connexion
export const Myform: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik<values>
            initialValues={{identifiant: '', motdepasse: ''}}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <div>
                        <TextField
                            name="identifiant"
                            label="identifiant"
                            value={values.identifiant}
                            onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField
                            name="motdepasse"
                            label="mot de passe"
                            value={values.motdepasse}
                            type='password'
                            onChange={handleChange}/>
                    </div>
                    <Button
                        variant='outlined'
                        color='secondary'
                        type='submit'>
                        Valider
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
