import { useState } from 'react';
import { saveAs } from 'file-saver';
import useClickFileInput from '../../hooks/useClickFileInput';
import Qrpayment from '../../assets/images/Qrpayment.jpg';
import PaymentConfirmForm from './PaymentConfirmForm';
import PaymentQrForm from './PaymentQrForm';

export default function PaymentForm({ onSuccess }) {
  const [step, setStep] = useState(1);
  const { file, onCancel, handlePreviewImage } = useClickFileInput();

  const downloadImage = () => {
    saveAs(Qrpayment, 'Qr Payment');
  };

  const handleClickNext = () => {
    if (step === 2) {
      setStep(1);
    } else if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 ? (
        <PaymentQrForm
          downloadImage={downloadImage}
          handleClickNext={handleClickNext}
        />
      ) : (
        <></>
      )}
      {step === 2 ? (
        <PaymentConfirmForm
          file={file}
          onCancel={onCancel}
          handlePreviewImage={handlePreviewImage}
          handlePrevious={handlePrevious}
          onSuccess={onSuccess}
        />
      ) : (
        <></>
      )}
    </>
  );
}
