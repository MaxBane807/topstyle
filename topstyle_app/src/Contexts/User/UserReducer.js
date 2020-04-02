

const UserReducer = (state,action) => {

    switch(action.type){

        case CreateUser:{

            return {...state}
        }

        default: {
            return state;
        }

    }

};

export default UserReducer;