import React,{Components} from 'react';
const ContentDetails=(props)=>(
    <div>{props.match.params.contentName}
        <img src="../images/content.png" />
    </div>
  )
  export default ContentDetails;