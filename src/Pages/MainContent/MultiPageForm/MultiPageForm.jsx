import React from 'react';
import { useEffect } from 'react';
import Form from './Form';


const MultiPageForm = () => {
    useEffect(() => {
        require('../../../utils/sidenav')

    }, []);
    return (
        <>
            <div className='admin-content'>
                <section>
                    <div className="multiform-container row">
                        <Form />
                    </div>
                </section>
            </div>
        </>
    );
}

export default MultiPageForm;
