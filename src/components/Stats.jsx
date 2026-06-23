import {useDispatch, useSelector} from "react-redux";
import Avatar from "./Avatar.jsx";
import {changeStats} from "../features/stats/statsSlice.js";

const Stats = () => {
    const {name} = useSelector((state) => state.user);
    const {following, followers} = useSelector((state) => state.stats);

    const dispatch = useDispatch();

    const handleLeftButtonClick = (key) => {
        dispatch(changeStats({statsType: key, sum: 1}));
    }

    const handleRightButtonClick = (key, event) => {
        event.preventDefault();
        dispatch(changeStats({statsType: key, sum: -1}));
    }

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {name}
            </div>
            <div className={'stats'}>
                <a onClick={() => handleLeftButtonClick('followers')}
                   onContextMenu={(event) => handleRightButtonClick('followers', event)}
                   style={{cursor: 'pointer'}}
                >
                    <div>Followers: {followers}</div>
                </a>
                <a onClick={() => handleLeftButtonClick('following')}
                   onContextMenu={(event) => handleRightButtonClick('following', event)}
                   style={{cursor: 'pointer'}}
                >
                    <div>Following: {following}</div>
                </a>
            </div>
        </div>
    )
}

export default Stats;