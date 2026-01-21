'use client';

import { ConsultationModal } from './ui';
import { useConsultation } from '@/contexts/ConsultationContext';

export default function ConsultationModalWrapper() {
  const { isModalOpen, closeModal } = useConsultation();
  return <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />;
}
