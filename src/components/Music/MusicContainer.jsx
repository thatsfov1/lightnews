import { connect } from "react-redux";
import Music from "./Music";

const mapStateToProps = (state) =>{
   
    return{
        music:state.otherPage.music
    }
}

const MusicContainer = connect(mapStateToProps,)(Music);
export default MusicContainer;