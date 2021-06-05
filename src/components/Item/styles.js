import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';

const Todo = styled(ListGroup.Item)`
  height: 50px;
  .checked label {
    text-decoration: line-through;
  }
  .icon {
    cursor: pointer;
    opacity: 0;
  }
  &:hover .icon {
    opacity: 1;
  }
}
`;

export default Todo;
