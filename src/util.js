export function getRedirectPath({type,avatar}){
    // return path base the user role (type)

    let url = (type==='boss')?'/boss':'/genius';

    if(!avatar){
        url += 'info';
    }

    return url;
}