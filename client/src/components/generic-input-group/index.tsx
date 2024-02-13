import { ErrorMessage, Field } from 'formik';
import { InputHTMLAttributes, ReactNode } from 'react';
import './style.css';

type InputGroupProps = InputHTMLAttributes<HTMLInputElement> & {
  select?: boolean;
  labelText: string;
  children?: ReactNode;
};

export default function GenericInputGroup({
  select,
  labelText,
  name,
  required,
  children,
  ...rest
}: InputGroupProps) {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {labelText || name}
        {required ? <span className="text-danger fs-5"> *</span> : <></>}
      </label>
      <Field
        as={select ? 'select' : 'input'}
        name={name}
        required={required}
        className="form-control"
        {...rest}
      >
        {children}
      </Field>
      <ErrorMessage name={name!}>
        {(msg) => <div className="error-msg text-danger">{msg}</div>}
      </ErrorMessage>
    </>
  );
}
