<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TracksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tracks')->insert([
            [
                'title' => 'Pierre, feuille, papier, ciseaux',
                'account_id' => 1,
                'artist' => 'Columbine',
                'genre' => 'Genre 1',
                'bpm' => 120,
                'key' => 'C Major',
                'dropbox_link' => 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFBvc2tEeXVXV3ROaU9SXzQzMlRCNnhWS3dXZ3xBQ3Jtc0tscHFKYzVLMGc4NWMzRUFVYV9CN2YyV1Q5SDFXME5GV09najNITklNTnhQY1BETHF2MndBNHNHUXhHTU53elhMR2dmVlNfZllDX3Q3UnlDNllOY1p5dkQ0aG01WWw5LXJYUk9MQV9rc09zaXJxNFlRRQ&q=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2F23wbh23g5zwvqi3d6oksa%2FColumbine-Pierre-feuille-papier-ciseaux-Anthium-Remix.wav%3Frlkey%3Dhwyf2ps63b03iylbwvqhlie73%26st%3D92u7nud9%26dl%3D0&v=SC4JzMhJ3SU',
                'youtube_link' => 'https://www.youtube.com/watch?v=SC4JzMhJ3SU',
                'duration' => '00:04:58',
                'year' => 2024,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Une Histoire',
                'account_id' => 1,
                'artist' => 'Naza',
                'genre' => 'Genre 2',
                'bpm' => 128,
                'key' => 'A Minor',
                'dropbox_link' => 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa05WOU9hRWVESU5WbENobm1Yc2ZGdXhlX1U2d3xBQ3Jtc0ttSU5GMEtEdnlRWDBWVHNmdlhkQlpsS0x3ZkRLbUtJQWdyaHlmODljOWl4NVdRRGNBWk9sYXkwbXBfQVk5RHg3SEdLdTl0MHRRSFhmQVlJRUJPYkFYU2NqRjNVdFJGNGdUZEp5YVVTRkNuUXJpRGNxOA&q=https%3A%2F%2Fwww.dropbox.com%2Fscl%2Ffi%2Fco4hrjppehvllv0xcyqa4%2FNaza-Une-Histoire-ft.-Tiakola-Anthium-Remix.wav%3Frlkey%3Dq8fmh56q8os1pb7w87zg093yk%26st%3Dbuwh7ds2%26dl%3D0&v=kKx_-sT-uKw',
                'youtube_link' => 'https://www.youtube.com/watch?v=kKx_-sT-uKw',
                'duration' => '00:02:38',
                'year' => 2024,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Ajoutez d'autres tracks ici si nécessaire
        ]);
    }
}
