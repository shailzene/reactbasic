import React from "react";
import { useFormik } from "formik";

export default function FormikComponent() {
    function validate(values) {
        const errors = {};
        if (!values.favoriteFood) {
            errors.favoriteFood = "Required";
        }

        if (!values.favoritePlace) {
            errors.favoritePlace = "Required";
        }
        return errors;
    }

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values, // use this if you want controlled components
        errors,
    } = useFormik({
        initialValues: {
            favoriteFood: "",
            favoritePlace: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}
        },
    });

    return (
        <>
            <h1 style={{ color: "red" }}>Formik Component for validation</h1>
            
            <form onSubmit={handleSubmit}>

                <label htmlFor="favoriteFood">Favorite Food:</label>
                <input type="text" name="favoriteFood" onChange={handleChange} onBlur={handleBlur} />
                {touched.favoriteFood && errors.favoriteFood ? <div style={{ color: "red" }}>errors.favoriteFood</div> : null}
                <br />
                <br/>

                <label htmlFor="favoritePlace">Favorite place:</label>
                <input type="text" name="favoritePlace" onChange={handleChange} onBlur={handleBlur} />
                {touched.favoritePlace && errors.favoritePlace ? <div style={{ color: "red" }}>errors.favoritePlace</div> : null}
                <br />
                <br/>
                <br/>

                <button type="submit">submit</button>
            </form>
        </>
    );
}

