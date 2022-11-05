
import { addNews, updateNewTextPost } from '../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    post:state.profilePage.post,
    newPostText: state.profilePage.newPostText
  }
}
const MyPostsContainer = connect(mapStateToProps,{addNews,updateNewTextPost})(MyPosts);


export default MyPostsContainer;
