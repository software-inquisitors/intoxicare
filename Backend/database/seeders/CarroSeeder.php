<?php

namespace Database\Seeders;

use App\Models\Carro;
use Illuminate\Database\Seeder;

class CarroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Carro::factory(20)->create();
    }
}
