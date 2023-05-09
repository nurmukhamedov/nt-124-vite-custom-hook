import useFormHook from "./useFormHook"
const ExampleForm = () => {

    const [formValues, handleChange] = useFormHook({
        myName: "",
        email: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name='name' value={formValues.value} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name='email' value={formValues.value} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ExampleForm