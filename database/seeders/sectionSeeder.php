<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sections;

class sectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $section = [

            [
                'division_id' => '3',
                'name' => 'Accounting',
                'slug' => 'accounting',
            ],
            [
                'division_id' => '3',
                'name' => 'Cashiering',
                'slug' => 'cashiering',
            ],
            [
                'division_id' => '3',
                'name' => 'Planning',
                'slug' => 'planning',
            ],
            [
                'division_id' => '3',
                'name' => 'Personnel',
                'slug' => 'personnel',
            ],
            [
                'division_id' => '3',
                'name' => 'Supply',
                'slug' => 'supply',
            ],
        ];

        Sections::insert($section);

    }
}
