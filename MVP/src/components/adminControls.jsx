import { useState } from "react";

import Modal from "@cloudscape-design/components/modal";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";

import { useAuthenticator } from "@aws-amplify/ui-react";

export default function AdminControls(props) {
    const { 
        productButtonText, 
        categoryButtonText, 
        showNewProduct, 
        showNewCategory, 
        alertHandler,
        product 
    } = props;
    const user = undefined;
    const [visible, setVisible] = useState(false);
    const [modalConfig, setModalConfig] = useState({
        showProduct: true,
        type: 'Create'
    });

    const handleAction = (type, e) => {
        e.preventDefault();
        setModalConfig({
            showProduct: type === 'product', 
            type: productButtonText.includes("Edit") ? 'Update' : 'Create'
        });
        setVisible(true);
    };

    const handleSuccess = (fields) => {
        alertHandler({
            type: 'success',
            message: 'Successfully submitted new item!'
        });
        setVisible(false);
    };

    const handleError = (fields, msg) => {
        alertHandler({
            type: 'error',
            message: `There was an issue submitting your new item: ${msg}`
        });
        setVisible(false);
    };

    return (
       <>
            {(user !== undefined)
            ?   <>
                    <SpaceBetween direction="horizontal" size="xs">
                        {showNewProduct
                        ? <Button variant="primary" onClick={(e) => handleAction("product", e)}>
                                {productButtonText}
                            </Button>
                        : null
                        }
                        {showNewCategory
                        ? <Button variant="primary" onClick={(e) => handleAction("category", e)}>
                                {categoryButtonText}
                            </Button>
                        : null
                        }
                    </SpaceBetween>
                    <Modal
                        onDismiss={() => setVisible(false)}
                        visible={visible}      
                        closeAriaLabel="Close modal"
                        header={modalConfig.showProduct ? productButtonText : categoryButtonText}
                        modalRoot={document.getElementById('top-nav')}
                    >
                    </Modal>
                </>
            :   <></>
            }
        </>
    );
}