import React, { useContext } from 'react';
import BootsServiceContext from '../Boots-service-context';

const WithBootsService = () => (Wrapped) => {
    return function With(props) {
        const bootsservice = useContext(BootsServiceContext)
        return <Wrapped {...props} Bootsservice={bootsservice} />
    };
}

export default WithBootsService;