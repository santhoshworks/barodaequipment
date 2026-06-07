'use client';

import { useForm } from 'react-hook-form';

interface GalleryForm {
  title: string;
  category: string;
  description: string;
}

export default function GalleryPage() {
  const { register, handleSubmit, reset } = useForm<GalleryForm>();

  const onSubmit = (data: GalleryForm) => {
    console.log('Gallery item submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Image Gallery</h1>
        <p>Upload and manage facility and project images.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="title">Image Title</label>
              <input id="title" className="form-control" placeholder="e.g. CNC Cutting Bay" {...register('title', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="category">Category</label>
              <select id="category" className="form-control" {...register('category')}>
                <option value="">Select category</option>
                <option value="facility">Facility</option>
                <option value="equipment">Equipment</option>
                <option value="projects">Projects</option>
                <option value="team">Team</option>
                <option value="events">Events</option>
              </select>
            </div>
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows={3} placeholder="Brief caption or description..." {...register('description')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Upload Images</label>
            <div className="file-upload-zone">
              <p><span className="file-upload-label">Click to upload</span> or drag and drop</p>
              <p>PNG, JPG, WEBP up to 10MB each</p>
              <input type="file" accept="image/*" multiple />
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Upload Images</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
