import {useState} from "react"

import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from "../ui/Button"
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm,setShowForm]=useState(false)

   return (
      <>
         <Row type="horizontal">
            <Heading as="h1">All cabins</Heading>
            <p>Flter / Sort</p>
         </Row>

         <Row >
            <CabinTable />

            <Button  onClick={()=>setShowForm(!showForm)} >Add new cabin</Button> 

            {showForm &&  <CreateCabinForm />}
         </Row>
      </>
   );
}

export default Cabins;
