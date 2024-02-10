export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}



// const validationSchema = yup.object().shape({
//     email: yup.string().email('Invalid email address').required('Required'),
//   });
//   const handleSubmit = (values: { email: string }) => {
//     console.log(values)
//     if (values.email) {
//       router.push('/mocks/Code.tsx');
//   }
//     };