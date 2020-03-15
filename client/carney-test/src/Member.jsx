import React from 'react';
import Card from 'react-bootstrap/Card'

const Member = ({person, sub, price}) => {
    return (
        <>
            <h1 className='d-block'>{sub} {price}</h1>
            <div className="flex-column">
                {person.map((person) => (
                    <Card className="shadow" style={{ width: '18rem' , margin: "10px"}}>
                        <Card.Body className={sub}>
                            <Card.Text>
                                {person.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
};

export default Member;