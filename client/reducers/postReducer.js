import { ADD_POSTS } from '../actions/index'

const INITIAL_STATE = {};
//this is the state in
///components/Residential/
//const mapStateToProps = (state) => {}

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POSTS:
     return action.data

    default:
     return state
  }
}
