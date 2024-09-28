import { useState, useEffect } from 'react';
import VideoCard from './Videocard';
import { Col, Row } from 'react-bootstrap';
import { getalluploadedvideoAPI, getcategoryAPI, updateCategoryAPI } from '../../service/allAPI';

function View({ uploadvideoupdates, setDropvideoresponse }) {

  const videoDragover = (e) => {
    e.preventDefault();
  }

  const videoDrop = async (e) => {
    const { VideoId, categoryId } = JSON.parse(e.dataTransfer.getData("Data"));
    console.log(VideoId, categoryId);

    const { data } = await getcategoryAPI();
    const selectedCategory = data.find(item => item.id == categoryId);

    let result = selectedCategory.allVideos.filter(video => video.id !== VideoId);
    let { id, categoryName } = selectedCategory;
    let newcategory = { id, categoryName, allVideos: result };

    const res = await updateCategoryAPI(categoryId, newcategory);
    setDropvideoresponse(res);
  }

  const [allvideos, setAllvideos] = useState([]);
  const [deleteresponse, setDeleteresponse] = useState(false);

  const getalluploadvideo = async () => {
    const result = await getalluploadedvideoAPI();
    if (result.status == 200) {
      setAllvideos(result.data);
    } else {
      setAllvideos([]);
      console.log("API failed");
    }
  }

  useEffect(() => {
    getalluploadvideo();
    setDeleteresponse(false);
  }, [uploadvideoupdates, deleteresponse]);

  return (
    <Row droppable="true" onDragOver={(e) => videoDragover(e)} onDrop={e => videoDrop(e)}>
      {allvideos?.length > 0 ? allvideos.map(video => (
        <Col sm={12} md={4} lg={3} key={video.id}>  {/* Added unique key */}
          <VideoCard video={video} setDeleteresponse={setDeleteresponse} />
        </Col>
      )) : <p>nothing to display</p>}
    </Row>
  );
}

export default View;
