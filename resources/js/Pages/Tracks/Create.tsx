import { Link, usePage, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import SelectInput from '@/Components/Form/SelectInput';
import { Organization } from '@/types';
import FieldGroup from '@/Components/Form/FieldGroup';

const Create = () => {
  // Exemple de données de genres musicaux
  const genres = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Jazz' },
    { id: 4, name: 'Classique' },
    { id: 5, name: 'Hip-hop' }
  ];
  const { data, setData, errors, post, processing } = useForm({
    title: '',
    artist: '',
    genre: '',
    bpm: '',
    key: '',
    dropbox_link: '',
    youtube_link: '',
    duration: '',
    year: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route('tracks.store'));
  }

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <Link
          href={route('tracks')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Tracks
        </Link>
        <span className="font-medium text-indigo-600"> /</span> Create
      </h1>
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
              error={errors?.genre}
            >
              <SelectInput
                name="genre"
                error={errors.genre}
                value={data.genre}
                onChange={e => setData('genre', e.target.value)}
                options={genres.map(genre => ({
                  value: String(genre.id),
                  label: genre.name
                }))}
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

            <FieldGroup label="Key" name="phone" error={errors.key}>
              <TextInput
                name="key"
                error={errors.key}
                value={data.key}
                onChange={e => setData('key', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Lien DropBox" name="dropbox_link" error={errors.dropbox_link}>
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
                type="text"
                name="duration"
                placeholder="hh:mm:ss"
                error={errors.duration}
                value={data.duration}
                onChange={e => setData('duration', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Année" name="country" error={errors.year}>
              <TextInput
                name="year"
                error={errors.year}
                value={data.year}
                onChange={e => setData('year', e.target.value)}
              />
            </FieldGroup>

          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-indigo"
            >
              Create Track
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
Create.layout = (page: React.ReactNode) => (
  <MainLayout title="Create Track" children={page} />
);

export default Create;
