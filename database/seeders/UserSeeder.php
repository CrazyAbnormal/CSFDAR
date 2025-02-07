<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'PACCD';
        $user->email = 'paccd.darzds@gmail.com';
        $user->account_type = 'admin';
        $user->password = bcrypt('dar-paccd');
        $user->divisions_id = 1;
        $user->save();

        $user = new User();
        $user->name = 'PBDD';
        $user->email = 'pbdd.darzds@gmail.com';
        $user->account_type = 'pbdd';
        $user->password = bcrypt('dar-pbdd');
        $user->divisions_id = 2;
        $user->save();
    }
}
