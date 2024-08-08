import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Pagination from '@/Components/Pagination/Pagination';
import FilterBar from '@/Components/FilterBar/FilterBar';
import { Track, PaginatedData } from '@/types';
import Table from '@/Components/Table/Table';
import { Trash2 } from 'lucide-react';

const Index = () => {
  const { tracks } = usePage<{
    tracks: PaginatedData<Track>;
  }>().props;

  const {
    data,
    meta: { links }
  } = tracks;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Tracks</h1>
      <div className="flex items-center justify-between mb-6">
        <FilterBar />
        <Link
          className="btn-indigo focus:outline-none"
          href={route('tracks.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> Tracks</span>
        </Link>
      </div>
      <Table
        columns={[
          {
            label: 'Title',
            name: 'title',
            renderCell: row => (
              <>
                {row.title}
                {row.deleted_at && (
                  <Trash2 size={16} className="ml-2 text-gray-400" />
                )}
              </>
            )
          },
          { label: 'Key', name: 'key' },
          { label: 'Artiste', name: 'artist' },
          { label: 'Genre', name: 'genre', colSpan: 2 }
        ]}
        rows={data}
        getRowDetailsUrl={row => route('tracks.edit', row.id)}
      />
      <Pagination links={links} />
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Tracks" children={page} />
);

export default Index;
