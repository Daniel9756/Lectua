import {
    GETTIMETABLE_LOADING,GETTIMETABLE_SUCCESS, GETTIMETABLE_ERROR,
    DELETEATOPIC_LOADING, DELETEATOPIC_SUCCESS, DELETEATOPIC_ERROR,
    EDITATOPIC_LOADING, EDITATOPIC_SUCCESS, EDITATOPIC_ERROR,   
    TIMETABLE_LOADING, TIMETABLE_SUCCESS, TIMETABLE_ERROR
} from "../actions/ActionTypes";



export const studenttimetable = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case GETTIMETABLE_LOADING:
            return {
                ...state,
                mytimetable: {
                    ...state.mytimetable,
                    isEnrolling: true,
                    error: false,
                    isFetched: false,
                    isError: false,
                    data: null
                },
            };
        case GETTIMETABLE_SUCCESS:
            return {
                ...state,
                mytimetable: {
                    ...state.mytimetable,
                    isEnrolling: false,
                    error: false,
                    isFetched: true,
                    isError: false,
                    data: action.payload,
                },
            };
        case GETTIMETABLE_ERROR:
            return {
                ...state,
                mytimetable: {
                    ...state.mytimetable,
                    isEnrolling: false,
                    isFetched: false,
                    error: action.payload,
                    isError: true,
                    data: null

                },
            };
        default:
            return state;
    }
};

export const tables = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case TIMETABLE_LOADING:
            return {
                ...state,
                topic: {
                    ...state.topic,
                    isAddingLesson: true,
                    error: false,
                    isScheduled: false,
                    isError: false,
                    timetable: null
                },
            };
        case TIMETABLE_SUCCESS:
            return {
                ...state,
                topic: {
                    ...state.topic,
                    isAddingLesson: false,
                    error: false,
                    isScheduled: true,
                    isError: false,
                    timetable: action.payload,
                },
            };
        case TIMETABLE_ERROR:
            return {
                ...state,
                topic: {
                    ...state.topic,
                    isAddingLesson: false,
                    isScheduled: false,
                    error: action.payload,
                    isError: true,
                    timetable: null

                },
            };
        default:
            return state;
    }
};

export const timetable = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case GETTIMETABLE_LOADING:
            return {
                ...state,
                table: {
                    ...state.table,
                    isAddingSchedule: true,
                    error: false,
                    isListed: false,
                    isError: false,
                    lists: null
                },
            };
        case GETTIMETABLE_SUCCESS:
            return {
                ...state,
                table: {
                    ...state.table,
                    isAddingSchedule: false,
                    error: false,
                    isListed: true,
                    isError: false,
                    lists: action.payload,
                },
            };
        case GETTIMETABLE_ERROR:
            return {
                ...state,
                table: {
                    ...state.table,
                    isAddingSchedule: false,
                    isListed: false,
                    error: action.payload,
                    isError: true,
                    lists: null

                },
            };
        default:
            return state;
    }
};

export const deleteTopic = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case DELETEATOPIC_LOADING:
            return {
                ...state,
                deleteTopic: {
                    ...state.deleteTopic,
                    isDeletingTopic: true,
                    error: false,
                    isDeleted: false,
                    isError: false,
                    deletedTopic: null
                },
            };
        case DELETEATOPIC_SUCCESS:
            return {
                ...state,
                deleteTopic: {
                    ...state.deleteTopic,
                    isDeletingTopic: false,
                    error: false,
                    isTopDeleted: true,
                    isError: false,
                    deletedTopic: action.payload,
                },
            };
        case DELETEATOPIC_ERROR:
            return {
                ...state,
                deleteTopic: {
                    ...state.deleteTopic,
                    isDeletingTopic: false,
                    isTopDeleted: false,
                    error: action.payload,
                    isError: true,
                    deletedTopic: null

                },
            };
        default:
            return state;
    }
};

export const editedTopic = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case EDITATOPIC_LOADING:
            return {
                ...state,
                edittopic: {
                    ...state.edittopic,
                    isEditingTopic: true,
                    error: false,
                    isEditedTopic: false,
                    isError: false,
                    editedTopic: null
                },
            };
        case EDITATOPIC_SUCCESS:
            return {
                ...state,
                edittopic: {
                    ...state.edittopic,
                    isEditingTopic: false,
                    error: false,
                    isEditedTopic: true,
                    isError: false,
                    editedTopic: action.payload,
                },
            };
        case EDITATOPIC_ERROR:
            return {
                ...state,
                edittopic: {
                    ...state.edittopic,
                    isEditingTopic: false,
                    isEditedTopic: false,
                    error: action.payload,
                    isError: true,
                    editedTopic: null

                },
            };
        default:
            return state;
    }
};
