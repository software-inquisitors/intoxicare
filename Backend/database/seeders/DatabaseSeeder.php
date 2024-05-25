<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Alejandro Flórez',
            'email' => 'Alejandro.1701913677@ucaldas.edu.co',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'), // Usa Hash para encriptar la contraseña
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
