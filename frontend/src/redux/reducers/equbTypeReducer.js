import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchEqubType = createAsyncThunk("equb/fetchEqubType", async () => {
  const response = await axios.get("http://localhost:5003/api/v1/types");
  return response.data;
});

const addEqubType = createAsyncThunk(
  "equb/addEqubType",
  async (equbTypeData) => {
    const response = await axios.post(
      "http://localhost:5003/api/v1/types",
      equbTypeData
    );
    return response.data;
  }
);

const deleteEqubType = createAsyncThunk(
  "equb/deleteEqubType",
  async (equbTypeId) => {
    await axios.delete(`http://localhost:5003/api/v1/types/${equbTypeId}`);
    return equbTypeId;
  }
);

const updateEqubType = createAsyncThunk(
  "equb/updateEqubType",
  async ({ equbTypeId, equbTypeData }) => {
    const response = await axios.put(
      `http://localhost:5003/api/v1/types/${equbTypeId}`,
      equbTypeData
    );
    return response.data;
  }
);

const initialState = {
  equbType: [],
  loading: false,
  error: null,
};

const equbTypeSlice = createSlice({
  name: "equb",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEqubType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEqubType.fulfilled, (state, action) => {
        state.loading = false;
        state.equbType = action.payload;
      })
      .addCase(fetchEqubType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEqubType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEqubType.fulfilled, (state, action) => {
        state.loading = false;
        state.equbType.push(action.payload);
      })
      .addCase(addEqubType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteEqubType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEqubType.fulfilled, (state, action) => {
        state.loading = false;
        state.equbType = state.equbType.filter(
          (equb) => equb.id !== action.payload
        );
      })
      .addCase(deleteEqubType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateEqubType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEqubType.fulfilled, (state, action) => {
        state.loading = false;
        const updatedEqub = action.payload;
        const index = state.equbType.findIndex(
          (equb) => equb.id === updatedEqub.id
        );
        if (index !== -1) {
          state.equbType[index] = updatedEqub;
        }
      })
      .addCase(updateEqubType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchEqubType, addEqubType, deleteEqubType, updateEqubType };

export default equbTypeSlice.reducer;
