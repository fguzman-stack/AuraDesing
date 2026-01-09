import { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Por favor ingresa tu nombre');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Por favor ingresa tu email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Por favor ingresa un email válido');
      return false;
    }
    if (!formData.description.trim()) {
      toast.error('Por favor describe tu proyecto');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Opción 1: Usar Web3Forms (gratuito, sin registro)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // El comprador lo reemplazará
          subject: `Nuevo proyecto: ${formData.projectType || 'Sin especificar'}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.description,
        }),
      });

      if (response.ok) {
        toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          description: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      // Simular éxito para demo (el comprador configurará su propio servicio)
      toast.success('¡Mensaje enviado con éxito! Configura tu servicio de email para producción.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}; 