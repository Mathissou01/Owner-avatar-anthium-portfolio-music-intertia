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
                'genre' => 'Epic House',
                'bpm' => 120,
                'key' => 'C Major',
                'dropbox_link' => 'https://www.dropbox.com/scl/fi/23wbh23g5zwvqi3d6oksa/Columbine-Pierre-feuille-papier-ciseaux-Anthium-Remix.wav?rlkey=hwyf2ps63b03iylbwvqhlie73&e=1&st=92u7nud9&dl=0',
                'youtube_link' => 'https://www.youtube.com/embed/SC4JzMhJ3SU?si=3ZtaKle4ZN1LeW-p',
                'duration' => '00:04:58',
                'year' => 2024,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Une Histoire',
                'account_id' => 1,
                'artist' => 'Naza',
                'genre' => 'Summer House',
                'bpm' => 128,
                'key' => 'A Minor',
                'dropbox_link' => 'https://www.dropbox.com/scl/fi/co4hrjppehvllv0xcyqa4/Naza-Une-Histoire-ft.-Tiakola-Anthium-Remix.wav?rlkey=q8fmh56q8os1pb7w87zg093yk&e=1&st=buwh7ds2&dl=0',
                'youtube_link' => 'https://www.youtube.com/embed/kKx_-sT-uKw?si=K3o525TUcCFDzZhn',
                'duration' => '00:02:38',
                'year' => 2024,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Ce soir',
                'account_id' => 1,
                'artist' => 'Adèle Castillon ft. Gazo',
                'genre' => 'Epic House',
                'bpm' => 128,
                'key' => 'A Minor',
                'dropbox_link' => 'https://www.dropbox.com/scl/fi/09ihna1liaii87q2z5cci/Ad-le-Castillon-ft.-Gazo-Ce-soir-Anthium-Remix.wav?rlkey=48mckas4vk5bwmx7iej8drtfs&e=1&st=6gm3cyvf&dl=0',
                'youtube_link' => 'https://www.youtube.com/embed/UHKfuYRlwdQ?si=mOnJcvYe1EGp5xlT',
                'duration' => '00:03:48',
                'year' => 2024,
                'created_at' => now(),
                'updated_at' => now(),
                        ],
            // Ajoutez d'autres tracks ici si nécessaire
        ]);
    }
}
