import supabase from './supabase';

// Function to create a new record in the table
export const createRecord = async (tableName, data) => {
  try {
    const { data: newRecord, error } = await supabase.from(tableName).insert(data);
    if (error) {
      throw new Error(error.message);
    }
    return newRecord;
  } catch (error) {
    throw new Error('An error occurred while creating the record.');
  }
};

// Function to fetch all records from the table
export const fetchAllRecords = async (tableName) => {
  try {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error('An error occurred while fetching records.');
  }
};

// Function to update a record in the table
export const updateRecord = async (tableName, recordId, data) => {
  try {
    const { data: updatedRecord, error } = await supabase
      .from(tableName)
      .update(data)
      .eq('id', recordId);
    if (error) {
      throw new Error(error.message);
    }
    return updatedRecord;
  } catch (error) {
    throw new Error('An error occurred while updating the record.');
  }
};

// Function to delete a record from the table
export const deleteRecord = async (tableName, recordId) => {
  try {
    const { data, error } = await supabase.from(tableName).delete().eq('id', recordId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error('An error occurred while deleting the record.');
  }
};
