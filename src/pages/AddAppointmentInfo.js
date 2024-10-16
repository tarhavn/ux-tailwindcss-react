import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const AddAppointmentInfo = () => {
    return (
        <Form>
            <h2>Add new a appointment information</h2>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Pet name
                </InputGroup.Text>
                <Form.Control
                    aria-label="pet-name"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Owner name
                </InputGroup.Text>
                <Form.Control
                    aria-label="owner-name"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Appointment note</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>

            <Button as="input" type="submit" value="Submit" />{' '}
            <Button variant="secondary">Cancel</Button>
        </Form>
    )
}

export default AddAppointmentInfo;