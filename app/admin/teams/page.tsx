'use client';

import { useForm } from 'react-hook-form';

interface TeamForm {
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
}

export default function TeamsPage() {
  const { register, handleSubmit, reset } = useForm<TeamForm>();

  const onSubmit = (data: TeamForm) => {
    console.log('Team member submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Teams</h1>
        <p>Add and manage team member profiles.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input id="name" className="form-control" {...register('name', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="title">Job Title</label>
              <input id="title" className="form-control" placeholder="e.g. Senior Design Engineer" {...register('title', { required: true })} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="department">Department</label>
              <select id="department" className="form-control" {...register('department')}>
                <option value="">Select department</option>
                <option value="engineering">Engineering</option>
                <option value="production">Production</option>
                <option value="quality">Quality Assurance</option>
                <option value="sales">Sales &amp; Marketing</option>
                <option value="admin">Administration</option>
                <option value="management">Management</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="form-control" {...register('email')} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone</label>
            <input id="phone" type="tel" className="form-control" {...register('phone')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="bio">Bio</label>
            <textarea id="bio" className="form-control" rows={3} placeholder="Short professional bio..." {...register('bio')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Photo</label>
            <div className="file-upload-zone">
              <p><span className="file-upload-label">Click to upload</span> or drag and drop</p>
              <p>PNG, JPG up to 2MB</p>
              <input type="file" accept="image/*" />
            </div>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Save Team Member</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
