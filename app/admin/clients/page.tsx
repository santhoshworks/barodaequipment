'use client';

import { useForm } from 'react-hook-form';

interface ClientForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  country: string;
  notes: string;
}

export default function ClientsPage() {
  const { register, handleSubmit, reset } = useForm<ClientForm>();

  const onSubmit = (data: ClientForm) => {
    console.log('Client submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Client Information</h1>
        <p>Add and manage client records.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="companyName">Company Name</label>
              <input id="companyName" className="form-control" {...register('companyName', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactPerson">Contact Person</label>
              <input id="contactPerson" className="form-control" {...register('contactPerson', { required: true })} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="form-control" {...register('email', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input id="phone" type="tel" className="form-control" {...register('phone')} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="industry">Industry</label>
              <select id="industry" className="form-control" {...register('industry')}>
                <option value="">Select industry</option>
                <option value="oil-gas">Oil &amp; Gas</option>
                <option value="refinery">Refinery</option>
                <option value="chemical">Chemical</option>
                <option value="power">Power</option>
                <option value="pharma">Pharmaceutical</option>
                <option value="food">Food &amp; Beverage</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="country">Country</label>
              <input id="country" className="form-control" {...register('country')} />
            </div>
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="notes">Notes</label>
            <textarea id="notes" className="form-control" rows={4} {...register('notes')} />
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Save Client</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
