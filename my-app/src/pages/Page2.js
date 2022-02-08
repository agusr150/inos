import React from 'react'
import {Button, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useSelector} from 'react-redux'

const Page2 = () => {
    let navigate = useNavigate()


    const { data1 } = useSelector(state=>state.data1Reducer)
    const { data4 } = useSelector(state=>state.data4Reducer)

    function toPage1(){
        navigate("/page1")
    }


    return (
        <>   
            <div id="data1">
                <div id="title1">
                    <img src={require('../assets/logo2.png')} alt="gambar" />
                    <div id="title1a">
                        <h4>OFFICIAL BALLOUT FOR <br></br>INOS SHOW TROPHY</h4>
                    </div>
                </div>
                <div>
                    Entry No. <strong>{data4.entryNo}</strong> is the most outstanding exhibit of this Show and merits the following point:
                </div>
                <div id="centre">
                    <h4>POINT SCALE #12</h4>
                
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr>
                                <td>General <br></br>Arrangement</td>
                                <td>35</td>
                                <td>{data4.general}</td>
                            </tr>
                            <tr>
                                <td>Quality of Flowers</td>
                                <td>35</td>
                                <td>{data4.quality}</td>
                            </tr>
                            <tr>
                                <td>Variety</td>
                                <td>20</td>
                                <td>{data4.variety}</td>
                            </tr>
                            <tr>
                                <td>Labeling</td>
                                <td>10</td>
                                <td>{data4.label}</td>
                            </tr>
                            <tr>
                                <td>TOTALS</td>
                                <td>100</td>
                                <td>{data4.total}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>NO AWARD : {data1.awardNo}</h4>
                </div>
                <div>
                A total score of 80 points or more constitutes one vote for this Entry towards the INOS Show Trophy.
                <br></br>Should the best Entry receive less than 80 pints, the Judge should indicate on this ballot, NO AWARD.
                <br></br>Ballot must have a score and be signed to count.
                </div>
                <div id="space">
                    <strong>Signature</strong>
                </div>

            </div>

            <Button variant="primary" onClick={toPage1}>
                    TO AWARD
            </Button>
        
        </>
    )
}

export default Page2