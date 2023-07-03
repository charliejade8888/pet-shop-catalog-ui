import { useParams } from "react-router-dom"
import { retrievePetApi, updatePet } from "../../api/todo/PetShopApiService"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default function PetComponent() {
    // const [description, setDescription] = useState('')
    const { name } = useParams() // toDO check grammar and try w id
    const [petName, setPetName] = useState('')
    console.log(`NAME:: ${name}`)
    useEffect(
        () => retrievePet(), [name] // [[..] tells useEffect to refresh component only when name changes
    )
    function retrievePet() {

        retrievePetApi(name)
            .then(response => {
                setPetName(response.data.name)
                console.log(response.data.name)
                // setDescription(response.data.description)
            })
            .catch((error) => console.log(error))
    }
    function onSubmit(values) {
        updatePet(name) .then(response => {
            //setPetName(response.data.name)
            console.log(response.data)
            // setDescription(response.data.description)
        })
        // console.log(values)
        // console.log('bollox')
        // console.log(`Hello there ${values}`)
    }
    function validate(values) {
        console.log(values)
        console.log('bollox')
        console.log(`Hello there ${values}`)
        let errors = {}
        if(values.petName.length<3) {
            console.log(`error ${values.petName.length}`)
            errors.petName='Enter at least 3 characters'
        }
        return errors
    }
    return <div className="container">
        <h1>Enter Pet Details</h1>
        <div>
            <Formik initialValues={{ petName }}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
            >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="petName"
                                component="div"
                                className="alert alert-warning"
                            />
                            {/* <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            /> */}
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field type="text" className="form-control" name="petName" />
                            </fieldset>
                            {/* <fieldset className="form-group">
                            <label>Description</label>
                            <Field type="text" className="form-control" name="description" />
                        </fieldset> */}
                            {/* <fieldset className="form-group">
                            <label>Target <Date></Date></label>
                            <Field type="date" className="form-control" name="targetDate" />
                        </fieldset> */}
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            {/* description: {description} */}
        </div>

    </div>
}