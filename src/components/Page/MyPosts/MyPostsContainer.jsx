import { addPost} from '../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    post:state.profilePage.post,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      addNews: (postMessage) =>{
          dispatch(addPost(postMessage))
      }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
