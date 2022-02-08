import React, {useState} from 'react'
import {Button, Form,} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { setData3 } from '../store/actions/data3Action'
import { useDispatch} from 'react-redux'

const Description = () => {
    const dispatch = useDispatch()
    
    let navigate = useNavigate()

    const [award, setAward] = useState("")
    const [description, setDescription] = useState("")
    const [chairman, setChairman] = useState("")
    const [photograph, setPhotograph] = useState("")
    const [exname, setExname] = useState("")
    const [exaddress, setExaddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    function onAward(e){
        setAward(e.target.value)
    }
    function onDescription(e){
        setDescription(e.target.value)
    }
    function onChairman(e){
        setChairman(e.target.value)
    }
    function onPhotograph(e){
        setPhotograph(e.target.value)
    }
    function onExname(e){
        setExname(e.target.value)
    }
    function onExaddress(e){
        setExaddress(e.target.value)
    }
    function onEmail(e){
        setEmail(e.target.value)
    }
    function onPhone(e){
        setPhone(e.target.value)
    }

    function submitForm(e){
        e.preventDefault();
        console.log('data3 masuk')
        let data3
        data3 = {
            award, description, chairman, photograph, exname, exaddress, email, phone
        }
        dispatch(setData3(data3))
        navigate("/point")
    }

    return (
        <>   
            <div id="data1">
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onDescription} type="text" 
                        as="textarea"
                        placeholder="Begin with the number of flowers, buds, and inflorescences" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Award</Form.Label>
                    <Form.Control onChange={onAward} type="text"/>
                </Form.Group>  
                <Form.Group className="mb-3" >
                    <Form.Label>Chairman's name</Form.Label>
                    <Form.Control onChange={onChairman} type="text"/>
                </Form.Group>  
                <Form.Group className="mb-3" >
                    <Form.Label>Photographer</Form.Label>
                    <Form.Control onChange={onPhotograph} type="text"/>
                </Form.Group>    
                <Form.Group className="mb-3" >
                    <Form.Label>Exhibitor's name</Form.Label>
                    <Form.Control onChange={onExname} type="text"/>
                </Form.Group>          
                <Form.Group className="mb-3" >
                    <Form.Label>Exhibitor's address</Form.Label>
                    <Form.Control onChange={onExaddress} type="text"/>
                </Form.Group>      
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={onEmail} type="email"/>
                </Form.Group>                       
                <Form.Group className="mb-3" >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control onChange={onPhone} type="text"/>
                </Form.Group>      
                <Button variant="primary" type="submit">
                    Submit
                </Button>         
            </Form>
            </div>

        </>
    )
}

export default Description