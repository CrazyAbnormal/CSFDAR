<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
        $this->call(UserSeeder::class);
        $this->call(DimensionSeeder::class);
        $this->call(CcQuestionSeeder::class);
        $this->call(serviceSeeder::class);
        $this->call(divisionSeeder::class);
        $this->call(sectionSeeder::class);
        $this->call(ShowDateCSFFormSeeder::class);
        
     
    }

    
}
