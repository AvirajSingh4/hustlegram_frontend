import React from 'react'
import  "./Post.css";
import { Avatar } from '@mui/material';
import Like from '@mui/icons-material/ThumbUpAltRounded';
import Comment from '@mui/icons-material/MessageRounded';
import Share from '@mui/icons-material/SendRounded';
 

function Post({user, postImage, likes, timestamp}){

    return(<>
    
        <div className='post'>
            <div className='post_header'>
                <div className='post_headerAuthor'>
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                   {user} <span>{timestamp}</span>
                </div>
            </div>
            <div className='post_image'>
                <img src= {postImage} alt=""/>
            </div>
            <div className='post_footer'>
                <div className='post_footerIcons'>
                    <div className='post_iconsMain'>
                        <Like className='postIcon'/>
                        <Comment className='postIcon'/>
                        <Share className='postIcon' />
                    </div>
                </div>
                Liked by {likes} people.
            </div>

        </div>
    </>)
}
 
export default Post