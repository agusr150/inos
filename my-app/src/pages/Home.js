import React, {useState} from 'react'

import {Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { setData1 } from '../store/actions/data1Action'
import { useDispatch} from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    
    let navigate = useNavigate()

    const [awardNo, setAwardNo] = useState("")
    const [provision, setProvision] = useState("")
    const [event, setEvent] = useState("")
    const [plant, setPlant] = useState("")
    const [date, setDate] = useState(Date.now())
    const [clonal, setClonal] = useState("")
    const [parent1, setParent1] = useState('')
    const [parent2, setParent2] = useState('')

    function onAwardNo(e){
        setAwardNo(e.target.value)
    }

    function onProvision(e){
        setProvision(e.target.value)
    }

    function onEvent(e){
        setEvent(e.target.value)
    }

    function onPlant(e){
        setPlant(e.target.value)
    }
    
    function onDate(e){
        setDate(e.target.value)
    }

    function onClonal(e){
        setClonal(e.target.value)
    }

    function onParent1(e){
        setParent1(e.target.value)
    }

    function onParent2(e){
        setParent2(e.target.value)
    }


    function submitForm(e){
        e.preventDefault();
        console.log('dadasd')
        let data1 
        console.log(awardNo, "---date input")
        console.log(provision, "---date input")
        data1 = {
            awardNo,
            provision,
            event,
            plant,
            date,
            clonal,
            parent1,
            parent2

        }
        console.log(data1)
        dispatch(setData1(data1))
        navigate("/measurement")
    }



    return (
        <>   
            <div id="data1">

            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" >
                    <Form.Label>Award Number</Form.Label>
                    <Form.Control onChange={onAwardNo} type="text" placeholder="Enter award number" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Provisional</Form.Label>
                    <Form.Control onChange={onProvision} type="text" placeholder="Enter provisional" />
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Event</Form.Label>
                    <Form.Control onChange={onEvent} type="text" placeholder="Enter event" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={onDate} type="date" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Plant</Form.Label>
                    <Form.Control onChange={onPlant} type="text" placeholder="Enter plant" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Clonal Name</Form.Label>
                    <Form.Control onChange={onClonal} type="text" placeholder="Enter clonal name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Parent1</Form.Label>
                    <Form.Control onChange={onParent1} type="text" placeholder="Enter parent1 name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Parent2</Form.Label>
                    <Form.Control onChange={onParent2} type="text" placeholder="Enter parent2 name" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            </div>
        
        </>
    )
}

export default Home