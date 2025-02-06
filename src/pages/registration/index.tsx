import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: () => {
      alert("Form Submitted Successfully");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-center text-2xl font-bold mb-4 text-blue-900">
          Registration
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
          })}
          onSubmit={() => {
            alert("Form Submitted Successfully");
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-600 text-sm">
                    {formik.errors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 text-sm">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600 text-sm">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;
