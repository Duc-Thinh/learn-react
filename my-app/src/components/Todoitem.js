import React, {Component} from 'react';
import classNames from 'classnames'
import './TodoItem.css'
import checkImg from '../img/check.svg'
import checkCompleteImg from '../img/check-done.svg'
import remove from '../img/remove.svg'
import PropTypes from 'prop-types'

class Todoitem extends Component {
    render() {
        const { item, onClick , onClickRemove } = this.props;
        let url = checkImg
        let url1 = remove
        if(item.isComplete) {
            url = checkCompleteImg
        }
        return (
            <div  className={classNames('Todoitem', {
                'TodoItem-done': item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32}/>
                <p>{item.title}</p>
                <img className="img" onClick={onClickRemove} src={url1} width={32} height={32}/>
            </div>
        );
    }
}

Todoitem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func,
    onClickRemove: PropTypes.func
}

export default Todoitem