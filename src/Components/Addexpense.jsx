import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addDetailsApi } from '../../services/allApi';



function Addexpense() {
    const [show, setShow] = useState(false);

    const [expdetails, setExpdetails] = useState({

        Category: "",
        Description: "",
        Amount: "",
        Date: "",
        Subcategory: ""
    })
    console.log(expdetails);

    const handleAdd = async () => {
        const { Category, Description, Amount, Date, Subcategory } = expdetails
        if (!Category || !Description || !Amount || !Date || !Subcategory) {
            alert('please fill the form completely')
            setExpdetails({
                Category: "",
                Description: "",
                Amount: "",
                Date: "",
                Subcategory: ""
            })
            handleClose()
        }
        else{
            const result = await addDetailsApi(expdetails)
            console.log(result);

            if(result.status==200){
                alert('details added successfully')
                handleClose()
            }
            else{
                alert("something went wrong")
                handleClose()
            }
            
        }
    }



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Add Income/Expense
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Your Income/Expense Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Category' onChange={(e) => setExpdetails({ ...expdetails, Category: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Description' onChange={(e) => setExpdetails({ ...expdetails, Description: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Amount' onChange={(e) => setExpdetails({ ...expdetails, Amount: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Date' onChange={(e) => setExpdetails({ ...expdetails, Date: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Subcategory' onChange={(e) => setExpdetails({ ...expdetails, Subcategory: e.target.value })} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Addexpense