// src/Components/Category.jsx
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Added import
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Videocard from './Videocard';
import { addcategoryAPI, deletecategoryyAPI, getcategoryAPI } from '../../service/allAPI';
import { useEffect } from 'react';
import  FormControl from 'react-bootstrap/FormControl';
import { getvideoAPI } from '../../service/allAPI';
import { updateCategoryAPI } from '../../service/allAPI';
import { Card, Col, Row } from 'react-bootstrap';

function Category({dropvideoresponse}) {
  const[allcategories,setAllcategories]=useState([])
  const [show, setShow] = useState(false);
const[categoryName,setCategoryName]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd =async()=>{
    if(categoryName){
      const result= await addcategoryAPI({categoryName,allVideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getcategory()
      }else{
        alert(result.message)
      }

    }
    else{
      alert("please fill the category name")
    }
  }
  const getcategory =async()=>{
    const{data} = await getcategoryAPI()
    setAllcategories(data)
  }
  useEffect(()=>{
    getcategory()
  },[dropvideoresponse])
  const removeCategory =async(id)=>{
    await deletecategoryyAPI(id)
    getcategory()
  }
  



const videodragstarted=(e,VideoId,categoryId)=>{
  let datashare={VideoId,categoryId}
  e.dataTransfer.setData("Data",JSON.stringify(datashare))
}

//jjkk above
  const dragOver=(e)=>{
    console.log("video dragging over the category");
    e.preventDefault()
  }



  const videoDropped=async (e,categoryId)=>{
    const VideoId =e.dataTransfer.getData("videoid")
 
    console.log("videoid" + VideoId + "videodropped category id" +categoryId);
    const {data}= await getvideoAPI(VideoId)
    const selectedCategory =allcategories.find(items=>items.id===categoryId)
    selectedCategory.allVideos.push(data)
    await updateCategoryAPI(categoryId,selectedCategory)
    getcategory()
  }
  //jkk above


  
  return (
    <div>
     <div className='d-grid'>
      <button className='btn btn-info' onClick={handleShow}>Add Category</button>
     </div>
     {

     allcategories?.length>0?allcategories.map(category=>( <div  className='border rounded mt-5 p-2'>
     <div className='d-flex justify-content-between align-items-center' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category.id)}>
     <h5> {category.categoryName }</h5>
     <button className='btn' onClick={()=>removeCategory(category.id)}><i className="fa-solid fa-trash text-danger"></i></button>
    </div>
    <Row >
        { 
        category?.allVideos?.length>0?category.allVideos.map(Card=>(
      <Col sm={12} draggable onDragStart={e=>videodragstarted(e,Card.id,category.id)}>
        <Videocard video={Card} insidecategory={true}/>
      </Col>
      )):null
        }
     </Row> 
    </div>)):<p className='fw-bolder text-danger'>nothing to display</p>
    
}
     
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        <FloatingLabel controlId="floatingName" label="category" className="mb-3">
            <Form.Control type="text" placeholder="enter category" onChange={e=>setCategoryName(e.target.value)}/>
          </FloatingLabel>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
