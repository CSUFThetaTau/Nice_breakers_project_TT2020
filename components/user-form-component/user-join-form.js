import React from 'react'
import styles from './user-form.module.css'
import Button from "../button/Button.js";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function User_Join_Form() {
    return (
        <>
            <Card className={styles.form}>
                {/* <Card.Img variant="top" className={styles.image} /> */}
                {/* <div className={styles.divider}></div> */}
                <Card.Body>
                    <Card.Text className={styles.form_text}>
                        <Form>
        
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <br />
                                <Form.Control className={styles.form_input} type="name" />
                            </Form.Group>
                            <br />
                            <br />
                            <Form.Group controlId="formBasicPronouns">
                                <Form.Label>Pronouns</Form.Label>
                                <br />
                                <Form.Control className={styles.form_input} type="pronouns" />
                            </Form.Group>
                            <br />
                            <br />
                            <Form.Group controlId="formBasicPronounciation">
                                <Form.Label>Pronounciation</Form.Label>
                                <br />
                                <Form.Control className={styles.form_input} type="pronounciation" />
                            </Form.Group>
                            <br />
                            
                            
                            <Button text="Join" className={styles.button} />

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default User_Join_Form;