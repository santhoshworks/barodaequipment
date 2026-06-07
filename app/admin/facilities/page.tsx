'use client';

import { useForm } from 'react-hook-form';

interface FacilityForm {
  name: string;
  location: string;
  area: string;
  description: string;
  equipment: string;
}

export default function FacilitiesPage() {
  const { register, handleSubmit, reset } = useForm<FacilityForm>();

  const onSubmit = (data: FacilityForm) => {
    console.log('Facility submitted:', data);
    reset();
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Facilities</h1>
        <p>Manage manufacturing facility information.</p>
      </div>

      <div className="admin-form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Facility Name</label>
              <input id="name" className="form-control" placeholder="e.g. Main Workshop" {...register('name', { required: true })} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="location">Location</label>
              <input id="location" className="form-control" placeholder="e.g. Makarpura GIDC, Vadodara" {...register('location', { required: true })} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="area">Total Area (sq ft)</label>
            <input id="area" type="number" className="form-control" {...register('area')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows={3} placeholder="Overview of the facility..." {...register('description')} />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="equipment">Key Equipment</label>
            <textarea id="equipment" className="form-control" rows={4} placeholder="CNC machines, welding stations, cranes, etc. (one per line)" {...register('equipment')} />
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary">Save Facility</button>
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
