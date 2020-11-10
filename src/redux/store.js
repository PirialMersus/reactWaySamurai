import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "It's my first post", likesCount: 15 },
        { id: 2, message: "Hello, how are you?", likesCount: 45 },
        { id: 3, message: "Hello, how are you?", likesCount: 45 },
        { id: 4, message: "Hello, how are you?", likesCount: 45 },
      ],
      newPostText: "it-kamasutra-hello",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "It-Kamasutra" },
        { id: 3, message: "Yo" },
        { id: 4, message: "sfsdfsdf" },
        { id: 5, message: "dddfffffddddd" },
      ],
      newMessage: "Hello world & it-kamasutra",
      dialogsData: [
        { id: 1, name: "Artem" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Nikolay" },
        { id: 5, name: "Dimich" },
        { id: 6, name: "Gregorii" },
        { id: 7, name: "Gena" },
      ],
    },
    sidebar: {
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
      ],
    },
    data: {
      users: [
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
        {
          id: 8,
          name: "Slavik",
          iconAddress:
            "https://static10.tgstat.ru/channels/_0/b5/b5bcf9a66a2fd7998922d87c55acf2f3.jpg",
          isFriend: true,
        },
        {
          id: 9,
          name: "Kostya",
          iconAddress:
            "https://miro.medium.com/max/2560/0*-JLWzLp-DtyCfIo_.jpg",
          isFriend: true,
        },
        {
          id: 10,
          name: "Misha",
          iconAddress:
            "https://i.pinimg.com/originals/73/cb/81/73cb8185bbc42d96b2799eb30389f176.jpg",
          isFriend: true,
        },
      ],
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};





export default store;
window.store = store;
