import { useNavigate, useParams } from "react-router-dom"
import { createPetApi, retrievePetApi, updatePet } from "../../api/todo/PetShopApiService"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import moment from "moment"

export default function PetComponent() {
    // const [description, setDescription] = useState('')
    const { name } = useParams() // toDO check grammar and try w id
    const [petName, setPetName] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const [petPrice, setPetPrice] = useState('')
    const [petType, setPetType] = useState('')
    const [petBreed, setPetBreed] = useState('')
    const navigate = useNavigate()
    console.log(`NAME:: ${name}`)
    const newPet = 'newPet' // TODO BS use undefined instead??
    useEffect(
        () => retrievePet(), [name] // [[..] tells useEffect to refresh component only when name changes
    )

    function retrievePet() {
        if (name != newPet) {
            retrievePetApi(name)
                .then(response => {
                    setPetName(response.data.name)
                    setPetPrice(response.data.price)
                    setPetDescription(response.data.description)
                    setPetType(response.data.type)
                    setPetBreed(response.data.breed)
                    console.log(response.data.name)
                    // setDescription(response.data.description)
                })
                .catch((error) => console.log(error))
        }
    }
    function onSubmit(values) {
        if (name == newPet) {
            const pet = {
                name: values.petName,
                description: values.petDescription,
                price: values.petPrice,
                breed: values.petBreed,
                type: values.petType
            }
            createPetApi(pet)
            .then(response => {
                //setPetName(response.data.name)
                console.log(response.data)
                navigate('/todos')
                // TODO error + correct /todos -> /pets
                // TODO add all fields to form
                // setDescription(response.data.description)
            })
            .catch((error) => console.log(error))
        } else {
            updatePet(name, values.petPrice)
                .then(response => {
                    //setPetName(response.data.name)
                    console.log(response.data)
                    navigate('/todos')
                    // TODO error + correct /todos -> /pets
                    // TODO add all fields to form
                    // setDescription(response.data.description)
                })
                .catch((error) => console.log(error))
            // console.log(values)
            // console.log('bollox')
            // console.log(`Hello there ${values}`)
        }
    }
    function validate(values) {
        console.log(values)
        console.log('bollox')
        console.log(`Hello there ${values}`)
        let errors = {}
        if (!values.petName) {
            console.log(`error ${values.petName.length}`)
            errors.petName = 'Enter a name'
        }
        if (!values.petDescription) {
            console.log(`error ${values.petName.length}`)
            errors.petDescription = 'Enter a description'
        }
        if (!values.petPrice) {
            console.log(`error ${values.petPrice}`)
            errors.petPrice = 'Enter a price'
        }
        if (!values.petType) {
            console.log(`error ${values.petType}`)
            errors.petType = 'Enter a type'
        }
        if (!values.petBreed) {
            console.log(`error ${values.petBreed}`)
            errors.petBreed = 'Enter a breed'
        }
        // if (values.targetDate==null || values.targetDate=='' || !moment(values.targetDate).isValid() ) {
        //     console.log(`error ${values.targetDate}`)
        //     errors.petBreed = 'Enter a valid date'
        // }
        return errors
    }
    return <div className="container">
        <h1>Enter Pet Details</h1>
        <div>

            {/* TODO check course for how to add multiple initial */}
            <Formik initialValues={{ petPrice, petName, petDescription, petType, petBreed }}
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
                            <ErrorMessage
                                name="petDescription"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="petPrice"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="petType"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="petBreed"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field type="text" className="form-control" name="petName"
                                    disabled={name != newPet} />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="petDescription"
                                    disabled={name != newPet} />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Price</label>
                                <Field type="text" className="form-control" name="petPrice" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Type</label>
                                <Field type="text" className="form-control" name="petType" disabled={name != newPet} />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Breed</label>
                                <Field type="text" className="form-control" name="petBreed" disabled={name != newPet} />
                            </fieldset>
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