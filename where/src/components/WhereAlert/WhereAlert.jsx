import React from 'react'
import { Alert } from 'react-bootstrap'

const WhereAlert = (props) => {
    return (
        <Alert key={props.variant} variant={props.variant} style={{ marginBottom: 14, marginTop: 14, width: "inherit", textAlign: "left" }}>
            <Alert.Heading>{props.message}</Alert.Heading>
            <p>{props.description}</p>
        </Alert>
    )
}

export default WhereAlert