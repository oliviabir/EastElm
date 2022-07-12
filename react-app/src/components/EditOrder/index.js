import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditOrderForm from './EditOrderForm';


function EditOrder({order}) {
  const [showModal, setShowModal] = useState(false);

  return (
      <div>
          <button onClick={() => setShowModal(true)}>Edit Order Info</button>
          {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                  <EditOrderForm order={order} setShowModal={setShowModal} />
              </Modal>
          )}
      </div>
  );
}

export default EditOrder
