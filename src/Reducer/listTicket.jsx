import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { ticketService } from 'Services';



const initialState = {
    loading:false,
    data:null,
    err:null
};


export const  listTicketApi = createAsyncThunk(
    "listTicket/listTicketApi",
    async (maLichChieu,{rejectWithValue}) =>{
        try{
            console.log(maLichChieu)
           return await ticketService.listTicketApi(maLichChieu);
        } 
        catch(err){
            rejectWithValue(err.response.data);
        }
    }
)

const listTickets = createSlice({
    name:"listTickets",
    initialState,
    reducers:{
    },
    extraReducers:{
        [listTicketApi.pending]: (state) =>{
            state.loading=true;
        },
        [listTicketApi.fulfilled]:(state,action) =>{
            console.log(action)
            state.loading=false;
            state.data = action.payload.data;
            state.err=null;
        },
        [listTicketApi.rejected]:(state,action)=>{
            state.loading=false;
            state.data=null;
            state.err=action.payload;
        }, 
    },
});

export const {} = listTickets.actions;
export default listTickets.reducer;