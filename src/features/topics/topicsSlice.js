import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            };
        },
        addQuizIdToTopic: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
          }
    }

});

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;