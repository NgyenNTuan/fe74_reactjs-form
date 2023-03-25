import {
   SUBMIT_STUDENT,
   DELETE_STUDENT,
   EDIT_STUDENT,
   SEARCH_STUDENT,
} from "./type";

export const actSubmitStudent = (payload) => {
   return {
      type: SUBMIT_STUDENT,
      payload,
   };
};

export const actDeleteStudent = (payload) => {
   return {
      type: DELETE_STUDENT,
      payload,
   };
};

export const actEditStudent = (payload) => {
   return {
      type: EDIT_STUDENT,
      payload,
   };
};

export const actSearchStudent = (payload) => {
   return {
      type: SEARCH_STUDENT,
      payload,
   };
};
