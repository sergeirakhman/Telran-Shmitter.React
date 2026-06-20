export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const changeName = (name) => ({
    type: CHANGE_USERNAME,
    payload: name
});

export const changeAvatar = (avatar) => ({
    type: CHANGE_AVATAR,
    payload: avatar
})