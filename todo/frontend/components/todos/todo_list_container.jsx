import { connect } from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapsDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapsDispatchToProps)(TodoList);