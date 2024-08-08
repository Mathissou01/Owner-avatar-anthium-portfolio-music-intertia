import React from 'react';
import { Head } from '@inertiajs/react';
import { Link, usePage, useForm, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import DeleteButton from '@/Components/Button/DeleteButton';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import SelectInput from '@/Components/Form/SelectInput';
import TrashedMessage from '@/Components/Messages/TrashedMessage';
import { Track } from '@/types';
import FieldGroup from '@/Components/Form/FieldGroup';

const Edit = () => {
  const { track } = usePage<{
    track: Track;
  }>().props;

  const { data, setData, errors, put, processing } = useForm({
    title: track.title || '',
    artist: track.artist || '',
    genre: track.genre || '',
    bpm: track.bpm || '',
    key: track.key || '',
    dropbox_link: track.dropbox_link || '',
    youtube_link: track.youtube_link || '',
    duration: track.duration || '',
    year: track.year || ''
  });

  // Exemple de données de genres musicaux
  const genres = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Jazz' },
    { id: 4, name: 'Classique' },
    { id: 5, name: 'Hip-hop' }
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    put(route('tracks.update', track.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this contact?')) {
      router.delete(route('tracks.destroy', track.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this contact?')) {
      router.put(route('tracks.restore', track.id));
    }
  }

  return (
    <div>
      <Head title={`${data.title} ${data.artist}`} />
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          href={route('tracks')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Tracks
        </Link>
        <span className="mx-2 font-medium text-indigo-600">/</span>
        {data.title} {data.artist}
      </h1>
      {track.deleted_at && (
        <TrashedMessage
          message="This track has been deleted."
          onRestore={restore}
        />
      )}
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-8 lg:grid-cols-2">
            <FieldGroup
              label="Titre"
              name="title"
              error={errors.title}
            >
              <TextInput
                name="title"
                error={errors.title}
                value={data.title}
                onChange={e => setData('title', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup
              label="Artiste"
              name="artist"
              error={errors.artist}
            >
              <TextInput
                name="artist"
                error={errors.artist}
                value={data.artist}
                onChange={e => setData('artist', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup
              label="Genre"
              name="genre"
              error={errors.genre}
            >
              <SelectInput
                name="genre"
                error={errors.genre}
                value={data.genre}
                onChange={e => setData('genre', e.target.value)}
                options={[
                  {
                    value: '',
                    label: ''
                  },
                  ...genres.map(genre => ({
                    value: String(genre.name),
                    label: genre.name
                  }))
                ]}
              />
            </FieldGroup>

            <FieldGroup label="Bpm" name="bpm" error={errors.bpm}>
              <TextInput
                name="bpm"
                type="bpm"
                error={errors.bpm}
                value={data.bpm}
                onChange={e => setData('bpm', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Key" name="key" error={errors.key}>
              <TextInput
                name="key"
                type="key"
                error={errors.key}
                value={data.key}
                onChange={e => setData('key', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Lien Dropbox" name="dropbox_link" error={errors.dropbox_link}>
              <TextInput
                name="dropbox_link"
                error={errors.dropbox_link}
                value={data.dropbox_link}
                onChange={e => setData('dropbox_link', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Lien Youtube" name="youtube_link" error={errors.youtube_link}>
              <TextInput
                name="youtube_link"
                error={errors.youtube_link}
                value={data.youtube_link}
                onChange={e => setData('youtube_link', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Durée" name="duration" error={errors.duration}>
              <TextInput
                name="duration"
                error={errors.duration}
                value={data.duration}
                onChange={e => setData('duration', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup
              label="Année"
              name="year"
              error={errors.year}
            >
              <TextInput
                name="year"
                error={errors.year}
                value={data.year}
                onChange={e => setData('year', e.target.value)}
              />
            </FieldGroup>

          </div>
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {!track.deleted_at && (
              <DeleteButton onDelete={destroy}>Delete Track</DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-indigo"
            >
              Update Track
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Edit.layout = (page: React.ReactNode) => <MainLayout children={page} />;

export default Edit;
