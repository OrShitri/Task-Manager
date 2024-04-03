import { configureStore } from '@reduxjs/toolkit';
import taskDone from './slices/taskDone'

export default configureStore({
    reducer: {
        marker: taskDone,
    }
})