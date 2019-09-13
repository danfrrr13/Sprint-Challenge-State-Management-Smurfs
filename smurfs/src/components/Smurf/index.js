import React from 'react';

import { Card } from 'semantic-ui-react';

const Smurf = ({ smurf }) => {
    return (
        <div className='Smurf'>
            <Card>
                <Card.Content>
                <Card.Header>{smurf.name}</Card.Header>
                <Card.Meta>
                    Height: {smurf.height}
                </Card.Meta>
                <Card.Description>
                    Age: {smurf.age}
                </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Smurf;