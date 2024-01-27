import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  [key: string]: string;
}

interface FormHandlers {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
}

const useForm = (initialState: FormState = {}): [FormState, FormHandlers] => {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // You can add form submission logic here
    console.log("Form submitted:", formState);
  };

  const resetForm = (): void => {
    setFormState(initialState);
  };

  return [formState, { handleChange, handleSubmit, resetForm }];
};

export default useForm;
