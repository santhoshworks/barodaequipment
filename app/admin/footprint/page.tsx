'use client';

import { useForm } from 'react-hook-form';

interface FootprintForm {
  country: string;
  region: string;
  projectCount: string;
  description: string;
}

export default function FootprintPage() {
  const { register, handleSubmit, reset } = useForm<FootprintForm>();

  const onSubmit = (data: FootprintForm) => {
    console.log('Footprint submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Footprint</h1>
        <p>Manage global presence and project footprint data.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="country">Country</label>
              <input id="country" className="form-control" {...register('country', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="region">Region</label>
              <select id="region" className="form-control" {...register('region')}>
                <option value="">Select region</option>
                <option value="south-asia">South Asia</option>
                <option value="middle-east">Middle East</option>
                <option value="southeast-asia">Southeast Asia</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="projectCount">Number of Projects</label>
            <input id="projectCount" type="number" className="form-control" {...register('projectCount')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows={4} placeholder="Key projects, clients, or notes for this region..." {...register('description')} />
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Save Footprint</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
