<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Divisions;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $division = [
            [
                'name' => 'Provincial Assistance Complaints Coordianting Desk',
                'short_name' => 'PACCD',
                'slug' => 'provincial-assistance-complaints-coordianting-desk'
            ],

            [
                'name' => 'Program Beneficiaries Development Division',
                'short_name' => 'PBDD',
                'slug' => 'program-beneficiaries-development-division'
            ],

            [
                'name' => 'Support to Operations Division',
                'short_name' => 'STOD',
                'slug' => 'support-to-operations-division'
            ],

            [
                'name' => 'Legal Division',
                'short_name' => 'Legal Division',
                'slug' => 'legal-division'
            ],

            [
                'name' => 'Department of Agrarian Reform Adjudication Board',
                'short_name' => 'DARAB',
                'slug' => 'department-of-agrarian-reform-adjudication-board'
            ],

            [
                'name' => 'Department Of Agrarian Reform Municipal Offices',
                'short_name' => 'DARMO',
                'slug' => 'department-of-agrarian-reform-municipal-offices'
            ],

        ];

        Divisions::insert($division);
    }
}