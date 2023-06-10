import { useForm } from "react-hook-form";
import "./App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    course: yup.string().required("Course is required"),
    password:yup.string().min(5).max(10).required(),
    confirmpassword: yup.string().oneOf([yup.ref('password'),null]),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) // Using yupResolver to validate the form
  });

  const sendData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendData)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="firstName">Enter First Name</label>
      <input type="text" name="firstName" {...register('firstName')} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Enter Last Name</label>
      <input type="text" name="lastName" {...register('lastName')} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="course">Enter Course</label>
      <input type="text" name="course" {...register('course')} />
      {errors.course && <p>{errors.course.message}</p>}

      <label htmlFor="school">Select Your School</label>
      <select name="school" {...register('school')} style={{ width: '11rem' }}>
        <option value="se">Computing</option>
        <option value="bs">Business</option>
        <option value="edu">Education</option>
        <option value="hsc">Health Science</option>
      </select>
      <input type="password" name="password" {...register('password')} />
      <input type="password" name="confirmpassword"{...register('confirmpassword')} />
      <p>{errors.confirmpassword?.message}</p>
      <input type="submit" value="Submit" style={{ width: '3rem', marginTop: '2rem', cursor: 'pointer', backgroundColor: 'black', textAlign: 'center', justifyContent: 'center' }} />
    </form>
  );
}

export default App;
