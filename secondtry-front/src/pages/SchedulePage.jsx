import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

const SchedulePage = () => {
    const {trainerId} = usearams();
    const [date, setDate] =useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/trainers/${trainerId}/available-times`).then(response => {
            setAvailableTimes(response.data);
        });
    }, [trainerId]);

    const handleSchedule =() = {
        axios.post(`/api/scedule`, {trainerId, date, time}).then(response => {
            history.push('/');
        });
    };

    return (
        <div className='container'>
            <h2>Scedule Training Session</h2>
            <Form>
                <Form.Group controlId='date'>
                    <Form.Label>Date</Form.Label>
                    <Form.control
                        type='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='time'>
                    <Form.Label>TIme</Form.Label>
                    <Form.control
                        as='select'
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    >
                        {availableTimes.map(time =>(
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </Form.control>
                </Form.Group>
                <Button varient='primary' onClick={handleSchedule}>
                    Schedule
                </Button>
            </Form>
        </div>
    );
};

export default SchedulePage;