import { connect } from "react-redux";
import Politics from "./Politics";

const mapStateToProps = (state) =>{
   
    return{
        politics:state.otherPage.politics
    }
}

const PoliticsContainer = connect(mapStateToProps,)(Politics);
export default PoliticsContainer;