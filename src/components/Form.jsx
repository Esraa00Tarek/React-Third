import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

function Form() {
    const [submittedData, setSubmittedData] = useState(null);

    const cities = ["Aswan", "Qena", "Luxur", "Cairo"];

    const schema = z.object({
        fullname: z.string().min(5, "Full Name must be at least 5 characters"),
        email: z.string().email("Invalid email address"),
        city: z.string().nonempty("Please select a city"),
        password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be less than 20 characters")
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema)
    });

    function handleFocus(e) {
        e.target.style.border = "solid 1px red";
    }

    function handleBlur(e) {
        e.target.style.border = "";
    }

    function onSubmit(values) {
        setSubmittedData(values); 
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  type="text"  placeholder="Full Name"  {...register("fullname")}  onFocus={handleFocus}  onBlur={handleBlur}
                />
                <br />
                <small style={{ display: formState.errors?.fullname ? "block" : "none", color: "red" }}>
                    {formState.errors?.fullname?.message}
                </small>
                <br />

                <input  type="email" placeholder="Email"  {...register("email")}   onFocus={handleFocus}  onBlur={handleBlur}/>
                <br />
                <small style={{ display: formState.errors?.email ? "block" : "none", color: "red" }}> {formState.errors?.email?.message}
                </small>
                <br />

                <select  {...register("city")} onFocus={handleFocus} onBlur={handleBlur}>
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
                <br />
                <small style={{ display: formState.errors?.city ? "block" : "none", color: "red" }}> {formState.errors?.city?.message}
                </small>
                <br />

                <input type="password" placeholder="Password" {...register("password")} onFocus={handleFocus} onBlur={handleBlur}
                />
                <br />
                <small style={{ display: formState.errors?.password ? "block" : "none", color: "red" }}> {formState.errors?.password?.message}
                </small>
                <br />

                <button>Register</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "10px" }}>
                    <h2>Submitted Data:</h2>
                    <p>Full Name:  {submittedData.fullname}</p>
                    <p>Email:  {submittedData.email}</p>
                    <p>City: {submittedData.city}</p>
                    <p>Password:  {submittedData.password}</p>
                </div>
            )}
        </>
    );
}

export default Form;
