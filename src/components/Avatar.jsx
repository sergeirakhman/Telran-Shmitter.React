import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userActions.js";

const Avatar = ({size}) => {
    const {name, avatar} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLeftClickButton = () => {
        const url = prompt('Enter avatar url:');
        dispatch(changeAvatar(url));
    }

    const handleRightClickButton = (event) => {
        event.preventDefault();
        const newName = prompt('Enter name:');
        dispatch(changeName(newName));
    }

    return (
        <div>
            <a onClick={handleLeftClickButton} onContextMenu={handleRightClickButton} style={{cursor: 'pointer'}}>
                <img className={`user-avatar ${size ?? ''} object-fit-cover`} src={avatar} alt={name} />
            </a>
        </div>
    )
}

export default Avatar;