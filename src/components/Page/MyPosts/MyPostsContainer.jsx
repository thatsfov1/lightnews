
import { addNewsActionCreator, updateNewTextPostActionCreator } from '../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    post:state.profilePage.post,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addNews: ()=> {
      let action =(addNewsActionCreator());
    dispatch(action)
    },
    updateNewTextPost:(text)=>{
      let action =updateNewTextPostActionCreator(text);
    dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
