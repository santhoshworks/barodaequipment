'use client';

import { useForm } from 'react-hook-form';

interface VacancyForm {
  jobTitle: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  status: string;
}

export default function VacanciesPage() {
  const { register, handleSubmit, reset } = useForm<VacancyForm>();

  const onSubmit = (data: VacancyForm) => {
    console.log('Vacancy submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Vacancies</h1>
        <p>Post job openings and manage vacancy listings.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="jobTitle">Job Title</label>
              <input id="jobTitle" className="form-control" placeholder="e.g. Welding Engineer" {...register('jobTitle', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="department">Department</label>
              <select id="department" className="form-control" {...register('department')}>
                <option value="">Select department</option>
                <option value="engineering">Engineering</option>
                <option value="production">Production</option>
                <option value="quality">Quality Assurance</option>
                <option value="sales">Sales &amp; Marketing</option>
                <option value="admin">Administration</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="location">Location</label>
              <input id="location" className="form-control" placeholder="e.g. Vadodara, Gujarat" {...register('location')} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="type">Employment Type</label>
              <select id="type" className="form-control" {...register('type')}>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="description">Job Description</label>
            <textarea id="description" className="form-control" rows={5} placeholder="Describe the role, responsibilities..." {...register('description', { required: true })} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="requirements">Requirements</label>
            <textarea id="requirements" className="form-control" rows={4} placeholder="Qualifications, experience, skills..." {...register('requirements')} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="status">Status</label>
            <select id="status" className="form-control" {...register('status')}>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Post Vacancy</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
