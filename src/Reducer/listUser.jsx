import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {userService} from '../Services'


const initialState = {
    loading:false,
    data:null,
    err:null
};


export const  listUserApi = createAsyncThunk(
    "listUser/listUserApi",
    async (params,{rejectWithValue}) =>{
        try{
           return await userService.getUserApi();
        } 
        catch(err){
            rejectWithValue(err.response.data);
        }
    }
)

const listUser = createSlice({
    name:"listUser",
    initialState,
    reducers:{},
    extraReducers:{
        [listUserApi.pending]: (state) =>{
            state.loading=true;
        },
        [listUserApi.fulfilled]:(state,action) =>{
            state.loading=false;
            state.data =action.payload.data;
            state.err=null
        },
        [listUserApi.rejected]:(state,action)=>{
            state.loading=false;
            state.data=null;
            state.err=action.payload;
        }, 
    },
});

export const {}= listUser.actions;
export default listUser.reducer;