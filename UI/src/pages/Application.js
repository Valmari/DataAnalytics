import { Container } from "react-bootstrap";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Application() {
    return (
        <Container className="pt-5">
          <div><h2 className="pb-5">Create new application</h2>
            <h3 className="pt-5">Наименование продукции</h3>
            <Form.Group className="mb-3">
            
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="список">
              <input value={''} />
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            <h3 className="pt-5">Кол-во</h3>
            <input value={''} />

            <h3 className="pt-5">Срок поставки</h3>
            <input value={''} />

            <h3 className="pt-5">Срок сбора предложения</h3>
            <input value={''} />
            
            <div className="pt-5">
              <Button variant="success">Success</Button>
            </div>



        </Form.Group>
          </div>
        </Container>
    )
  }

