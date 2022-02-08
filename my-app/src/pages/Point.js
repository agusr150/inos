import React, {useState} from 'react'
import {Button, Form, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { setData4 } from '../store/actions/data4Action'
import { useDispatch} from 'react-redux'

const Point = () => {
    const dispatch = useDispatch()
    
    let navigate = useNavigate()

    const [entryNo, setEntryno] = useState("")
    const [general, setGeneral] = useState("")
    const [quality, setQuality] = useState("")
    const [variety, setVariety] = useState("")
    const [label, setLabel] = useState("")

    function onEntryno(e){
        setEntryno(e.target.value)
    }

    function onGeneral(e){
        setGeneral(e.target.value)
    }

    function onQuality(e){
        setQuality(e.target.value)
    }

    function onVariety(e){
        setVariety(e.target.value)
    }

    function onLabel(e){
        setLabel(e.target.value)
    }


    function submitForm(e){
        e.preventDefault();
        console.log('data4 masuk')
        let data4
        let total = Number(general)+Number(quality)+Number(variety)+Number(label)
        data4 = {
            entryNo, general, quality, variety,label, total
        }
        console.log(data4)
        dispatch(setData4(data4))
        navigate("/page1")
    }



    return (
        <>   
            <div id="data1">

            <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" >
                <Form.Label>Entry No</Form.Label>
                <Form.Control onChange={onEntryno} type="number"/>
            </Form.Group>
            <h4>Point Scale #12</h4>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>General Arrangemnet</td>
                        <td>35</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onGeneral} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Quality of FLowers</td>
                        <td>35</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onQuality} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Variety</td>
                        <td>20</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onVariety} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Labeling</td>
                        <td>10</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onLabel} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                </tbody>
                </Table>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            </div>
        
        </>
    )
}

export default Point