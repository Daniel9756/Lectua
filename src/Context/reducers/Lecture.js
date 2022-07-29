import {
    LESSON_LOADING,
    LESSON_SUCCESS,
    LESSON_ERROR,
    GETLECTURESBYAUSER_LOADING, GETLECTURESBYAUSER_SUCCESS, GETLECTURESBYAUSER_ERROR,
    DELETEASUBJECT_LOADING, DELETEASUBJECT_SUCCESS, DELETEASUBJECT_ERROR,
    GETLECTURES_LOADING, GETLECTURES_SUCCESS, GETLECTURES_ERROR,
    EDITASUBJECT_LOADING, EDITASUBJECT_SUCCESS, EDITASUBJECT_ERROR,
    GETONELECTURE_LOADING, GETONELECTURE_SUCCESS, GETONELECTURE_ERROR,
  
} from "../actions/ActionTypes";
// enrollecture: {
//     isEnrolling: false,
//     enrolled: null,
//     error: null,
//     isError: false,
//     isEnroll: false
// }, 

export const getAlecture = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case GETONELECTURE_LOADING:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isGettingLecture: true,
                    error: false,
                    isFetched: false,
                    isError: false,
                    lesson: null
                },
            };
        case GETONELECTURE_SUCCESS:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isGettingLecture: false,
                    error: false,
                    isFetched: true,
                    isError: false,
                    lesson: action.payload,
                },
            };
        case GETONELECTURE_ERROR:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isGettingLecture: false,
                    isFetched: false,
                    error: action.payload,
                    isError: true,
                    lesson: null

                },
            };
        default:
            return state;
    }
};

export const getlectures = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case GETLECTURES_LOADING:
            return {
                ...state,
                lectures: {
                    ...state.lectures,
                    isGettingLectures: true,
                    error: false,
                    isFetched: false,
                    isError: false,
                    lessons: null
                },
            };
        case GETLECTURES_SUCCESS:
            return {
                ...state,
                lectures: {
                    ...state.lectures,
                    isGettingLectures: false,
                    error: false,
                    isFetched: true,
                    isError: false,
                    lessons: action.payload,
                },
            };
        case GETLECTURES_ERROR:
            return {
                ...state,
                lectures: {
                    ...state.lectures,
                    isGettingLectures: false,
                    isFetched: false,
                    error: action.payload,
                    isError: true,
                    lessons: null

                },
            };
        default:
            return state;
    }
};

export const lectures = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case LESSON_LOADING:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isAddingLesson: true,
                    error: false,
                    isFixed: false,
                    isError: false,
                    lesson: null
                },
            };
        case LESSON_SUCCESS:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isAddingLesson: false,
                    error: false,
                    isFixed: true,
                    isError: false,
                    lesson: action.payload,
                },
            };
        case LESSON_ERROR:
            return {
                ...state,
                lecture: {
                    ...state.lecture,
                    isAddingLesson: false,
                    isFixed: false,
                    error: action.payload,
                    isError: true,
                    lesson: null

                },
            };
        default:
            return state;
    }
};

export const teacherLectures = (state, action) => {
    switch (action.type) {
        case GETLECTURESBYAUSER_LOADING:
            return {
                ...state,
                teacherlectures: {
                    ...state.teacherlectures,
                    isFetchingLectures: true,
                    error: false,
                    isFetched: false,
                    isError: false,
                    FetchedLectures: null
                },
            };
        case GETLECTURESBYAUSER_SUCCESS:
            return {
                ...state,
                teacherlectures: {
                    ...state.teacherlectures,
                    isFetchingLectures: false,
                    error: false,
                    isFetched: true,
                    isError: false,
                    FetchedLectures: action.payload,
                },
            };
        case GETLECTURESBYAUSER_ERROR:
            return {
                ...state,
                teacherlectures: {
                    ...state.teacherlectures,
                    isFetchingLectures: false,
                    isFetched: false,
                    error: action.payload,
                    isError: true,
                    FetchedLectures: null

                },
            };
        default:
            return state;
    }
};


export const deleteSubject = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case DELETEASUBJECT_LOADING:
            return {
                ...state,
                subject: {
                    ...state.subject,
                    isDeletingSubject: true,
                    error: false,
                    isDeleted: false,
                    isError: false,
                    deleted: null
                },
            };
        case DELETEASUBJECT_SUCCESS:
            return {
                ...state,
                subject: {
                    ...state.subject,
                    isDeletingSubject: false,
                    error: false,
                    isDeleted: true,
                    isError: false,
                    deleted: action.payload,
                },
            };
        case DELETEASUBJECT_ERROR:
            return {
                ...state,
                subject: {
                    ...state.subject,
                    isDeletingSubject: false,
                    isDeleted: false,
                    error: action.payload,
                    isError: true,
                    deleted: null

                },
            };
        default:
            return state;
    }
};


export const editSubject = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case EDITASUBJECT_LOADING:
            return {
                ...state,
                editsubject: {
                    ...state.editsubject,
                    isEditingSubject: true,
                    error: false,
                    isEdited: false,
                    isError: false,
                    edited: null
                },
            };
        case EDITASUBJECT_SUCCESS:
            return {
                ...state,
                editsubject: {
                    ...state.editsubject,
                    isEditingSubject: false,
                    error: false,
                    isEdited: true,
                    isError: false,
                    edited: action.payload,
                },
            };
        case EDITASUBJECT_ERROR:
            return {
                ...state,
                editsubject: {
                    ...state.editsubject,
                    isEditingSubject: false,
                    isEdited: false,
                    error: action.payload,
                    isError: true,
                    edited: null

                },
            };
        default:
            return state;
    }
};
