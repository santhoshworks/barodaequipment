'use client';

import { useForm } from 'react-hook-form';

interface DownloadForm {
  title: string;
  category: string;
  description: string;
}

export default function DownloadsPage() {
  const { register, handleSubmit, reset } = useForm<DownloadForm>();

  const onSubmit = (data: DownloadForm) => {
    console.log('Download submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Downloads</h1>
        <p>Upload and manage downloadable documents and brochures.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="title">Document Title</label>
              <input id="title" className="form-control" placeholder="e.g. Company Brochure 2026" {...register('title', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="category">Category</label>
              <select id="category" className="form-control" {...register('category')}>
                <option value="">Select category</option>
                <option value="brochure">Brochure</option>
                <option value="datasheet">Product Datasheet</option>
                <option value="certificate">Certificate</option>
                <option value="manual">Technical Manual</option>
                <option value="report">Report</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows={3} placeholder="Brief description of the document..." {...register('description')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Upload File</label>
            <div className="file-upload-zone">
              <p><span className="file-upload-label">Click to upload</span> or drag and drop</p>
              <p>PDF, DOC, XLS up to 20MB</p>
              <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" />
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Upload Document</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
