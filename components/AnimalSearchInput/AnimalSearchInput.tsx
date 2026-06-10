// "use client";

// import * as Yup from "yup";

// import { Field, Form, Formik } from "formik";

// interface FormValues {
//   search: string;
// }

// const initialValues: FormValues = {
//   search: "",
// };

// const SearchSchema = Yup.object().shape({
//   search: Yup.string(),
// });

// export default function AnimalSearchInput() {
//   const handleSubmit = (values) => {};

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={SearchSchema}
//     >
//       <Form>
//         <Field
//           name="search"
//           type="text"
//           placeholder="Search by breed or type"
//         />
//         <button type="submit">Search</button>
//       </Form>
//     </Formik>
//   );
// }
