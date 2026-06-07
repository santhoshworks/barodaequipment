'use client';

import { useForm } from 'react-hook-form';

interface CertForm {
  certName: string;
  issuingBody: string;
  certNumber: string;
  issueDate: string;
  expiryDate: string;
}

export default function CertificationsPage() {
  const { register, handleSubmit, reset } = useForm<CertForm>();

  const onSubmit = (data: CertForm) => {
    console.log('Certification submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Certifications</h1>
        <p>Manage company certifications and compliance records.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="certName">Certification Name</label>
              <input id="certName" className="form-control" placeholder="e.g. ISO 9001:2015" {...register('certName', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="issuingBody">Issuing Body</label>
              <input id="issuingBody" className="form-control" placeholder="e.g. Bureau Veritas" {...register('issuingBody', { required: true })} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="certNumber">Certificate Number</label>
            <input id="certNumber" className="form-control" {...register('certNumber')} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="issueDate">Issue Date</label>
              <input id="issueDate" type="date" className="form-control" {...register('issueDate', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="expiryDate">Expiry Date</label>
              <input id="expiryDate" type="date" className="form-control" {...register('expiryDate')} />
            </div>
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Certificate Image</label>
            <div className="file-upload-zone">
              <p><span className="file-upload-label">Click to upload</span> or drag and drop</p>
              <p>PNG, JPG up to 5MB</p>
              <input type="file" accept="image/*" />
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Save Certification</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
