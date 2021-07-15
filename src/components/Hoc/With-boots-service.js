import React from 'react';
import BootsServiceContext from '../Boots-service-context';

const WithBootsService = () => (Wrapped) => (props) => {
    return (
        <BootsServiceContext.Consumer>
            {(bootsservice) => <Wrapped {...props} Bootsservice={bootsservice} />}
        </BootsServiceContext.Consumer>
    );
};

export default WithBootsService;