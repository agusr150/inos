import React from 'react'
import { useSelector } from 'react-redux'
import {Table, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {

  let navigate = useNavigate()

  const { data1 } = useSelector(state=>state.data1Reducer)
  const { data2 } = useSelector(state=>state.data2Reducer)
  const { data3 } = useSelector(state=>state.data3Reducer)

  function toPage2(){
    navigate('/page2')
  }


  return (
    <>
      <div id="page1"> 
        <div id="title1">
          <img src={require('../assets/logo2.png')} alt="gambar" />
          <div id="title1a">
            <h4>Indonesian Native Orchid Society</h4>
          </div>
        </div>
        <br></br>
        <div>
          Award No: {data1.awardNo}
        </div>
        <div>
          Provisional: {data1.provision}
        </div>
        <div>
          Event: {data1.event}
        </div> 
        <div>
          Date: {data1.date}
        </div> 
        <div>
          Plant: {data1.plant}
        </div> 
        <div>
          Clonal Name: {data1.clonal}
        </div> 
        <div>
          Parent1: {data1.parent1}
        </div> 
        <div>
          Parent2: {data1.parent2}
        </div>
      

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Measurement <br></br>in centimeter</th>
              <th>Width/ <br></br>Horizontal</th>
              <th>Length/ <br></br>Vertical</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Natural Spread</td>
              <td>{data2.hNatural}</td>
              <td>{data2.vNatural}</td>
            </tr>
            <tr>
              <td>Dorsal Sepal</td>
              <td>{data2.hDorsal}</td>
              <td>{data2.vDorsal}</td>
            </tr>
            <tr>
              <td>Petal</td>
              <td>{data2.hSepal}</td>
              <td>{data2.vSepal}</td>
            </tr>
            <tr>
              <td>Lateral Sepals/ <br></br>Synsepal</td>
              <td>{data2.hSepal}</td>
              <td>{data2.vSepal}</td>
            </tr>
            <tr>
              <td>Lip/ Pouch</td>
              <td>{data2.hLip}</td>
              <td>{data2.vLip}</td>
            </tr>
            <tr>
              <td>Plant</td>
              <td>{data2.hPlant}</td>
              <td>{data2.vPlant}</td>
            </tr>
            <tr>
              <td>Inflorescence</td>
              <td>{data2.hInflor}</td>
              <td>{data2.vInflor}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <div>
          Description <br></br>
          <div id="rectang">{data3.description}</div>
          
        </div> 
        <div id="page1bot">
          <img src={require('../assets/sticker.png')} alt="sticker" />
          <div>
            <div>Award: {data3.award} </div>
            <div>Chairman's Name: {data3.chairman}</div>
            <div>Chairman's Signature _____________</div>
            <div>Photogrpaher : {data3.photograph}</div>
            <div>Exhibitor Name and Address</div>
            <div id="rectang">
              <div>{data3.exname}</div>
              <div>{data3.exaddress}</div>
            </div>
            <div>Email address: {data3.email}</div>
            <div>Phone: {data3.phone}</div>

          </div>
        </div>

      </div>    
      <Button variant="primary" onClick={toPage2}>
          TO BALLOUT
      </Button>
    </>
  )


}

export default Page1