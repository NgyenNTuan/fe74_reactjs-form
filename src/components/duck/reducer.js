import {
   SUBMIT_STUDENT,
   DELETE_STUDENT,
   EDIT_STUDENT,
   SEARCH_STUDENT,
} from "./type";

const initialState = {
   studentList: [
      {
         idStu: "1",
         fullName: "Nguyen Ngoc Tuan",
         phone: "023483848",
         email: "tne@gmail.com",
      },
      {
         idStu: "2",
         fullName: "Nguyen Van A",
         phone: "023483848",
         email: "vana@gmail.com",
      },
      {
         idStu: "3",
         fullName: "Tran Quang",
         phone: "023483848",
         email: "tranquang@gmail.com",
      },
   ],
   studentEdited: null,
   keyword: "",
};

export const studentReducer = (state = initialState, action) => {
   const deepCopyFunction = (inObject) => {
      let outObject, value, key;

      if (typeof inObject !== "object" || inObject === null) {
         return inObject; // Return the value if inObject is not an object
      }

      // Create an array or object to hold the values
      outObject = Array.isArray(inObject) ? [] : {};

      for (key in inObject) {
         value = inObject[key];

         // Recursively (deep) copy for nested objects, including arrays
         outObject[key] = deepCopyFunction(value);
      }

      return outObject;
   };
   switch (action.type) {
      case SUBMIT_STUDENT: {
         const stuListClone = deepCopyFunction(state.studentList);

         const found = stuListClone.find((stu) => {
            return stu.idStu === action.payload.idStu;
         });

         if (!found) {
            stuListClone.push(action.payload);
         } else {
            const index = stuListClone.findIndex((stu) => {
               return stu.idStu === action.payload.idStu;
            });

            stuListClone[index] = action.payload;
            state.studentEdited = null;
         }
         state.studentList = stuListClone;

         return { ...state };
      }
      case DELETE_STUDENT: {
         const stuListClone = deepCopyFunction(state.studentList);

         const index = stuListClone.findIndex((stu) => {
            return stu.idStu === action.payload;
         });

         if (index !== -1) {
            stuListClone.splice(index, 1);
         }

         state.studentList = stuListClone;
         return { ...state };
      }
      case EDIT_STUDENT: {
         state.studentEdited = action.payload;
         return { ...state };
      }
      case SEARCH_STUDENT: {
         state.keyword = action.payload;
         return { ...state };
      }
      default:
         return { ...state };
   }
};
