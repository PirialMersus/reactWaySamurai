type FriendType = {
    id: number
    name: string
    iconAddress:string
    isFriend: boolean
}
type InitialStateType = typeof initialState

let initialState = {
    friends: [
        {
            id: 1,
            name: "Andrey",
            iconAddress:
                "https://vashsport.com/wp-content/uploads/motivaciya-v-sporte-640x440.jpg",
            isFriend: true,
        },
        {
            id: 2,
            name: "Gena",
            iconAddress:
                "https://static10.tgstat.ru/channels/_0/b5/b5bcf9a66a2fd7998922d87c55acf2f3.jpg",
            isFriend: true,
        },
        {
            id: 3,
            name: "Anatolii",
            iconAddress:
                "https://miro.medium.com/max/2560/0*-JLWzLp-DtyCfIo_.jpg",
            isFriend: true,
        },
        {
            id: 4,
            name: "Kirill",
            iconAddress:
                "https://i.pinimg.com/originals/73/cb/81/73cb8185bbc42d96b2799eb30389f176.jpg",
            isFriend: true,
        },
        {
            id: 5,
            name: "Alexandr emelianenko",
            iconAddress:
                "https://m.allboxing.ru/sites/default/files/styles/large/public/052_fedor_emelianenko_x_rampage_jackson.0_0.jpg?itok=lkCYQxio",
            isFriend: true,
        },
        {
            id: 6,
            name: "Andrey",
            iconAddress:
                "https://vashsport.com/wp-content/uploads/motivaciya-v-sporte-640x440.jpg",
            isFriend: true,
        },
        {
            id: 7,
            name: "Gena",
            iconAddress:
                "https://static10.tgstat.ru/channels/_0/b5/b5bcf9a66a2fd7998922d87c55acf2f3.jpg",
            isFriend: true,
        },
        {
            id: 8,
            name: "Anatolii",
            iconAddress:
                "https://miro.medium.com/max/2560/0*-JLWzLp-DtyCfIo_.jpg",
            isFriend: true,
        },
        {
            id: 9,
            name: "Kirill",
            iconAddress:
                "https://i.pinimg.com/originals/73/cb/81/73cb8185bbc42d96b2799eb30389f176.jpg",
            isFriend: true,
        },
    ]  as Array<FriendType>,
}


const sidebarReducer = (state = initialState, action: any): InitialStateType => {

    return state;
}

export default sidebarReducer;