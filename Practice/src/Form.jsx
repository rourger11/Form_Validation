import "bootstrap/dist/css/bootstrap.min.css";
import {useFormik} from "formik"
import { validationComponent } from "./schemas";
export const FormComponent = () => {
    const initialValues={
        name:"",
        email:"",
        password:"",
        confirm_password:""
    }
    const {values, errors, touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues,
        validationSchema: validationComponent,
        onSubmit : (values,action)=>{
            action.resetForm();
        }
   })
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Register</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              {errors.name && touched.name ? <p className="text-danger"> {errors.name}</p>: null}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
              {errors.email && touched.email ? <p className="text-danger"> {errors.email}</p>: null}

              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              {errors.password && touched.password ? <p className="text-danger"> {errors.password}</p>: null}

              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
              {errors.confirm_password && touched.confirm_password ? <p className="text-danger"> {errors.confirm_password}</p>: null}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
