<?php

namespace Database\Seeders;

use App\Models\Intoxication;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IntoxicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Intoxication::factory(250)->create();
    }
}
