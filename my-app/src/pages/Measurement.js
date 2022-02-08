import React, {useState} from 'react'
import {Button, Form, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { setData2 } from '../store/actions/data2Action'
import { useDispatch} from 'react-redux'

const Measurement = () => {
    const dispatch = useDispatch()
    
    let navigate = useNavigate()

    const [hNatural, sethNatural] = useState("")
    const [vNatural, setvNatural] = useState("")
    const [hDorsal, sethDorsal] = useState("")
    const [vDorsal, setvDorsal] = useState("")
    const [hPetal, sethPetal] = useState("")
    const [vPetal, setvPetal] = useState("")
    const [hSepal, sethSepal] = useState("")
    const [vSepal, setvSepal] = useState("")
    const [hLip, sethLip] = useState("")
    const [vLip, setvLip] = useState("")
    const [hPlant, sethPlant] = useState("")
    const [vPlant, setvPlant] = useState("")
    const [hInflor, sethInflor] = useState("")
    const [vInflor, setvInflor] = useState("")

    function onhNatural(e){
        sethNatural(e.target.value)
    }

    function onvNatural(e){
        setvNatural(e.target.value)
    }

    function onhDorsal(e){
        sethDorsal(e.target.value)
    }

    function onvDorsal(e){
        setvDorsal(e.target.value)
    }

    function onhPetal(e){
        sethPetal(e.target.value)
    }

    function onvPetal(e){
        setvPetal(e.target.value)
    }

    function onhSepal(e){
        sethSepal(e.target.value)
    }

    function onvSepal(e){
        setvSepal(e.target.value)
    }

    function onhLip(e){
        sethLip(e.target.value)
    }

    function onvLip(e){
        setvLip(e.target.value)
    }

    function onhPlant(e){
        sethPlant(e.target.value)
    }

    function onvPlant(e){
        setvPlant(e.target.value)
    }

    function onhInflor(e){
        sethInflor(e.target.value)
    }

    function onvInflor(e){
        setvInflor(e.target.value)
    }


    function submitForm(e){
        e.preventDefault();
        console.log('data2 masuk')
        let data2
        data2 = {
            hNatural,
            vNatural,
            hDorsal,
            vDorsal,
            hPetal,
            vPetal,
            hSepal,
            vSepal,
            hLip,
            vLip,
            hPlant,
            vPlant,
            hInflor,
            vInflor
        }
        console.log(data2)
        dispatch(setData2(data2))
        navigate("/description")
    }



    return (
        <>   
            <div id="data1">

            <Form onSubmit={submitForm}>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Measurement in centimeter</th>
                    <th>Width/ <br></br>Horizontal</th>
                    <th>Length/ <br></br>Vertical</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Natural Spread</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhNatural} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvNatural} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Dorsal Sepal</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhDorsal} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvDorsal} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Petal</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhPetal} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvPetal} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Lateral Sepal/ <br></br>Synepal</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhSepal} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvSepal} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Lip/ Pouch</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhLip} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvLip} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Plant</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhPlant} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvPlant} type="number"/>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>Inflorescence</td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onhInflor} type="number"/>
                            </Form.Group>
                        </td>
                        <td>
                            <Form.Group className="mb-3" >
                                <Form.Control onChange={onvInflor} type="number"/>
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

export default Measurement