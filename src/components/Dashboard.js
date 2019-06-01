import React from 'react';
import StudentAppBar from "./AppBar";
import Container from "@material-ui/core/Container";
import QueuesList from "./QueuesList";

function Dashboard() {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesList/>
        </React.Fragment>

    );
}

export default Dashboard
