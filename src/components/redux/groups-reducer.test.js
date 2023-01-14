import groupsReducer, { follow, unfollow } from "./groups-reducer";

let state = {
    groups: [
    { id: 1, followed: true, name: "Group 1", avatar: "https://kartinkin.net/uploads/posts/2022-02/thumbs/1645826085_2-kartinkin-net-p-kartinki-pro-leto-krasivie-2.jpg", info: "info 1" },
    { id: 2, followed: true, name: "Group 2", avatar: "https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg", info: "info 2" },
    { id: 3, followed: false, name: "Group 3", avatar: "https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg", info: "info 3" },
    { id: 4, followed: true, name: "Group 4", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4om9LPnAQBul0H21WbRN7oeMmXzK3xwVXQ&usqp=CAU", info: "info 4" },
    { id: 5, followed: false, name: "Group 5", avatar: "https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg", info: "info 5" },
    { id: 6, followed: true, name: "Group 6", avatar: "https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg", info: "info 6" },
]}

// it('following should be made',()=>{
//     let action = follow(3)

//     let newState = groupsReducer(state, action)

//     expect(newState.groups[2].followed).toBe(true)
// })

// it('unfollowing should be made',()=>{
//     let action = unfollow(1)

//     let newState = groupsReducer(state, action)

//     expect(newState.groups[2].followed).toBe(false)
// })

